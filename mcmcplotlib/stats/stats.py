import numpy as np
import pandas as pd
import warnings
from ..utils import get_stats, get_varnames, trace_to_dataframe, log_post_trace
from .diagnostics import effective_n, gelman_rubin
from scipy.special import logsumexp

__all__ = ['bfmi', 'hpd', 'loo', 'r2_score', 'summary', 'waic']


def bfmi(trace):
    R"""Calculate the estimated Bayesian fraction of missing information (BFMI).

    BFMI quantifies how well momentum resampling matches the marginal energy distribution. For more
    information on BFMI, see https://arxiv.org/pdf/1604.00695.pdf.  The current advice is that
    values smaller than 0.2 indicate poor sampling. However, this threshold is provisional and may
    change.  See http://mc-stan.org/users/documentation/case-studies/pystan_workflow.html for more
    information.

    Parameters
    ----------
    trace : result of an HMC/NUTS run, must contain energy information

    Returns
    -------
    z : float
        The Bayesian fraction of missing information of the model and trace.
    """
    energy = get_stats(trace, 'energy')

    return np.square(np.diff(energy)).mean() / np.var(energy)


def hpd(x, alpha=0.05, transform=lambda x: x):
    """
    Calculate highest posterior density (HPD) of array for given alpha. The HPD is the minimum width
    Bayesian credible interval (BCI).

    Parameters
    ----------
    x : Numpy array
        An array containing posterior samples
    alpha : float
        Desired probability of type I error (defaults to 0.05)
    transform : callable
        Function to transform data (defaults to identity)
    """
    # Make a copy of trace
    x = transform(x.copy())

    # For multivariate node
    if x.ndim > 1:

        # Transpose first, then sort
        tx = np.transpose(x, list(range(x.ndim))[1:] + [0])
        dims = np.shape(tx)

        # Container list for intervals
        intervals = np.resize(0.0, dims[:-1] + (2,))

        for index in _make_indices(dims[:-1]):

            try:
                index = tuple(index)
            except TypeError:
                pass

            # Sort trace
            sx = np.sort(tx[index])

            # Append to list
            intervals[index] = _calc_min_interval(sx, alpha)

        # Transpose back before returning
        return np.array(intervals)

    else:
        # Sort univariate node
        sx = np.sort(x)

        return _calc_min_interval(sx, alpha)


def _make_indices(dimensions):
    """ 
    Generates complete set of indices for given dimensions
    """
    level = len(dimensions)
    if level == 1:
        return list(range(dimensions[0]))
    indices = [[]]
    while level:
        _indices = []
        for j in range(dimensions[level - 1]):
            _indices += [[j] + i for i in indices]
        indices = _indices
        level -= 1
    try:
        return [tuple(i) for i in indices]
    except TypeError:
        return indices


def _calc_min_interval(x, alpha):
    """
    Internal method to determine the minimum interval of a given width. Assumes that x is a sorted
    numpy array.
    """
    n = len(x)
    cred_mass = 1.0 - alpha

    interval_idx_inc = int(np.floor(cred_mass * n))
    n_intervals = n - interval_idx_inc
    interval_width = x[interval_idx_inc:] - x[:n_intervals]

    if len(interval_width) == 0:
        raise ValueError('Too few elements for interval calculation')

    min_idx = np.argmin(interval_width)
    hdi_min = x[min_idx]
    hdi_max = x[min_idx + interval_idx_inc]
    return hdi_min, hdi_max


def _hpd_df(x, alpha):
    cnames = ['hpd_{0:g}'.format(100 * alpha / 2),
              'hpd_{0:g}'.format(100 * (1 - alpha / 2))]
    return pd.DataFrame(hpd(x, alpha), columns=cnames)


