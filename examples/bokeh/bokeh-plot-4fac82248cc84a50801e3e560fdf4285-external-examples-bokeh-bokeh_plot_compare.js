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
      };var element = document.getElementById("eedd6299-d9bc-4765-9eb6-8c6077d24d56");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid 'eedd6299-d9bc-4765-9eb6-8c6077d24d56' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"ed6cb965-3ca8-4898-8667-d1a398c59e79":{"roots":{"references":[{"attributes":{"source":{"id":"93515","type":"ColumnDataSource"}},"id":"93519","type":"CDSView"},{"attributes":{"fill_color":{"value":"black"},"line_width":{"value":2},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"93536","type":"Circle"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"93492","type":"PanTool"},{"id":"93493","type":"BoxZoomTool"},{"id":"93494","type":"WheelZoomTool"},{"id":"93495","type":"BoxSelectTool"},{"id":"93496","type":"LassoSelectTool"},{"id":"93497","type":"UndoTool"},{"id":"93498","type":"RedoTool"},{"id":"93499","type":"ResetTool"},{"id":"93500","type":"SaveTool"},{"id":"93501","type":"HoverTool"}]},"id":"93502","type":"Toolbar"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"93522","type":"MultiLine"},{"attributes":{"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"93531","type":"MultiLine"},{"attributes":{"callback":null,"data":{"xs":[[61.360479636844296,61.67142831044951]],"ys":[[-0.75,-0.75]]},"selected":{"id":"93548","type":"Selection"},"selection_policy":{"id":"93549","type":"UnionRenderers"}},"id":"93520","type":"ColumnDataSource"},{"attributes":{"callback":null,"data":{"x":[61.5159539736469],"y":[-0.75]},"selected":{"id":"93546","type":"Selection"},"selection_policy":{"id":"93547","type":"UnionRenderers"}},"id":"93515","type":"ColumnDataSource"},{"attributes":{},"id":"93554","type":"Selection"},{"attributes":{"data_source":{"id":"93530","type":"ColumnDataSource"},"glyph":{"id":"93531","type":"MultiLine"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"93532","type":"MultiLine"},"selection_glyph":null,"view":{"id":"93534","type":"CDSView"}},"id":"93533","type":"GlyphRenderer"},{"attributes":{"callback":null},"id":"93501","type":"HoverTool"},{"attributes":{},"id":"93553","type":"UnionRenderers"},{"attributes":{},"id":"93547","type":"UnionRenderers"},{"attributes":{"source":{"id":"93530","type":"ColumnDataSource"}},"id":"93534","type":"CDSView"},{"attributes":{},"id":"93555","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"93525","type":"ColumnDataSource"},"glyph":{"id":"93526","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"93527","type":"Circle"},"selection_glyph":null,"view":{"id":"93529","type":"CDSView"}},"id":"93528","type":"GlyphRenderer"},{"attributes":{"ticker":{"id":"93483","type":"BasicTicker"}},"id":"93486","type":"Grid"},{"attributes":{},"id":"93478","type":"LinearScale"},{"attributes":{"callback":null,"overlay":{"id":"93557","type":"BoxAnnotation"}},"id":"93495","type":"BoxSelectTool"},{"attributes":{"overlay":{"id":"93556","type":"BoxAnnotation"}},"id":"93493","type":"BoxZoomTool"},{"attributes":{"source":{"id":"93525","type":"ColumnDataSource"}},"id":"93529","type":"CDSView"},{"attributes":{},"id":"93543","type":"BasicTickFormatter"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"93557","type":"BoxAnnotation"},{"attributes":{"below":[{"id":"93482","type":"LinearAxis"}],"center":[{"id":"93486","type":"Grid"},{"id":"93491","type":"Grid"}],"left":[{"id":"93487","type":"LinearAxis"}],"output_backend":"webgl","plot_height":240,"plot_width":720,"renderers":[{"id":"93518","type":"GlyphRenderer"},{"id":"93523","type":"GlyphRenderer"},{"id":"93528","type":"GlyphRenderer"},{"id":"93533","type":"GlyphRenderer"},{"id":"93538","type":"GlyphRenderer"},{"id":"93540","type":"Span"}],"title":{"id":"93541","type":"Title"},"toolbar":{"id":"93502","type":"Toolbar"},"x_range":{"id":"93474","type":"DataRange1d"},"x_scale":{"id":"93478","type":"LinearScale"},"y_range":{"id":"93476","type":"DataRange1d"},"y_scale":{"id":"93480","type":"LinearScale"}},"id":"93473","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"93480","type":"LinearScale"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"93532","type":"MultiLine"},{"attributes":{"callback":null,"data":{"xs":[[58.71619564978272,63.86789694037182],[59.04678469942621,63.98512324786759]],"ys":[[0.0,0.0],[-1.0,-1.0]]},"selected":{"id":"93552","type":"Selection"},"selection_policy":{"id":"93553","type":"UnionRenderers"}},"id":"93530","type":"ColumnDataSource"},{"attributes":{"source":{"id":"93535","type":"ColumnDataSource"}},"id":"93539","type":"CDSView"},{"attributes":{},"id":"93494","type":"WheelZoomTool"},{"attributes":{"fill_color":{"value":"grey"},"line_color":{"value":"grey"},"line_width":{"value":2},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"93516","type":"Triangle"},{"attributes":{},"id":"93549","type":"UnionRenderers"},{"attributes":{},"id":"93500","type":"SaveTool"},{"attributes":{"dimension":1,"ticker":{"id":"93488","type":"BasicTicker"}},"id":"93491","type":"Grid"},{"attributes":{"callback":null,"data":{"x":[59.6908040037226,59.712642429907305],"y":[0.0,-1.0]},"selected":{"id":"93554","type":"Selection"},"selection_policy":{"id":"93555","type":"UnionRenderers"}},"id":"93535","type":"ColumnDataSource"},{"attributes":{},"id":"93544","type":"BasicTickFormatter"},{"attributes":{"text":""},"id":"93541","type":"Title"},{"attributes":{"callback":null},"id":"93474","type":"DataRange1d"},{"attributes":{"data_source":{"id":"93520","type":"ColumnDataSource"},"glyph":{"id":"93521","type":"MultiLine"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"93522","type":"MultiLine"},"selection_glyph":null,"view":{"id":"93524","type":"CDSView"}},"id":"93523","type":"GlyphRenderer"},{"attributes":{"formatter":{"id":"93543","type":"BasicTickFormatter"},"major_label_overrides":{"-0.75":"","-1":"Centered 8 schools","0":"Non-centered 8 schools"},"ticker":{"id":"93513","type":"FixedTicker"}},"id":"93487","type":"LinearAxis"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"93527","type":"Circle"},{"attributes":{},"id":"93497","type":"UndoTool"},{"attributes":{"data_source":{"id":"93535","type":"ColumnDataSource"},"glyph":{"id":"93536","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"93537","type":"Circle"},"selection_glyph":null,"view":{"id":"93539","type":"CDSView"}},"id":"93538","type":"GlyphRenderer"},{"attributes":{"callback":null,"overlay":{"id":"93558","type":"PolyAnnotation"}},"id":"93496","type":"LassoSelectTool"},{"attributes":{},"id":"93499","type":"ResetTool"},{"attributes":{"ticks":[0.0,-0.75,-1.0]},"id":"93513","type":"FixedTicker"},{"attributes":{},"id":"93492","type":"PanTool"},{"attributes":{},"id":"93552","type":"Selection"},{"attributes":{"data_source":{"id":"93515","type":"ColumnDataSource"},"glyph":{"id":"93516","type":"Triangle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"93517","type":"Triangle"},"selection_glyph":null,"view":{"id":"93519","type":"CDSView"}},"id":"93518","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"93537","type":"Circle"},{"attributes":{},"id":"93551","type":"UnionRenderers"},{"attributes":{"dimension":"height","line_color":{"value":"grey"},"line_dash":[6],"line_width":{"value":1.7677669529663689},"location":61.29204629507727},"id":"93540","type":"Span"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"xs_units":"screen","ys_units":"screen"},"id":"93558","type":"PolyAnnotation"},{"attributes":{},"id":"93546","type":"Selection"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"93556","type":"BoxAnnotation"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"93517","type":"Triangle"},{"attributes":{"callback":null,"data":{"x":[61.29204629507727,61.5159539736469],"y":[0.0,-1.0]},"selected":{"id":"93550","type":"Selection"},"selection_policy":{"id":"93551","type":"UnionRenderers"}},"id":"93525","type":"ColumnDataSource"},{"attributes":{},"id":"93483","type":"BasicTicker"},{"attributes":{},"id":"93548","type":"Selection"},{"attributes":{"axis_label":"Deviance","formatter":{"id":"93544","type":"BasicTickFormatter"},"ticker":{"id":"93483","type":"BasicTicker"}},"id":"93482","type":"LinearAxis"},{"attributes":{},"id":"93498","type":"RedoTool"},{"attributes":{"callback":null,"end":0.5,"start":-1.5},"id":"93476","type":"DataRange1d"},{"attributes":{"fill_color":{"value":null},"line_width":{"value":2},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"93526","type":"Circle"},{"attributes":{"line_color":{"value":"grey"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"93521","type":"MultiLine"},{"attributes":{},"id":"93488","type":"BasicTicker"},{"attributes":{"source":{"id":"93520","type":"ColumnDataSource"}},"id":"93524","type":"CDSView"},{"attributes":{},"id":"93550","type":"Selection"}],"root_ids":["93473"]},"title":"Bokeh Application","version":"1.4.0"}}';
                  var render_items = [{"docid":"ed6cb965-3ca8-4898-8667-d1a398c59e79","roots":{"93473":"eedd6299-d9bc-4765-9eb6-8c6077d24d56"}}];
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