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
      };var element = document.getElementById("3bb983ba-c5fc-4210-977d-d93c35a0ca72");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid '3bb983ba-c5fc-4210-977d-d93c35a0ca72' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"62d8edfc-8c5d-4928-a5fb-c7e2ca8f1437":{"roots":{"references":[{"attributes":{},"id":"96339","type":"Selection"},{"attributes":{},"id":"96365","type":"UnionRenderers"},{"attributes":{"source":{"id":"96345","type":"ColumnDataSource"}},"id":"96349","type":"CDSView"},{"attributes":{"callback":null,"overlay":{"id":"96322","type":"BoxAnnotation"}},"id":"96285","type":"BoxSelectTool"},{"attributes":{"line_color":{"value":"red"},"line_dash":[6],"line_width":{"value":3},"location":400},"id":"96350","type":"Span"},{"attributes":{},"id":"96340","type":"UnionRenderers"},{"attributes":{"fill_color":{"value":"orange"},"line_color":{"value":"orange"},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"96346","type":"Circle"},{"attributes":{},"id":"96288","type":"RedoTool"},{"attributes":{"callback":null,"data":{"x":{"__ndarray__":"AAAAAAAAWUAAAAAAAABpQAAAAAAAwHJAAAAAAAAAeUAAAAAAAEB/QAAAAAAAwIJAAAAAAADghUAAAAAAAACJQAAAAAAAIIxAAAAAAABAj0AAAAAAADCRQAAAAAAAwJJAAAAAAABQlEAAAAAAAOCVQAAAAAAAcJdAAAAAAAAAmUAAAAAAAJCaQAAAAAAAIJxAAAAAAACwnUAAAAAAAECfQA==","dtype":"float64","shape":[20]},"y":{"__ndarray__":"96FbKLyBMkDEFAnglsNWQBC5N3NCBm1AhSuZf4dmdECKE1YWcHt0QBw2aMPTi3lAiOdK+uWaeUAGhRKd9gZ9QNX3uUqhqIFAnLXIDxQMhUCr7PKl8U6JQLaUOqun4o1AoNLS679XkECU4/KXSGmSQCcpnoFLL5RACq31A5f5lUCcLj2ibHeWQF4U4M8TD5hAMc5SiTsFmkArYzxHIfWcQA==","dtype":"float64","shape":[20]}},"selected":{"id":"96319","type":"Selection"},"selection_policy":{"id":"96320","type":"UnionRenderers"}},"id":"96303","type":"ColumnDataSource"},{"attributes":{},"id":"96320","type":"UnionRenderers"},{"attributes":{"callback":null,"overlay":{"id":"96323","type":"PolyAnnotation"}},"id":"96286","type":"LassoSelectTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"96305","type":"Circle"},{"attributes":{},"id":"96317","type":"BasicTickFormatter"},{"attributes":{"axis_label":"Total number of draws","formatter":{"id":"96317","type":"BasicTickFormatter"},"ticker":{"id":"96273","type":"BasicTicker"}},"id":"96272","type":"LinearAxis"},{"attributes":{"source":{"id":"96303","type":"ColumnDataSource"}},"id":"96307","type":"CDSView"},{"attributes":{},"id":"96278","type":"BasicTicker"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"96282","type":"PanTool"},{"id":"96283","type":"BoxZoomTool"},{"id":"96284","type":"WheelZoomTool"},{"id":"96285","type":"BoxSelectTool"},{"id":"96286","type":"LassoSelectTool"},{"id":"96287","type":"UndoTool"},{"id":"96288","type":"RedoTool"},{"id":"96289","type":"ResetTool"},{"id":"96290","type":"SaveTool"},{"id":"96291","type":"HoverTool"}]},"id":"96292","type":"Toolbar"},{"attributes":{"data_source":{"id":"96326","type":"ColumnDataSource"},"glyph":{"id":"96327","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"96328","type":"Line"},"selection_glyph":null,"view":{"id":"96330","type":"CDSView"}},"id":"96329","type":"GlyphRenderer"},{"attributes":{},"id":"96282","type":"PanTool"},{"attributes":{"data_source":{"id":"96345","type":"ColumnDataSource"},"glyph":{"id":"96346","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"96347","type":"Circle"},"selection_glyph":null,"view":{"id":"96349","type":"CDSView"}},"id":"96348","type":"GlyphRenderer"},{"attributes":{"callback":null},"id":"96264","type":"DataRange1d"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"96304","type":"Circle"},{"attributes":{"callback":null,"data":{"x":{"__ndarray__":"AAAAAAAAWUAAAAAAAABpQAAAAAAAwHJAAAAAAAAAeUAAAAAAAEB/QAAAAAAAwIJAAAAAAADghUAAAAAAAACJQAAAAAAAIIxAAAAAAABAj0AAAAAAADCRQAAAAAAAwJJAAAAAAABQlEAAAAAAAOCVQAAAAAAAcJdAAAAAAAAAmUAAAAAAAJCaQAAAAAAAIJxAAAAAAACwnUAAAAAAAECfQA==","dtype":"float64","shape":[20]},"y":{"__ndarray__":"efl4S7K5UECliF2aYsBdQM+3s3hpAWhA30PsAOxbckA9j+MdBmV5QCjkO/TQqHpAlo8qDuxxfUBhgLuJn9GBQDEicW5nj4VAmAm8VupRhkAL06Ie5C6GQBjMN1TJ+olARw25XLj/ikAxQOYiRzCOQGk5Bqm0MJBA5vBmnUCPkEAAWgBDqmmSQHF+IQeXypNAO/uxzEAolEDsjMUYoPKUQA==","dtype":"float64","shape":[20]}},"selected":{"id":"96362","type":"Selection"},"selection_policy":{"id":"96363","type":"UnionRenderers"}},"id":"96326","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"96303","type":"ColumnDataSource"},"glyph":{"id":"96304","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"96305","type":"Circle"},"selection_glyph":null,"view":{"id":"96307","type":"CDSView"}},"id":"96306","type":"GlyphRenderer"},{"attributes":{},"id":"96273","type":"BasicTicker"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"96310","type":"Line"},{"attributes":{"text":"b"},"id":"96351","type":"Title"},{"attributes":{"ticker":{"id":"96273","type":"BasicTicker"}},"id":"96276","type":"Grid"},{"attributes":{},"id":"96364","type":"Selection"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"96328","type":"Line"},{"attributes":{"children":[{"id":"96372","type":"ToolbarBox"},{"id":"96370","type":"GridBox"}]},"id":"96373","type":"Column"},{"attributes":{"toolbar":{"id":"96371","type":"ProxyToolbar"},"toolbar_location":"above"},"id":"96372","type":"ToolbarBox"},{"attributes":{},"id":"96289","type":"ResetTool"},{"attributes":{"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"96309","type":"Line"},{"attributes":{"tools":[{"id":"96282","type":"PanTool"},{"id":"96283","type":"BoxZoomTool"},{"id":"96284","type":"WheelZoomTool"},{"id":"96285","type":"BoxSelectTool"},{"id":"96286","type":"LassoSelectTool"},{"id":"96287","type":"UndoTool"},{"id":"96288","type":"RedoTool"},{"id":"96289","type":"ResetTool"},{"id":"96290","type":"SaveTool"},{"id":"96291","type":"HoverTool"}]},"id":"96371","type":"ProxyToolbar"},{"attributes":{"callback":null},"id":"96291","type":"HoverTool"},{"attributes":{"overlay":{"id":"96321","type":"BoxAnnotation"}},"id":"96283","type":"BoxZoomTool"},{"attributes":{},"id":"96287","type":"UndoTool"},{"attributes":{"callback":null,"data":{"x":{"__ndarray__":"AAAAAAAAWUAAAAAAAABpQAAAAAAAwHJAAAAAAAAAeUAAAAAAAEB/QAAAAAAAwIJAAAAAAADghUAAAAAAAACJQAAAAAAAIIxAAAAAAABAj0AAAAAAADCRQAAAAAAAwJJAAAAAAABQlEAAAAAAAOCVQAAAAAAAcJdAAAAAAAAAmUAAAAAAAJCaQAAAAAAAIJxAAAAAAACwnUAAAAAAAECfQA==","dtype":"float64","shape":[20]},"y":{"__ndarray__":"efl4S7K5UECliF2aYsBdQM+3s3hpAWhA30PsAOxbckA9j+MdBmV5QCjkO/TQqHpAlo8qDuxxfUBhgLuJn9GBQDEicW5nj4VAmAm8VupRhkAL06Ie5C6GQBjMN1TJ+olARw25XLj/ikAxQOYiRzCOQGk5Bqm0MJBA5vBmnUCPkEAAWgBDqmmSQHF+IQeXypNAO/uxzEAolEDsjMUYoPKUQA==","dtype":"float64","shape":[20]}},"selected":{"id":"96364","type":"Selection"},"selection_policy":{"id":"96365","type":"UnionRenderers"}},"id":"96345","type":"ColumnDataSource"},{"attributes":{"callback":null},"id":"96266","type":"DataRange1d"},{"attributes":{},"id":"96284","type":"WheelZoomTool"},{"attributes":{"label":{"value":"tail"},"renderers":[{"id":"96329","type":"GlyphRenderer"}]},"id":"96344","type":"LegendItem"},{"attributes":{"source":{"id":"96326","type":"ColumnDataSource"}},"id":"96330","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"96347","type":"Circle"},{"attributes":{"dimension":1,"ticker":{"id":"96278","type":"BasicTicker"}},"id":"96281","type":"Grid"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"xs_units":"screen","ys_units":"screen"},"id":"96323","type":"PolyAnnotation"},{"attributes":{"below":[{"id":"96272","type":"LinearAxis"}],"center":[{"id":"96276","type":"Grid"},{"id":"96281","type":"Grid"},{"id":"96324","type":"Legend"}],"left":[{"id":"96277","type":"LinearAxis"}],"output_backend":"webgl","plot_height":288,"plot_width":432,"renderers":[{"id":"96306","type":"GlyphRenderer"},{"id":"96311","type":"GlyphRenderer"},{"id":"96329","type":"GlyphRenderer"},{"id":"96348","type":"GlyphRenderer"},{"id":"96350","type":"Span"}],"title":{"id":"96351","type":"Title"},"toolbar":{"id":"96292","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"96264","type":"DataRange1d"},"x_scale":{"id":"96268","type":"LinearScale"},"y_range":{"id":"96266","type":"DataRange1d"},"y_scale":{"id":"96270","type":"LinearScale"}},"id":"96263","subtype":"Figure","type":"Plot"},{"attributes":{"axis_label":"ESS","formatter":{"id":"96315","type":"BasicTickFormatter"},"ticker":{"id":"96278","type":"BasicTicker"}},"id":"96277","type":"LinearAxis"},{"attributes":{},"id":"96270","type":"LinearScale"},{"attributes":{},"id":"96363","type":"UnionRenderers"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"96321","type":"BoxAnnotation"},{"attributes":{"line_color":"orange","x":{"field":"x"},"y":{"field":"y"}},"id":"96327","type":"Line"},{"attributes":{},"id":"96319","type":"Selection"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"96322","type":"BoxAnnotation"},{"attributes":{"children":[[{"id":"96263","subtype":"Figure","type":"Plot"},0,0]]},"id":"96370","type":"GridBox"},{"attributes":{},"id":"96362","type":"Selection"},{"attributes":{"items":[{"id":"96325","type":"LegendItem"},{"id":"96344","type":"LegendItem"}]},"id":"96324","type":"Legend"},{"attributes":{"label":{"value":"bulk"},"renderers":[{"id":"96311","type":"GlyphRenderer"}]},"id":"96325","type":"LegendItem"},{"attributes":{"data_source":{"id":"96308","type":"ColumnDataSource"},"glyph":{"id":"96309","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"96310","type":"Line"},"selection_glyph":null,"view":{"id":"96312","type":"CDSView"}},"id":"96311","type":"GlyphRenderer"},{"attributes":{},"id":"96290","type":"SaveTool"},{"attributes":{"source":{"id":"96308","type":"ColumnDataSource"}},"id":"96312","type":"CDSView"},{"attributes":{},"id":"96315","type":"BasicTickFormatter"},{"attributes":{"callback":null,"data":{"x":{"__ndarray__":"AAAAAAAAWUAAAAAAAABpQAAAAAAAwHJAAAAAAAAAeUAAAAAAAEB/QAAAAAAAwIJAAAAAAADghUAAAAAAAACJQAAAAAAAIIxAAAAAAABAj0AAAAAAADCRQAAAAAAAwJJAAAAAAABQlEAAAAAAAOCVQAAAAAAAcJdAAAAAAAAAmUAAAAAAAJCaQAAAAAAAIJxAAAAAAACwnUAAAAAAAECfQA==","dtype":"float64","shape":[20]},"y":{"__ndarray__":"96FbKLyBMkDEFAnglsNWQBC5N3NCBm1AhSuZf4dmdECKE1YWcHt0QBw2aMPTi3lAiOdK+uWaeUAGhRKd9gZ9QNX3uUqhqIFAnLXIDxQMhUCr7PKl8U6JQLaUOqun4o1AoNLS679XkECU4/KXSGmSQCcpnoFLL5RACq31A5f5lUCcLj2ibHeWQF4U4M8TD5hAMc5SiTsFmkArYzxHIfWcQA==","dtype":"float64","shape":[20]}},"selected":{"id":"96339","type":"Selection"},"selection_policy":{"id":"96340","type":"UnionRenderers"}},"id":"96308","type":"ColumnDataSource"},{"attributes":{},"id":"96268","type":"LinearScale"}],"root_ids":["96373"]},"title":"Bokeh Application","version":"1.4.0"}}';
                  var render_items = [{"docid":"62d8edfc-8c5d-4928-a5fb-c7e2ca8f1437","roots":{"96373":"3bb983ba-c5fc-4210-977d-d93c35a0ca72"}}];
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