def loo(trace, model, pointwise=False, reff=None):
    """Calculates leave-one-out (LOO) cross-validation for out of sample
    predictive model fit, following Vehtari et al. (2015). Cross-validation is
    computed using Pareto-smoothed importance sampling (PSIS).
    Parameters
    ----------
    trace : result of MCMC run
    model : PyMC Model
        Optional model. Default None, taken from context.
    pointwise: bool
        if True the pointwise predictive accuracy will be returned.
        Default False
    reff : float
        relative MCMC efficiency, `effective_n / n` i.e. number of effective
        samples divided by the number of actual samples. Computed from trace by
        default.

    Returns
    -------
    DataFrame with the following columns:
    loo: approximated Leave-one-out cross-validation
    loo_se: standard error of loo
    p_loo: effective number of parameters
    shape_warn: 1 if the estimated shape parameter of 
        Pareto distribution is greater than 0.7 for one or more samples
    loo_i: array of pointwise predictive accuracy, only if pointwise True
    """

    if reff is None:
        df = trace_to_dataframe(trace, combined=False)
        nchains = df.columns.value_counts()[0]
        if nchains == 1:
            reff = 1.
        else:
            eff_ave = effective_n(df).mean()
            samples = len(df) * nchains
            reff = eff_ave / samples

    log_py = log_post_trace(trace, model)

    lw, ks = _psislw(-log_py, reff)
    lw += log_py

    warn_mg = 0
    if np.any(ks > 0.7):
        warnings.warn("""Estimated shape parameter of Pareto distribution is
        greater than 0.7 for one or more samples.
        You should consider using a more robust model, this is because
        importance sampling is less likely to work well if the marginal
        posterior and LOO posterior are very different. This is more likely to
        happen with a non-robust model and highly influential observations.""")
        warn_mg = 1

    loo_lppd_i = - 2 * logsumexp(lw, axis=0)
    loo_lppd = loo_lppd_i.sum()
    loo_lppd_se = (len(loo_lppd_i) * np.var(loo_lppd_i)) ** 0.5
    lppd = np.sum(logsumexp(log_py, axis=0, b=1. / log_py.shape[0]))
    p_loo = lppd + (0.5 * loo_lppd)

    if pointwise:
        if np.equal(loo_lppd, loo_lppd_i).all():
            warnings.warn("""The point-wise LOO is the same with the sum LOO,
            please double check the Observed RV in your model to make sure it
            returns element-wise logp.
            """)
        return pd.DataFrame([[loo_lppd, loo_lppd_se, p_loo, warn_mg, loo_lppd_i]],
                            columns=['loo', 'loo_se', 'p_loo', 'warning', 'loo_i'])
    else:
        return pd.DataFrame([[loo_lppd, loo_lppd_se, p_loo, warn_mg, loo_lppd_i]],
                            columns=['loo', 'loo_se', 'p_loo', 'warning', 'loo_i'])


def _psislw(lw, reff):
    """Pareto smoothed importance sampling (PSIS).
    Parameters
    ----------
    lw : array
        Array of size (n_samples, n_observations)
    reff : float
        relative MCMC efficiency, `effective_n / n`
    Returns
    -------
    lw_out : array
        Smoothed log weights
    kss : array
        Pareto tail indices
    """
    n, m = lw.shape

    lw_out = np.copy(lw, order='F')
    kss = np.empty(m)

    # precalculate constants
    cutoff_ind = - int(np.ceil(min(n / 0.5, 3 * (n / reff) ** 0.5))) - 1
    cutoffmin = np.log(np.finfo(float).tiny)
    k_min = 1. / 3

    # loop over sets of log weights
    for i, x in enumerate(lw_out.T):
        # improve numerical accuracy
        x -= np.max(x)
        # sort the array
        x_sort_ind = np.argsort(x)
        # divide log weights into body and right tail
        xcutoff = max(x[x_sort_ind[cutoff_ind]], cutoffmin)

        expxcutoff = np.exp(xcutoff)
        tailinds, = np.where(x > xcutoff)
        x2 = x[tailinds]
        n2 = len(x2)
        if n2 <= 4:
            # not enough tail samples for gpdfit
            k = np.inf
        else:
            # order of tail samples
            x2si = np.argsort(x2)
            # fit generalized Pareto distribution to the right tail samples
            x2 = np.exp(x2) - expxcutoff
            k, sigma = _gpdfit(x2[x2si])

        if k >= k_min and not np.isinf(k):
            # no smoothing if short tail or GPD fit failed
            # compute ordered statistic for the fit
            sti = np.arange(0.5, n2) / n2
            qq = _gpinv(sti, k, sigma)
            qq = np.log(qq + expxcutoff)
            # place the smoothed tail into the output array
            x[tailinds[x2si]] = qq
            # truncate smoothed values to the largest raw weight 0
            x[x > 0] = 0
        # renormalize weights
        x -= logsumexp(x)
        # store tail index k
        kss[i] = k

    return lw_out, kss


