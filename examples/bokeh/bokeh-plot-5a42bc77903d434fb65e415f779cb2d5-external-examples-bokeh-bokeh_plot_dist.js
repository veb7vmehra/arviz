(function() {
  var fn = function() {
    
    (function(root) {
      function now() {
        return new Date();
      }
    
      var force = false;
    
      if (typeof root._bokeh_onload_callbacks === "undefined" || force === true) {
        root._bokeh_onload_callbacks = [];
        root._bokeh_is_loading = undefined;
      }
    
      
      
    
      
      
    
      function run_callbacks() {
        try {
          root._bokeh_onload_callbacks.forEach(function(callback) {
            if (callback != null)
              callback();
          });
        } finally {
          delete root._bokeh_onload_callbacks
        }
        console.debug("Bokeh: all callbacks have finished");
      }
    
      function load_libs(css_urls, js_urls, callback) {
        if (css_urls == null) css_urls = [];
        if (js_urls == null) js_urls = [];
    
        root._bokeh_onload_callbacks.push(callback);
        if (root._bokeh_is_loading > 0) {
          console.debug("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.debug("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        root._bokeh_is_loading = css_urls.length + js_urls.length;
    
        function on_load() {
          root._bokeh_is_loading--;
          if (root._bokeh_is_loading === 0) {
            console.debug("Bokeh: all BokehJS libraries/stylesheets loaded");
            run_callbacks()
          }
        }
    
        function on_error() {
          console.error("failed to load " + url);
        }
    
        for (var i = 0; i < css_urls.length; i++) {
          var url = css_urls[i];
          const element = document.createElement("link");
          element.onload = on_load;
          element.onerror = on_error;
          element.rel = "stylesheet";
          element.type = "text/css";
          element.href = url;
          console.debug("Bokeh: injecting link tag for BokehJS stylesheet: ", url);
          document.body.appendChild(element);
        }
    
        for (var i = 0; i < js_urls.length; i++) {
          var url = js_urls[i];
          var element = document.createElement('script');
          element.onload = on_load;
          element.onerror = on_error;
          element.async = false;
          element.src = url;
          console.debug("Bokeh: injecting script tag for BokehJS library: ", url);
          document.head.appendChild(element);
        }
      };var element = document.getElementById("753919e0-5dd6-4fae-a825-2255bd3a34c1");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid '753919e0-5dd6-4fae-a825-2255bd3a34c1' but no matching script tag was found. ")
        return false;
      }
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      
      var js_urls = ["https://cdn.pydata.org/bokeh/release/bokeh-1.4.0.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-widgets-1.4.0.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-tables-1.4.0.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-gl-1.4.0.min.js"];
      var css_urls = [];
      
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          (function() {
            var fn = function() {
              Bokeh.safely(function() {
                (function(root) {
                  function embed_document(root) {
                    
                  var docs_json = '{"bd4d6a62-8508-4fd7-b2b0-23e63aa9a8f1":{"roots":{"references":[{"attributes":{"formatter":{"id":"95875","type":"BasicTickFormatter"},"ticker":{"id":"95812","type":"BasicTicker"}},"id":"95811","type":"LinearAxis"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"95853","type":"PanTool"},{"id":"95854","type":"WheelZoomTool"},{"id":"95855","type":"BoxZoomTool"},{"id":"95856","type":"SaveTool"},{"id":"95857","type":"ResetTool"},{"id":"95858","type":"HelpTool"}]},"id":"95859","type":"Toolbar"},{"attributes":{"below":[{"id":"95843","type":"LinearAxis"}],"center":[{"id":"95847","type":"Grid"},{"id":"95852","type":"Grid"},{"id":"95892","type":"Legend"}],"left":[{"id":"95848","type":"LinearAxis"}],"output_backend":"webgl","plot_height":500,"plot_width":500,"renderers":[{"id":"95883","type":"GlyphRenderer"}],"title":{"id":"95885","type":"Title"},"toolbar":{"id":"95859","type":"Toolbar"},"x_range":{"id":"95835","type":"DataRange1d"},"x_scale":{"id":"95839","type":"LinearScale"},"y_range":{"id":"95837","type":"DataRange1d"},"y_scale":{"id":"95841","type":"LinearScale"}},"id":"95834","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null},"id":"95835","type":"DataRange1d"},{"attributes":{"formatter":{"id":"95889","type":"BasicTickFormatter"},"ticker":{"id":"95844","type":"BasicTicker"}},"id":"95843","type":"LinearAxis"},{"attributes":{"items":[{"id":"95879","type":"LegendItem"}]},"id":"95878","type":"Legend"},{"attributes":{"callback":null},"id":"95805","type":"DataRange1d"},{"attributes":{},"id":"95856","type":"SaveTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"95821","type":"PanTool"},{"id":"95822","type":"WheelZoomTool"},{"id":"95823","type":"BoxZoomTool"},{"id":"95824","type":"SaveTool"},{"id":"95825","type":"ResetTool"},{"id":"95826","type":"HelpTool"}]},"id":"95827","type":"Toolbar"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"95877","type":"BoxAnnotation"},{"attributes":{"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"95881","type":"Line"},{"attributes":{"items":[{"id":"95893","type":"LegendItem"}]},"id":"95892","type":"Legend"},{"attributes":{"overlay":{"id":"95891","type":"BoxAnnotation"}},"id":"95855","type":"BoxZoomTool"},{"attributes":{},"id":"95826","type":"HelpTool"},{"attributes":{"label":{"value":"Poisson"},"renderers":[{"id":"95869","type":"GlyphRenderer"}]},"id":"95879","type":"LegendItem"},{"attributes":{"source":{"id":"95866","type":"ColumnDataSource"}},"id":"95870","type":"CDSView"},{"attributes":{"bottom":{"value":0},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"left":{"field":"left"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"right":{"field":"right"},"top":{"field":"top"}},"id":"95868","type":"Quad"},{"attributes":{},"id":"95911","type":"UnionRenderers"},{"attributes":{},"id":"95809","type":"LinearScale"},{"attributes":{"children":[{"id":"95802","subtype":"Figure","type":"Plot"},{"id":"95834","subtype":"Figure","type":"Plot"}]},"id":"95894","type":"Row"},{"attributes":{"source":{"id":"95880","type":"ColumnDataSource"}},"id":"95884","type":"CDSView"},{"attributes":{},"id":"95910","type":"Selection"},{"attributes":{},"id":"95857","type":"ResetTool"},{"attributes":{},"id":"95853","type":"PanTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"95891","type":"BoxAnnotation"},{"attributes":{"ticker":{"id":"95812","type":"BasicTicker"}},"id":"95815","type":"Grid"},{"attributes":{"data_source":{"id":"95880","type":"ColumnDataSource"},"glyph":{"id":"95881","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"95882","type":"Line"},"selection_glyph":null,"view":{"id":"95884","type":"CDSView"}},"id":"95883","type":"GlyphRenderer"},{"attributes":{},"id":"95858","type":"HelpTool"},{"attributes":{"formatter":{"id":"95887","type":"BasicTickFormatter"},"ticker":{"id":"95849","type":"BasicTicker"}},"id":"95848","type":"LinearAxis"},{"attributes":{"ticker":{"id":"95844","type":"BasicTicker"}},"id":"95847","type":"Grid"},{"attributes":{"callback":null,"data":{"x":{"__ndarray__":"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","dtype":"float64","shape":[200]},"y":{"__ndarray__":"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","dtype":"float64","shape":[200]}},"selected":{"id":"95910","type":"Selection"},"selection_policy":{"id":"95911","type":"UnionRenderers"}},"id":"95880","type":"ColumnDataSource"},{"attributes":{},"id":"95854","type":"WheelZoomTool"},{"attributes":{"formatter":{"id":"95873","type":"BasicTickFormatter"},"ticker":{"id":"95817","type":"BasicTicker"}},"id":"95816","type":"LinearAxis"},{"attributes":{"text":""},"id":"95885","type":"Title"},{"attributes":{},"id":"95824","type":"SaveTool"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"95882","type":"Line"},{"attributes":{},"id":"95825","type":"ResetTool"},{"attributes":{},"id":"95841","type":"LinearScale"},{"attributes":{"dimension":1,"ticker":{"id":"95849","type":"BasicTicker"}},"id":"95852","type":"Grid"},{"attributes":{"below":[{"id":"95811","type":"LinearAxis"}],"center":[{"id":"95815","type":"Grid"},{"id":"95820","type":"Grid"},{"id":"95878","type":"Legend"}],"left":[{"id":"95816","type":"LinearAxis"}],"output_backend":"webgl","plot_height":500,"plot_width":500,"renderers":[{"id":"95869","type":"GlyphRenderer"}],"title":{"id":"95871","type":"Title"},"toolbar":{"id":"95827","type":"Toolbar"},"x_range":{"id":"95803","type":"DataRange1d"},"x_scale":{"id":"95807","type":"LinearScale"},"y_range":{"id":"95805","type":"DataRange1d"},"y_scale":{"id":"95809","type":"LinearScale"}},"id":"95802","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"95889","type":"BasicTickFormatter"},{"attributes":{},"id":"95817","type":"BasicTicker"},{"attributes":{},"id":"95839","type":"LinearScale"},{"attributes":{},"id":"95875","type":"BasicTickFormatter"},{"attributes":{"text":""},"id":"95871","type":"Title"},{"attributes":{},"id":"95844","type":"BasicTicker"},{"attributes":{"callback":null},"id":"95837","type":"DataRange1d"},{"attributes":{},"id":"95873","type":"BasicTickFormatter"},{"attributes":{"dimension":1,"ticker":{"id":"95817","type":"BasicTicker"}},"id":"95820","type":"Grid"},{"attributes":{},"id":"95812","type":"BasicTicker"},{"attributes":{"data_source":{"id":"95866","type":"ColumnDataSource"},"glyph":{"id":"95867","type":"Quad"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"95868","type":"Quad"},"selection_glyph":null,"view":{"id":"95870","type":"CDSView"}},"id":"95869","type":"GlyphRenderer"},{"attributes":{},"id":"95821","type":"PanTool"},{"attributes":{},"id":"95887","type":"BasicTickFormatter"},{"attributes":{"label":{"value":"Gaussian"},"renderers":[{"id":"95883","type":"GlyphRenderer"}]},"id":"95893","type":"LegendItem"},{"attributes":{"callback":null,"data":{"left":[0,1,2,3,4,5,6,7,8,9,10,11,12],"right":[1,2,3,4,5,6,7,8,9,10,11,12,13],"top":{"__ndarray__":"eekmMQisjD+TGARWDi2yP/T91HjpJsE/Vg4tsp3vxz+WQ4ts5/vJPxsv3SQGgcU/IbByaJHtvD8ZBFYOLbKtP5zEILByaKE/eekmMQisfD8730+Nl26CPwAAAAAAAAAA/Knx0k1iYD8=","dtype":"float64","shape":[13]}},"selected":{"id":"95907","type":"Selection"},"selection_policy":{"id":"95908","type":"UnionRenderers"}},"id":"95866","type":"ColumnDataSource"},{"attributes":{"bottom":{"value":0},"fill_color":{"value":"black"},"left":{"field":"left"},"right":{"field":"right"},"top":{"field":"top"}},"id":"95867","type":"Quad"},{"attributes":{},"id":"95907","type":"Selection"},{"attributes":{},"id":"95908","type":"UnionRenderers"},{"attributes":{"callback":null},"id":"95803","type":"DataRange1d"},{"attributes":{},"id":"95822","type":"WheelZoomTool"},{"attributes":{},"id":"95807","type":"LinearScale"},{"attributes":{"overlay":{"id":"95877","type":"BoxAnnotation"}},"id":"95823","type":"BoxZoomTool"},{"attributes":{},"id":"95849","type":"BasicTicker"}],"root_ids":["95894"]},"title":"Bokeh Application","version":"1.4.0"}}';
                  var render_items = [{"docid":"bd4d6a62-8508-4fd7-b2b0-23e63aa9a8f1","roots":{"95894":"753919e0-5dd6-4fae-a825-2255bd3a34c1"}}];
                  root.Bokeh.embed.embed_items(docs_json, render_items);
                
                  }
                  if (root.Bokeh !== undefined) {
                    embed_document(root);
                  } else {
                    var attempts = 0;
                    var timer = setInterval(function(root) {
                      if (root.Bokeh !== undefined) {
                        clearInterval(timer);
                        embed_document(root);
                      } else {
                        attempts++;
                        if (attempts > 100) {
                          clearInterval(timer);
                          console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing");
                        }
                      }
                    }, 10, root)
                  }
                })(window);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
        
        
        }
      ];
    
      function run_inline_js() {
        
        for (var i = 0; i < inline_js.length; i++) {
          inline_js[i].call(root, root.Bokeh);
        }
        
      }
    
      if (root._bokeh_is_loading === 0) {
        console.debug("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(css_urls, js_urls, function() {
          console.debug("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(window));
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();