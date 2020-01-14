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
      };var element = document.getElementById("cfc97ae6-df7f-42b9-9f05-fe535c08f767");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid 'cfc97ae6-df7f-42b9-9f05-fe535c08f767' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"c2c43673-a974-4bfa-9b08-244aa12fe5e9":{"roots":{"references":[{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"98381","type":"BoxAnnotation"},{"attributes":{"fill_alpha":0.75,"fill_color":"#2a2eec","line_color":null,"x":{"field":"x"},"y":{"field":"y"}},"id":"98352","type":"Patch"},{"attributes":{},"id":"98327","type":"WheelZoomTool"},{"attributes":{},"id":"98325","type":"PanTool"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"xs_units":"screen","ys_units":"screen"},"id":"98382","type":"PolyAnnotation"},{"attributes":{"source":{"id":"98346","type":"ColumnDataSource"}},"id":"98350","type":"CDSView"},{"attributes":{"text":""},"id":"98366","type":"Title"},{"attributes":{"fill_alpha":0.75,"fill_color":"#2a2eec","line_color":null,"x":{"field":"x"},"y":{"field":"y"}},"id":"98362","type":"Patch"},{"attributes":{},"id":"98316","type":"BasicTicker"},{"attributes":{"fill_alpha":0.1,"fill_color":"#1f77b4","line_alpha":0.1,"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"98348","type":"Patch"},{"attributes":{"fill_alpha":0.1,"fill_color":"#1f77b4","line_alpha":0.1,"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"98363","type":"Patch"},{"attributes":{"ticker":{"id":"98316","type":"BasicTicker"}},"id":"98319","type":"Grid"},{"attributes":{"data_source":{"id":"98346","type":"ColumnDataSource"},"glyph":{"id":"98347","type":"Patch"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"98348","type":"Patch"},"selection_glyph":null,"view":{"id":"98350","type":"CDSView"}},"id":"98349","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"98361","type":"ColumnDataSource"},"glyph":{"id":"98362","type":"Patch"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"98363","type":"Patch"},"selection_glyph":null,"view":{"id":"98365","type":"CDSView"}},"id":"98364","type":"GlyphRenderer"},{"attributes":{"callback":null},"id":"98334","type":"HoverTool"},{"attributes":{},"id":"98333","type":"SaveTool"},{"attributes":{},"id":"98321","type":"BasicTicker"},{"attributes":{"source":{"id":"98361","type":"ColumnDataSource"}},"id":"98365","type":"CDSView"},{"attributes":{"source":{"id":"98351","type":"ColumnDataSource"}},"id":"98355","type":"CDSView"},{"attributes":{"callback":null,"overlay":{"id":"98382","type":"PolyAnnotation"}},"id":"98329","type":"LassoSelectTool"},{"attributes":{},"id":"98368","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":0.75,"fill_color":"#2a2eec","line_color":null,"x":{"field":"x"},"y":{"field":"y"}},"id":"98347","type":"Patch"},{"attributes":{"formatter":{"id":"98370","type":"BasicTickFormatter"},"ticker":{"id":"98316","type":"BasicTicker"}},"id":"98315","type":"LinearAxis"},{"attributes":{},"id":"98370","type":"BasicTickFormatter"},{"attributes":{"callback":null,"data":{"x":{"__ndarray__":"8aoC0MKWhD9+5dmrPL2MPwaQ2EPbcZI/TC3EMRiFlj+Syq8fVZiaP9hnmw2Sq54/kILDfWdfoT8zUbn0BWmjP9Yfr2ukcqU/ee6k4kJ8pz8cvZpZ4YWpP8CLkNB/j6s/Y1qGRx6ZrT8GKXy+vKKvP9X7uJot1rA/J+Mz1vzasT94yq4RzN+yP8qxKU2b5LM/G5mkiGrptD9tgB/EOe61P75nmv8I87Y/EE8VO9j3tz9iNpB2p/y4P7MdC7J2Abo/BQWG7UUGuz9X7AApFQu8P6jTe2TkD70/+rr2n7MUvj9MonHbghm/P89EdgspD8A/eLgzqZCRwD8gLPFG+BPBP8mfruRflsE/chNsgscYwj8bhykgL5vCP8P65r2WHcM/bG6kW/6fwz8V4mH5ZSLEP75VH5fNpMQ/Z8ncNDUnxT8PPZrSnKnFP7iwV3AELMY/YSQVDmyuxj9hJBUObK7GP2EkFQ5srsY/uLBXcAQsxj8PPZrSnKnFP2fJ3DQ1J8U/vlUfl82kxD8V4mH5ZSLEP2xupFv+n8M/w/rmvZYdwz8bhykgL5vCP3ITbILHGMI/yZ+u5F+WwT8gLPFG+BPBP3i4M6mQkcA/z0R2CykPwD9MonHbghm/P/q69p+zFL4/qNN7ZOQPvT9X7AApFQu8PwUFhu1FBrs/sx0LsnYBuj9iNpB2p/y4PxBPFTvY97c/vmea/wjztj9tgB/EOe61PxuZpIhq6bQ/yrEpTZvksz94yq4RzN+yPyfjM9b82rE/1fu4mi3WsD8GKXy+vKKvP2Nahkcema0/wIuQ0H+Pqz8cvZpZ4YWpP3nupOJCfKc/1h+va6RypT8zUbn0BWmjP5CCw31nX6E/2GebDZKrnj+Syq8fVZiaP0wtxDEYhZY/BpDYQ9txkj9+5dmrPL2MP/GqAtDCloQ/8aoC0MKWhD8=","dtype":"float64","shape":[88]},"y":{"__ndarray__":"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADeHe+OkqoDQN4d746SqgNA/riXZhyjA0DhUOVoz5IDQFEa5ktVeQNAputkdVlUA0Datu9FeSUDQDu8qh+A6wJAJMHpWdSlAkDbP7jvV1UCQH29ZlCI+QFARJ2JDMSSAUBw6Py5dCIBQNbN0t5SqgBAotO7y9IqAEBVAXPorkj/P+XPnFgWLv4/KA5JQRIN/T9Eb1ZGz+b7Pyve4cERuvo/afzrEI+I+T+NAdPGm1T4P9iAntQIIfc/0D584K3q9T+tzN9pk7j0P1OEPzS6ifM/5RuldS1h8j/7lCJd6TvxP75gdvUxH/A/u0g4a8Ad7j9JPQX3uw7sP0Jmr3IKHOo/8yyY3VlL6D8SXHQJ2ZjmP6CewnPcCeU/5KOoZaib4z8dWWPfE1ziP400MrFjS+E/2gWe7Zdg4D8bPpyAajnfP3/kEBBPDt4/XZoks5c83T+dBeuMULzcP5vjUYbykdw/AAAAAAAAAAA=","dtype":"float64","shape":[88]}},"selected":{"id":"98372","type":"Selection"},"selection_policy":{"id":"98373","type":"UnionRenderers"}},"id":"98346","type":"ColumnDataSource"},{"attributes":{"callback":null},"id":"98309","type":"DataRange1d"},{"attributes":{},"id":"98372","type":"Selection"},{"attributes":{"callback":null,"overlay":{"id":"98381","type":"BoxAnnotation"}},"id":"98328","type":"BoxSelectTool"},{"attributes":{},"id":"98330","type":"UndoTool"},{"attributes":{},"id":"98373","type":"UnionRenderers"},{"attributes":{"dimension":1,"ticker":{"id":"98321","type":"BasicTicker"}},"id":"98324","type":"Grid"},{"attributes":{},"id":"98331","type":"RedoTool"},{"attributes":{},"id":"98332","type":"ResetTool"},{"attributes":{},"id":"98374","type":"Selection"},{"attributes":{},"id":"98313","type":"LinearScale"},{"attributes":{"callback":null,"data":{"x":{"__ndarray__":"mCuI2Kw30j9s5Wan4HjSP0GfRXYUutI/FVkkRUj70j/qEgMUfDzTP77M4eKvfdM/kobAseO+0z9nQJ+AFwDUPzv6fU9LQdQ/ELRcHn+C1D/kbTvtssPUP7gnGrzmBNU/jeH4ihpG1T9hm9dZTofVPzZVtiiCyNU/Cg+V97UJ1j/fyHPG6UrWP7OCUpUdjNY/hzwxZFHN1j9c9g8zhQ7XPzCw7gG5T9c/BWrN0OyQ1z/ZI6yfINLXP63dim5UE9g/gpdpPYhU2D9WUUgMvJXYPysLJ9vv1tg//8QFqiMY2T/TfuR4V1nZP6g4w0eLmtk/fPKhFr/b2T9RrIDl8hzaPyVmX7QmXto/+R8+g1qf2j/O2RxSjuDaP6KT+yDCIds/opP7IMIh2z+ik/sgwiHbP87ZHFKO4No/+R8+g1qf2j8lZl+0Jl7aP1GsgOXyHNo/fPKhFr/b2T+oOMNHi5rZP9N+5HhXWdk//8QFqiMY2T8rCyfb79bYP1ZRSAy8ldg/gpdpPYhU2D+t3YpuVBPYP9kjrJ8g0tc/BWrN0OyQ1z8wsO4BuU/XP1z2DzOFDtc/hzwxZFHN1j+zglKVHYzWP9/Ic8bpStY/Cg+V97UJ1j82VbYogsjVP2Gb11lOh9U/jeH4ihpG1T+4Jxq85gTVP+RtO+2yw9Q/ELRcHn+C1D87+n1PS0HUP2dAn4AXANQ/kobAseO+0z++zOHir33TP+oSAxR8PNM/FVkkRUj70j9Bn0V2FLrSP2zlZqfgeNI/mCuI2Kw30j+YK4jYrDfSPw==","dtype":"float64","shape":[74]},"y":{"__ndarray__":"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAYDmMOKIm9j9gOYw4oib2P3sK+vPFbvY/a3hf+1i99j9ndv6+GhL3P4hShU6la/c/ZG0sYI3L9z9lVjy08jP4PxaPPIqloPg/8AWK9q4S+T8xIE5XRob5P72xgg4J/Pk/YCkmHSJy+j9V8kaQmOr6P87H7q8TX/s/Dtw+GbnP+z8AAMyZ3jz8P85TXwI3o/w/yevjlpIG/T/LGv+jYWb9P6QW+Zbswf0//8x8czAb/j+gRO9t63H+P36FSS6wx/4/kaZ7YA8f/z9cGallyHf/P4mIQ6RI0v8/jkzaEp4WAEAVAvtLN0QAQJPlriKbdQBAROyYcImnAEDJqb0Q59cAQHnDgOGlBwFAn1xOouI3AUBdpkxnU2YBQKNFR8lIkgFAaUpT8Di+AUAAAAAAAAAAAA==","dtype":"float64","shape":[74]}},"selected":{"id":"98376","type":"Selection"},"selection_policy":{"id":"98377","type":"UnionRenderers"}},"id":"98356","type":"ColumnDataSource"},{"attributes":{"fill_alpha":0.1,"fill_color":"#1f77b4","line_alpha":0.1,"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"98358","type":"Patch"},{"attributes":{},"id":"98375","type":"UnionRenderers"},{"attributes":{"source":{"id":"98356","type":"ColumnDataSource"}},"id":"98360","type":"CDSView"},{"attributes":{"overlay":{"id":"98380","type":"BoxAnnotation"}},"id":"98326","type":"BoxZoomTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"98325","type":"PanTool"},{"id":"98326","type":"BoxZoomTool"},{"id":"98327","type":"WheelZoomTool"},{"id":"98328","type":"BoxSelectTool"},{"id":"98329","type":"LassoSelectTool"},{"id":"98330","type":"UndoTool"},{"id":"98331","type":"RedoTool"},{"id":"98332","type":"ResetTool"},{"id":"98333","type":"SaveTool"},{"id":"98334","type":"HoverTool"}]},"id":"98335","type":"Toolbar"},{"attributes":{"callback":null},"id":"98307","type":"DataRange1d"},{"attributes":{"data_source":{"id":"98351","type":"ColumnDataSource"},"glyph":{"id":"98352","type":"Patch"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"98353","type":"Patch"},"selection_glyph":null,"view":{"id":"98355","type":"CDSView"}},"id":"98354","type":"GlyphRenderer"},{"attributes":{"callback":null,"data":{"x":{"__ndarray__":"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","dtype":"float64","shape":[190]},"y":{"__ndarray__":"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","dtype":"float64","shape":[190]}},"selected":{"id":"98378","type":"Selection"},"selection_policy":{"id":"98379","type":"UnionRenderers"}},"id":"98361","type":"ColumnDataSource"},{"attributes":{},"id":"98376","type":"Selection"},{"attributes":{},"id":"98377","type":"UnionRenderers"},{"attributes":{},"id":"98311","type":"LinearScale"},{"attributes":{},"id":"98378","type":"Selection"},{"attributes":{"below":[{"id":"98315","type":"LinearAxis"}],"center":[{"id":"98319","type":"Grid"},{"id":"98324","type":"Grid"}],"left":[{"id":"98320","type":"LinearAxis"}],"output_backend":"webgl","plot_height":500,"plot_width":500,"renderers":[{"id":"98349","type":"GlyphRenderer"},{"id":"98354","type":"GlyphRenderer"},{"id":"98359","type":"GlyphRenderer"},{"id":"98364","type":"GlyphRenderer"}],"title":{"id":"98366","type":"Title"},"toolbar":{"id":"98335","type":"Toolbar"},"x_range":{"id":"98307","type":"DataRange1d"},"x_scale":{"id":"98311","type":"LinearScale"},"y_range":{"id":"98309","type":"DataRange1d"},"y_scale":{"id":"98313","type":"LinearScale"}},"id":"98306","subtype":"Figure","type":"Plot"},{"attributes":{"data_source":{"id":"98356","type":"ColumnDataSource"},"glyph":{"id":"98357","type":"Patch"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"98358","type":"Patch"},"selection_glyph":null,"view":{"id":"98360","type":"CDSView"}},"id":"98359","type":"GlyphRenderer"},{"attributes":{"fill_alpha":0.75,"fill_color":"#2a2eec","line_color":null,"x":{"field":"x"},"y":{"field":"y"}},"id":"98357","type":"Patch"},{"attributes":{},"id":"98379","type":"UnionRenderers"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"98380","type":"BoxAnnotation"},{"attributes":{"fill_alpha":0.1,"fill_color":"#1f77b4","line_alpha":0.1,"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"98353","type":"Patch"},{"attributes":{"formatter":{"id":"98368","type":"BasicTickFormatter"},"ticker":{"id":"98321","type":"BasicTicker"}},"id":"98320","type":"LinearAxis"},{"attributes":{"callback":null,"data":{"x":{"__ndarray__":"CpjSq9Mwxz+zC5BJO7PHP1x/TeeiNcg/BPMKhQq4yD+tZsgicjrJP1bahcDZvMk//01DXkE/yj+owQD8qMHKP1A1vpkQRMs/+ah7N3jGyz+iHDnV30jMP0uQ9nJHy8w/9AO0EK9NzT+dd3GuFtDNP0XrLkx+Us4/7l7s6eXUzj+X0qmHTVfPP0BGZyW12c8/9VySYQ4u0D/JFnEwQm/QP57QT/91sNA/coouzqnx0D9GRA2d3TLRPxv+62sRdNE/77fKOkW10T/EcakJefbRP8RxqQl59tE/xHGpCXn20T/vt8o6RbXRPxv+62sRdNE/RkQNnd0y0T9yii7OqfHQP57QT/91sNA/yRZxMEJv0D/1XJJhDi7QP0BGZyW12c8/l9Kph01Xzz/uXuzp5dTOP0XrLkx+Us4/nXdxrhbQzT/0A7QQr03NP0uQ9nJHy8w/ohw51d9IzD/5qHs3eMbLP1A1vpkQRMs/qMEA/KjByj//TUNeQT/KP1bahcDZvMk/rWbIInI6yT8E8wqFCrjIP1x/TeeiNcg/swuQSTuzxz8KmNKr0zDHPwqY0qvTMMc/","dtype":"float64","shape":[54]},"y":{"__ndarray__":"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABCPmSsZ6AFAEI+ZKxnoAUCaXEtY0Q4CQNBOHMcRMQJAkfD+eyxTAkDDB+o3QHICQObza2Z0jgJAdsptrZKoAkDi9nIJfL8CQKZIqSA00wJAEGR96xzlAkDwqK4UB/UCQL9K9xarBANA33KBtHMSA0C7lkxn9B0DQObWN7IpKQNAk7z2BjY1A0DYvmaqVUEDQK9BW/ErTgNAipUhX7tbA0DNFwA2V2kDQP6wd14+dwNAXNPsIDCFA0AGdCrwVpMDQP2vKEoBnwNADvs41IOnA0BBrwBZh6sDQAAAAAAAAAAA","dtype":"float64","shape":[54]}},"selected":{"id":"98374","type":"Selection"},"selection_policy":{"id":"98375","type":"UnionRenderers"}},"id":"98351","type":"ColumnDataSource"}],"root_ids":["98306"]},"title":"Bokeh Application","version":"1.4.0"}}';
                  var render_items = [{"docid":"c2c43673-a974-4bfa-9b08-244aa12fe5e9","roots":{"98306":"cfc97ae6-df7f-42b9-9f05-fe535c08f767"}}];
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