def _gpdfit(x):
    """Estimate the parameters for the Generalized Pareto Distribution (GPD)
    Empirical Bayes estimate for the parameters of the generalized Pareto
    distribution given the data.
    Parameters
    ----------
    x : array
        sorted 1D data array
    Returns
    -------
    k : float
        estimated shape parameter
    sigma : float
        estimated scale parameter
    """
    prior_bs = 3
    prior_k = 10
    n = len(x)
    m = 30 + int(n**0.5)

    bs = 1 - np.sqrt(m / (np.arange(1, m + 1, dtype=float) - 0.5))
    bs /= prior_bs * x[int(n/4 + 0.5) - 1]
    bs += 1 / x[-1]

    ks = np.log1p(-bs[:, None] * x).mean(axis=1)
    L = n * (np.log(-(bs / ks)) - ks - 1)
    w = 1 / np.exp(L - L[:, None]).sum(axis=1)

    # remove negligible weights
    dii = w >= 10 * np.finfo(float).eps
    if not np.all(dii):
        w = w[dii]
        bs = bs[dii]
    # normalise w
    w /= w.sum()

    # posterior mean for b
    b = np.sum(bs * w)
    # estimate for k
    k = np.log1p(- b * x).mean()
    # add prior for k
    k = (n * k + prior_k * 0.5) / (n + prior_k)
    sigma = - k / b

    return k, sigma


def _gpinv(p, k, sigma):
    """Inverse Generalized Pareto distribution function"""
    x = np.full_like(p, np.nan)
    if sigma <= 0:
        return x
    ok = (p > 0) & (p < 1)
    if np.all(ok):
        if np.abs(k) < np.finfo(float).eps:
            x = - np.log1p(-p)
        else:
            x = np.expm1(-k * np.log1p(-p)) / k
        x *= sigma
    else:
        if np.abs(k) < np.finfo(float).eps:
            x[ok] = - np.log1p(-p[ok])
        else:
            x[ok] = np.expm1(-k * np.log1p(-p[ok])) / k
        x *= sigma
        x[p == 0] = 0
        if k >= 0:
            x[p == 1] = np.inf
        else:
            x[p == 1] = - sigma / k

    return x


def r2_score(y_true, y_pred, round_to=2):
    """
    R-squared for Bayesian regression models. Only valid for linear models.
    http://www.stat.columbia.edu/%7Egelman/research/unpublished/bayes_R2.pdf

    Parameters
    ----------
    y_true: : array-like of shape = (n_samples) or (n_samples, n_outputs)
        Ground truth (correct) target values.
    y_pred : array-like of shape = (n_samples) or (n_samples, n_outputs)
        Estimated target values.
    round_to : int
        Number of decimals used to round results (default 2).

    Returns
    -------
    Pandas Series with the following indices:
    R2_median: median of the Bayesian R2
    R2_mean: mean of the Bayesian R2
    R2_std: standard deviation of the Bayesian R2
    """
    dimension = None
    if y_true.ndim > 1:
        dimension = 1

    var_y_est = np.var(y_pred, axis=dimension)
    var_e = np.var(y_true - y_pred, axis=dimension)

    r2 = var_y_est / (var_y_est + var_e)
    return pd.Series([np.median(r2), np.mean(r2), np.std(r2)],
                     index=['r2_median', 'r2_mean', 'r2_std'])


