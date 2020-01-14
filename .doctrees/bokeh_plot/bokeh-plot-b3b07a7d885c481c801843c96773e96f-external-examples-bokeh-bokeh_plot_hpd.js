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
      };var element = document.getElementById("089dba3c-b2fe-48bf-bdde-6301afe9e73f");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid '089dba3c-b2fe-48bf-bdde-6301afe9e73f' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"18796604-0902-44a0-98c6-e4da523a807d":{"roots":{"references":[{"attributes":{"source":{"id":"97438","type":"ColumnDataSource"}},"id":"97442","type":"CDSView"},{"attributes":{"callback":null,"data":{"x":{"__ndarray__":"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","dtype":"float64","shape":[400]},"y":{"__ndarray__":"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","dtype":"float64","shape":[400]}},"selected":{"id":"97454","type":"Selection"},"selection_policy":{"id":"97455","type":"UnionRenderers"}},"id":"97438","type":"ColumnDataSource"},{"attributes":{"callback":null,"overlay":{"id":"97459","type":"BoxAnnotation"}},"id":"97420","type":"BoxSelectTool"},{"attributes":{"line_width":3,"x":{"field":"x"},"y":{"field":"y"}},"id":"97444","type":"Line"},{"attributes":{"callback":null},"id":"97401","type":"DataRange1d"},{"attributes":{},"id":"97450","type":"BasicTickFormatter"},{"attributes":{"text":""},"id":"97448","type":"Title"},{"attributes":{},"id":"97422","type":"UndoTool"},{"attributes":{},"id":"97417","type":"PanTool"},{"attributes":{"fill_alpha":0.1,"fill_color":"#1f77b4","line_alpha":0.1,"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"97440","type":"Patch"},{"attributes":{},"id":"97423","type":"RedoTool"},{"attributes":{"callback":null},"id":"97399","type":"DataRange1d"},{"attributes":{},"id":"97419","type":"WheelZoomTool"},{"attributes":{"fill_alpha":0.5,"fill_color":"red","line_alpha":0,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"97439","type":"Patch"},{"attributes":{"overlay":{"id":"97458","type":"BoxAnnotation"}},"id":"97418","type":"BoxZoomTool"},{"attributes":{},"id":"97413","type":"BasicTicker"},{"attributes":{"data_source":{"id":"97438","type":"ColumnDataSource"},"glyph":{"id":"97439","type":"Patch"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"97440","type":"Patch"},"selection_glyph":null,"view":{"id":"97442","type":"CDSView"}},"id":"97441","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","line_width":3,"x":{"field":"x"},"y":{"field":"y"}},"id":"97445","type":"Line"},{"attributes":{},"id":"97454","type":"Selection"},{"attributes":{},"id":"97403","type":"LinearScale"},{"attributes":{"callback":null,"overlay":{"id":"97460","type":"PolyAnnotation"}},"id":"97421","type":"LassoSelectTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"97459","type":"BoxAnnotation"},{"attributes":{},"id":"97456","type":"Selection"},{"attributes":{"callback":null},"id":"97426","type":"HoverTool"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"xs_units":"screen","ys_units":"screen"},"id":"97460","type":"PolyAnnotation"},{"attributes":{},"id":"97424","type":"ResetTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"97458","type":"BoxAnnotation"},{"attributes":{},"id":"97405","type":"LinearScale"},{"attributes":{"formatter":{"id":"97452","type":"BasicTickFormatter"},"ticker":{"id":"97408","type":"BasicTicker"}},"id":"97407","type":"LinearAxis"},{"attributes":{"formatter":{"id":"97450","type":"BasicTickFormatter"},"ticker":{"id":"97413","type":"BasicTicker"}},"id":"97412","type":"LinearAxis"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"97417","type":"PanTool"},{"id":"97418","type":"BoxZoomTool"},{"id":"97419","type":"WheelZoomTool"},{"id":"97420","type":"BoxSelectTool"},{"id":"97421","type":"LassoSelectTool"},{"id":"97422","type":"UndoTool"},{"id":"97423","type":"RedoTool"},{"id":"97424","type":"ResetTool"},{"id":"97425","type":"SaveTool"},{"id":"97426","type":"HoverTool"}]},"id":"97427","type":"Toolbar"},{"attributes":{"below":[{"id":"97407","type":"LinearAxis"}],"center":[{"id":"97411","type":"Grid"},{"id":"97416","type":"Grid"}],"left":[{"id":"97412","type":"LinearAxis"}],"output_backend":"webgl","plot_height":500,"plot_width":500,"renderers":[{"id":"97441","type":"GlyphRenderer"},{"id":"97446","type":"GlyphRenderer"}],"title":{"id":"97448","type":"Title"},"toolbar":{"id":"97427","type":"Toolbar"},"x_range":{"id":"97399","type":"DataRange1d"},"x_scale":{"id":"97403","type":"LinearScale"},"y_range":{"id":"97401","type":"DataRange1d"},"y_scale":{"id":"97405","type":"LinearScale"}},"id":"97398","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"97408","type":"BasicTicker"},{"attributes":{},"id":"97455","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"97443","type":"ColumnDataSource"},"glyph":{"id":"97444","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"97445","type":"Line"},"selection_glyph":null,"view":{"id":"97447","type":"CDSView"}},"id":"97446","type":"GlyphRenderer"},{"attributes":{"dimension":1,"ticker":{"id":"97413","type":"BasicTicker"}},"id":"97416","type":"Grid"},{"attributes":{},"id":"97452","type":"BasicTickFormatter"},{"attributes":{"ticker":{"id":"97408","type":"BasicTicker"}},"id":"97411","type":"Grid"},{"attributes":{},"id":"97425","type":"SaveTool"},{"attributes":{"callback":null,"data":{"x":{"__ndarray__":"GMO1Krbp/r/fCf5zIiP+vx8f0highPy/QZ+P0RR8+r8bZGL1LYD4vzEsx0JLY/i/QOopd23y9b/Etop+Uxf1v1cu2MUz8/S/wqidf5m79L8IFLYrZnzyv/S98i2NM/C/1a90DeZl6r96gqg23PfpvwLcdoWSuOm/77Xm5m2M6b8WtbFancrov2mGyFX9Hei/dgcGVzzj578vt+twEd7lvz3n7tdIiuW/Lw4g1Voh5b9U0w9KnJjjv7lAKCEOfuO/wVabP2BJ47+tH95XMt/iv+fD7Z/U1OK/Juq7cywv4r9yn8u+M/7hv+UPwEZIKeG/4v4HyDHP4L92PFLhOmfgv+sjHRy9EN6/o0Au8nOM3L/HYNTie0TXv2pHJ/sJPNa/ids4HpwZ1b9u6LDrm5PUv0Gog0V9Z9G/c1jOg9TU0L+LQUvkIYLOv4RXgzlBMca/QSKQCCmBxb9xIX01vVHBv0nFvBBGG8G/HpvPsrwDvb/0zPycw5q3vwSEi0flOaC//DYYBp2deL9LwCKekG+cP4IMQ9sl4bc/nK9j3/pruT8zdBRBpYG+P/9dzExYpMA/YkgBl+RAwz+c+fyfFsDFP7cTaOknjsY/1piMBPBAyD+FxpTQHnbJP/mSKdxiUM0/gvDF7472zT8yPsMYRBPSP5sfWi8AOdI/HQo9sABe0j/5ywmUrbPTP3t0loVcHdg/l4W91maW3D9l7yJywaLcPzHBMetTsOA/mG6EXxno4D9hYfZG6uvgP2Z+kiSa7+A/6dAv81FI4T/TfFWo9iHkP86r/6hfPOQ/lQdUn3+v5T+1v2VDfMLlP45wspoC2uU/pYzzCVqj5j9kVVjh8RrnP3ZGlg2H+Oc/DOZjRZMF6D/WoQeU1wTqPx7eRe4qlOo/PIMA5kgd6z/L0zx3PUDrP5q0g/M34e0/P/bbebYh7z9vYV5yZ7LwP1rJG6ZRLPI/CJlQp9U68j9hEq49T3nyP1Hv2wuJqfM/gNgHmPHj9j/VpdxtPgD3P3mxyiPNAfc/YckG6XDD+D9r/6RqDvn5PyP6lwQv6gFAIANWB99qA0A=","dtype":"float64","shape":[100]},"y":{"__ndarray__":"dB6l6iSL8D8Q+wDGbu7wP3DwlvOvvfE/YDA4l/XB8j/yzU4F6b/zP+hpnF5azvM/4AprRMkG9T+epLpAVnT1P9ToEx1mhvU/nysxQDOi9T/89STqzMH2PwahBmk55vc/C9SifIZm+T9i31XyCIL5PwBJol7bkfk/hFJGhuSc+T+6klOpWM35P2bejaqA+Pk/In4+6jAH+j80EsWje4j6PzFGBMptnfo/dPy3Sqm3+j8rC3zt2Bn7P9LvtXd8IPs/UCoZ8Kct+z8VeAhqM0j7PwaPBNjKSvs/dgUR4zR0+z8kGE0Qc4D7Pwf8T+6ttfs/SAD+jTPM+z/icKtHMeb7P4NbfFzoPfw/7De6gXFu/D/nc6WDcBf9PxMXm8B+OP0/j+Q4fMxc/T/y4omCjG39P/iKT1cQ0/0/8jSGb2Xl/T/nS7vh3Rf+P4jKZ+zrnP4/3P12b+2n/j/pLags5Or+P6sz9J5L7v4/J4NpGuIX/z+YGRjjKUP/P/DR4WoYv/8/5fN8MbHz/z/AIp6QbxwAQDIMbZeEXwBAvo59669lAEDRUQSVBnoAQPBiZsIihQBAQwq4JAeaAEDN5/+0AK4AQJ5ASz9xtABAx2QkgAfCAEA0poT2sMsAQJhM4RaD6gBAhC9+d7TvAEDjM4xBNCEBQPqh9QKQIwFAotADC+AlAUDAnEDZOjsBQEhnWcjVgQFAWdhrbWbJAUD2LiIXLMoBQCY4Zn0KFgJA043wKwMdAkAszN5IfR0CQM1PkkTzHQJAHfplPgopAkCarwrVPoQCQHr1H/WLhwJA84Dq8++1AkD3t2yIT7gCQBJOVlNAuwJAlXE+QWvUAkCsCis8XuMCQM/IsuEQ/wJAwnysaLIAA0A79IDymkADQMS7yF2FUgNAaBDAHKljA0B5mueuB2gDQJN2cP4mvANAyH47zzbkA0BcmJfcmSwEQFbyhmkUiwRAQibUabWOBECYhGvPU54EQNT79kJi6gRAIPYBZvy4BUB1KXebD8AFQF6s8khzwAVAWLJBOtwwBkDbP6maQ34GQBL9S4IX9QhAkAGrg2+1CUA=","dtype":"float64","shape":[100]}},"selected":{"id":"97456","type":"Selection"},"selection_policy":{"id":"97457","type":"UnionRenderers"}},"id":"97443","type":"ColumnDataSource"},{"attributes":{"source":{"id":"97443","type":"ColumnDataSource"}},"id":"97447","type":"CDSView"},{"attributes":{},"id":"97457","type":"UnionRenderers"}],"root_ids":["97398"]},"title":"Bokeh Application","version":"1.4.0"}}';
                  var render_items = [{"docid":"18796604-0902-44a0-98c6-e4da523a807d","roots":{"97398":"089dba3c-b2fe-48bf-bdde-6301afe9e73f"}}];
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