def summary(trace, varnames=None, round_to=2, transform=lambda x: x,
            stat_funcs=None, extend=False, alpha=0.05, skip_first=0, batches=None):
    R"""
    Create a data frame with summary statistics.

    Parameters
    ----------
    trace : Pandas DataFrame or PyMC3 trace
        Posterior samples
    varnames : list
        Names of variables to include in summary
    round_to : int
        Controls formatting for floating point numbers. Default 2.
    transform : callable
        Function to transform data (defaults to identity)
    stat_funcs : None or list
        A list of functions used to calculate statistics. By default, the mean, standard deviation,
        simulation standard error, and highest posterior density intervals are included.

        The functions will be given one argument, the samples for a variable as a 2 dimensional
        array, where the first axis corresponds to sampling iterations and the second axis
        represents the flattened variable (e.g., x__0, x__1,...). Each function should return either

        1) A `pandas.Series` instance containing the result of calculating the statistic along the
           first axis. The name attribute will be taken as the name of the statistic.
        2) A `pandas.DataFrame` where each column contains the result of calculating the statistic
           along the first axis. The column names will be taken as the names of the statistics.
    extend : boolean
        If True, use the statistics returned by `stat_funcs` in addition to, rather than in place
        of, the default statistics. This is only meaningful when `stat_funcs` is not None.
    include_transformed : bool
        Flag for reporting automatically transformed variables in addition to original variables
        (defaults to False).
    alpha : float
        The alpha level for generating posterior intervals. Defaults to 0.05. This is only
        meaningful when `stat_funcs` is None.
    skip_first : int
        Number of first samples not shown in plots (burn-in).
    batches : None or int
        Batch size for calculating standard deviation for non-independent samples. Defaults to the
        smaller of 100 or the number of samples. This is only meaningful when `stat_funcs` is None.

    Returns
    -------
    `pandas.DataFrame` with summary statistics for each variable Defaults one are: `mean`, `sd`,
    `mc_error`, `hpd_2.5`, `hpd_97.5`, `n_eff` and `Rhat`. Last two are only computed for traces
    with 2 or more chains.

    Examples
    --------
    .. code:: ipython
        >>> pm.summary(trace, ['mu'])
                   mean        sd  mc_error     hpd_5    hpd_95
        mu__0  0.106897  0.066473  0.001818 -0.020612  0.231626
        mu__1 -0.046597  0.067513  0.002048 -0.174753  0.081924

                  n_eff      Rhat
        mu__0     487.0   1.00001
        mu__1     379.0   1.00203

    Other statistics can be calculated by passing a list of functions.

    .. code:: ipython

        >>> import pandas as pd
        >>> def trace_sd(x):
        ...     return pd.Series(np.std(x, 0), name='sd')
        ...
        >>> def trace_quantiles(x):
        ...     return pd.DataFrame(pm.quantiles(x, [5, 50, 95]))
        ...
        >>> pm.summary(trace, ['mu'], stat_funcs=[trace_sd, trace_quantiles])
                     sd         5        50        95
        mu__0  0.066473  0.000312  0.105039  0.214242
        mu__1  0.067513 -0.159097 -0.045637  0.062912
    """
    trace = trace_to_dataframe(trace, combined=False)[skip_first:]
    varnames = get_varnames(trace, varnames)

    if batches is None:
        batches = min([100, len(trace)])

    cnames = ['hpd_{0:g}'.format(100 * alpha / 2),
              'hpd_{0:g}'.format(100 * (1 - alpha / 2))]

    funcs = [lambda x: pd.Series(np.mean(x, 0), name='mean').round(round_to),
             lambda x: pd.Series(np.std(x, 0), name='sd').round(round_to),
             lambda x: pd.Series(_mc_error(x, batches).round(round_to), name='mc_error'),
             lambda x: pd.DataFrame([hpd(x, alpha)], columns=cnames).round(round_to)]

    if stat_funcs is not None:
        if extend:
            funcs = funcs + stat_funcs
        else:
            funcs = stat_funcs

    var_dfs = []
    for var in varnames:
        vals = np.ravel(trace[var].values)
        var_df = pd.concat([f(vals) for f in funcs], axis=1)
        var_df.index = [var]
        var_dfs.append(var_df)
    dforg = pd.concat(var_dfs, axis=0)

    if (stat_funcs is not None) and (not extend):
        return dforg
    elif trace.columns.value_counts()[0] < 2:
        return dforg
    else:
        n_eff = effective_n(trace, varnames=varnames, round_to=round_to)
        rhat = gelman_rubin(trace, varnames=varnames, round_to=round_to)
        return pd.concat([dforg, n_eff, rhat], axis=1, join_axes=[dforg.index])


def _mc_error(x, batches=5):
    R"""
    Calculates the simulation standard error, accounting for non-independent samples. The trace is
    divided into batches, and the standard deviation of the batch means is calculated.

    Parameters
    ----------
    x : Numpy array
        An array containing MCMC samples
    batches : integer
        Number of batches

    Returns
    -------
    `float` representing the error
    """
    if x.ndim > 1:

        dims = np.shape(x)
        #ttrace = np.transpose(np.reshape(trace, (dims[0], sum(dims[1:]))))
        trace = np.transpose([t.ravel() for t in x])

        return np.reshape([_mc_error(t, batches) for t in trace], dims[1:])

    else:
        if batches == 1:
            return np.std(x) / np.sqrt(len(x))

        try:
            batched_traces = np.resize(x, (batches, int(len(x) / batches)))
        except ValueError:
            # If batches do not divide evenly, trim excess samples
            resid = len(x) % batches
            new_shape = (batches, (len(x) - resid) / batches)
            batched_traces = np.resize(x[:-resid], new_shape)

        means = np.mean(batched_traces, 1)

        return np.std(means) / np.sqrt(batches)


def waic(trace, model, pointwise=False):
    """Calculate the widely available information criterion, its standard error
    and the effective number of parameters of the samples in trace from model.
    Read more theory here - in a paper by some of the leading authorities on
    model selection - dx.doi.org/10.1111/1467-9868.00353

    Parameters
    ----------
    trace : result of MCMC run
    model : Probabilistic Model
    pointwise: bool
        if True the pointwise predictive accuracy will be returned.
        Default False

    Returns
    -------
    DataFrame with the following columns:
    waic: widely available information criterion
    waic_se: standard error of waic
    p_waic: effective number parameters
    var_warn: 1 if posterior variance of the log predictive 
         densities exceeds 0.4
    waic_i: and array of the pointwise predictive accuracy, only if pointwise True
    """

    log_py = log_post_trace(trace, model)

    lppd_i = logsumexp(log_py, axis=0, b=1.0 / log_py.shape[0])

    vars_lpd = np.var(log_py, axis=0)
    warn_mg = 0
    if np.any(vars_lpd > 0.4):
        warnings.warn("""For one or more samples the posterior variance of the
        log predictive densities exceeds 0.4. This could be indication of
        WAIC starting to fail see http://arxiv.org/abs/1507.04544 for details
        """)
        warn_mg = 1

    waic_i = - 2 * (lppd_i - vars_lpd)
    waic_se = (len(waic_i) * np.var(waic_i))**0.5
    waic = np.sum(waic_i)
    p_waic = np.sum(vars_lpd)

    if pointwise:
        if np.equal(waic, waic_i).all():
            warnings.warn("""The point-wise WAIC is the same with the sum WAIC,
            please double check the Observed RV in your model to make sure it
            returns element-wise logp.
            """)
        return pd.DataFrame([[waic, waic_se, p_waic, warn_mg, waic_i]],
                            columns=['waic', 'waic_se', 'p_waic', 'warning', 'waic_i'])
    else:
        return pd.DataFrame([[waic, waic_se, p_waic, warn_mg, ]],
                            columns=['waic', 'waic_se', 'p_waic', 'warning'])