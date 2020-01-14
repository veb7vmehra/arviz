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
      };var element = document.getElementById("b87b5c94-18f0-4cbb-b699-808447f4cf59");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid 'b87b5c94-18f0-4cbb-b699-808447f4cf59' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"0a90790a-891a-49ff-8d48-0063244c1fe1":{"roots":{"references":[{"attributes":{},"id":"114101","type":"SaveTool"},{"attributes":{},"id":"114081","type":"LinearScale"},{"attributes":{"callback":null},"id":"114102","type":"HoverTool"},{"attributes":{"below":[{"id":"114083","type":"LinearAxis"}],"center":[{"id":"114087","type":"Grid"},{"id":"114092","type":"Grid"}],"left":[{"id":"114088","type":"LinearAxis"}],"output_backend":"webgl","plot_height":331,"plot_width":496,"renderers":[{"id":"114157","type":"GlyphRenderer"},{"id":"114159","type":"Span"},{"id":"114160","type":"Span"},{"id":"114161","type":"Span"},{"id":"114164","type":"GlyphRenderer"}],"title":{"id":"114166","type":"Title"},"toolbar":{"id":"114103","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"114075","type":"DataRange1d"},"x_scale":{"id":"114079","type":"LinearScale"},"y_range":{"id":"114077","type":"DataRange1d"},"y_scale":{"id":"114081","type":"LinearScale"}},"id":"114074","subtype":"Figure","type":"Plot"},{"attributes":{"line_alpha":{"value":0.7},"line_width":{"value":1.5},"location":0},"id":"114161","type":"Span"},{"attributes":{"callback":null},"id":"114075","type":"DataRange1d"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"xs_units":"screen","ys_units":"screen"},"id":"114206","type":"PolyAnnotation"},{"attributes":{"source":{"id":"114163","type":"ColumnDataSource"}},"id":"114165","type":"CDSView"},{"attributes":{},"id":"114203","type":"UnionRenderers"},{"attributes":{"text":"tau"},"id":"114166","type":"Title"},{"attributes":{},"id":"114201","type":"UnionRenderers"},{"attributes":{"callback":null,"overlay":{"id":"114193","type":"PolyAnnotation"}},"id":"114097","type":"LassoSelectTool"},{"attributes":{},"id":"114084","type":"BasicTicker"},{"attributes":{},"id":"114121","type":"LinearScale"},{"attributes":{"callback":null,"data":{"rug_x":{"__ndarray__":"jQwCEA1Gsz9bBMLb9PjIP1Qd9Zram7E/yuyJRU9bmT/K7IlFT1uZP8rsiUVPW5k/yuyJRU9bmT/K7IlFT1uZP8rsiUVPW5k/yuyJRU9bmT/K7IlFT1uZP8rsiUVPW5k/yuyJRU9bmT/K7IlFT1uZP8rsiUVPW5k/yuyJRU9bmT/zis1V/mKlP/OKzVX+YqU/84rNVf5ipT/zis1V/mKlP/OKzVX+YqU/84rNVf5ipT/zis1V/mKlP/OKzVX+YqU/aF85wG2piz9oXznAbamLP2hfOcBtqYs/aF85wG2piz9oXznAbamLP2hfOcBtqYs/pI3yRkqEyT9c/+ob+nG6P4OiBeyjALU/mx4fY+a33D9wF2c1cbTRPy51Aws2htg/P07TEgOYwz9FOncTGHy5P/BQ+ANPucc/uRO6PYJJzj9CRCWTDYpmP+UvVnGFsrI/8JR71fNwcj8=","dtype":"float64","shape":[43]},"rug_y":{"__ndarray__":"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=","dtype":"float64","shape":[43]}},"selected":{"id":"114189","type":"Selection"},"selection_policy":{"id":"114190","type":"UnionRenderers"}},"id":"114163","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"114163","type":"ColumnDataSource"},"glyph":{"id":"114162","type":"Dash"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"114165","type":"CDSView"}},"id":"114164","type":"GlyphRenderer"},{"attributes":{"below":[{"id":"114123","type":"LinearAxis"}],"center":[{"id":"114127","type":"Grid"},{"id":"114132","type":"Grid"}],"left":[{"id":"114128","type":"LinearAxis"}],"output_backend":"webgl","plot_height":331,"plot_width":496,"renderers":[{"id":"114171","type":"GlyphRenderer"},{"id":"114173","type":"Span"},{"id":"114174","type":"Span"},{"id":"114175","type":"Span"},{"id":"114178","type":"GlyphRenderer"}],"title":{"id":"114180","type":"Title"},"toolbar":{"id":"114143","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"114115","type":"DataRange1d"},"x_scale":{"id":"114119","type":"LinearScale"},"y_range":{"id":"114117","type":"DataRange1d"},"y_scale":{"id":"114121","type":"LinearScale"}},"id":"114114","subtype":"Figure","type":"Plot"},{"attributes":{"line_alpha":{"value":0.5},"line_width":{"value":0.75},"location":0.17824444314769777},"id":"114160","type":"Span"},{"attributes":{"line_alpha":{"value":0.5},"line_width":{"value":1.5},"location":0.2515582690238711},"id":"114159","type":"Span"},{"attributes":{"axis_label":"Quantile","formatter":{"id":"114185","type":"BasicTickFormatter"},"ticker":{"id":"114084","type":"BasicTicker"}},"id":"114083","type":"LinearAxis"},{"attributes":{},"id":"114124","type":"BasicTicker"},{"attributes":{},"id":"114190","type":"UnionRenderers"},{"attributes":{"axis_label":"Quantile","formatter":{"id":"114198","type":"BasicTickFormatter"},"ticker":{"id":"114124","type":"BasicTicker"}},"id":"114123","type":"LinearAxis"},{"attributes":{},"id":"114098","type":"UndoTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"114093","type":"PanTool"},{"id":"114094","type":"BoxZoomTool"},{"id":"114095","type":"WheelZoomTool"},{"id":"114096","type":"BoxSelectTool"},{"id":"114097","type":"LassoSelectTool"},{"id":"114098","type":"UndoTool"},{"id":"114099","type":"RedoTool"},{"id":"114100","type":"ResetTool"},{"id":"114101","type":"SaveTool"},{"id":"114102","type":"HoverTool"}]},"id":"114103","type":"Toolbar"},{"attributes":{"source":{"id":"114154","type":"ColumnDataSource"}},"id":"114158","type":"CDSView"},{"attributes":{"data_source":{"id":"114154","type":"ColumnDataSource"},"glyph":{"id":"114155","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"114156","type":"Circle"},"selection_glyph":null,"view":{"id":"114158","type":"CDSView"}},"id":"114157","type":"GlyphRenderer"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"114205","type":"BoxAnnotation"},{"attributes":{"angle":{"units":"rad","value":1.5707963267948966},"line_alpha":{"value":0.35},"size":{"units":"screen","value":8},"x":{"field":"rug_x"},"y":{"field":"rug_y"}},"id":"114162","type":"Dash"},{"attributes":{"ticker":{"id":"114124","type":"BasicTicker"}},"id":"114127","type":"Grid"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"114133","type":"PanTool"},{"id":"114134","type":"BoxZoomTool"},{"id":"114135","type":"WheelZoomTool"},{"id":"114136","type":"BoxSelectTool"},{"id":"114137","type":"LassoSelectTool"},{"id":"114138","type":"UndoTool"},{"id":"114139","type":"RedoTool"},{"id":"114140","type":"ResetTool"},{"id":"114141","type":"SaveTool"},{"id":"114142","type":"HoverTool"}]},"id":"114143","type":"Toolbar"},{"attributes":{},"id":"114099","type":"RedoTool"},{"attributes":{},"id":"114129","type":"BasicTicker"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"114204","type":"BoxAnnotation"},{"attributes":{"callback":null},"id":"114142","type":"HoverTool"},{"attributes":{},"id":"114100","type":"ResetTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"114156","type":"Circle"},{"attributes":{"axis_label":"MCSE for quantiles","formatter":{"id":"114196","type":"BasicTickFormatter"},"ticker":{"id":"114129","type":"BasicTicker"}},"id":"114128","type":"LinearAxis"},{"attributes":{},"id":"114200","type":"Selection"},{"attributes":{},"id":"114141","type":"SaveTool"},{"attributes":{"text":"mu"},"id":"114180","type":"Title"},{"attributes":{},"id":"114188","type":"UnionRenderers"},{"attributes":{},"id":"114140","type":"ResetTool"},{"attributes":{},"id":"114196","type":"BasicTickFormatter"},{"attributes":{},"id":"114187","type":"Selection"},{"attributes":{},"id":"114139","type":"RedoTool"},{"attributes":{},"id":"114138","type":"UndoTool"},{"attributes":{},"id":"114189","type":"Selection"},{"attributes":{"children":[{"id":"114210","type":"ToolbarBox"},{"id":"114208","type":"GridBox"}]},"id":"114211","type":"Column"},{"attributes":{},"id":"114185","type":"BasicTickFormatter"},{"attributes":{"callback":null,"overlay":{"id":"114206","type":"PolyAnnotation"}},"id":"114137","type":"LassoSelectTool"},{"attributes":{},"id":"114202","type":"Selection"},{"attributes":{},"id":"114183","type":"BasicTickFormatter"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"114155","type":"Circle"},{"attributes":{},"id":"114198","type":"BasicTickFormatter"},{"attributes":{"callback":null,"data":{"x":{"__ndarray__":"mpmZmZmZqT/SjhUII+24P2wor6G8hsI/bolTv+eWyD9w6vfcEqfOP7klTv2eW9I/O1YgjLRj1T+8hvIaymvYPz23xKnfc9s/vueWOPV73j8gjLRjBcLgP2GkHSsQRuI/oryG8hrK4z/i1O+5JU7lPyPtWIEw0uY/YwXCSDtW6D+kHSsQRtrpP+U1lNdQXus/JU79nlvi7D9mZmZmZmbuPw==","dtype":"float64","shape":[20]},"y":{"__ndarray__":"TOY7mm62yD9I3tS4V+rMP7gbLMPg7Mo/HHCIRHVOzT9orzckCyTOP1wEFcjrLsw/GFjIBtNVyz+IfM+LFJ/NP2h6CcmRC8w/eFWrsUlMzD9YsRCvESnPPzD6BbtRL9Q/bGdUYzXr0j8AebTCVJLRP+D0hUiIM80/eDGzGTRz0z8oEF3N8onTPzjOhQa9ItQ/kLBgWUSo1j8gMD3n4GLXPw==","dtype":"float64","shape":[20]}},"selected":{"id":"114187","type":"Selection"},"selection_policy":{"id":"114188","type":"UnionRenderers"}},"id":"114154","type":"ColumnDataSource"},{"attributes":{"line_alpha":{"value":0.5},"line_width":{"value":0.75},"location":0.15209716425007633},"id":"114174","type":"Span"},{"attributes":{"dimension":1,"ticker":{"id":"114129","type":"BasicTicker"}},"id":"114132","type":"Grid"},{"attributes":{"callback":null,"data":{"x":{"__ndarray__":"mpmZmZmZqT/SjhUII+24P2wor6G8hsI/bolTv+eWyD9w6vfcEqfOP7klTv2eW9I/O1YgjLRj1T+8hvIaymvYPz23xKnfc9s/vueWOPV73j8gjLRjBcLgP2GkHSsQRuI/oryG8hrK4z/i1O+5JU7lPyPtWIEw0uY/YwXCSDtW6D+kHSsQRtrpP+U1lNdQXus/JU79nlvi7D9mZmZmZmbuPw==","dtype":"float64","shape":[20]},"y":{"__ndarray__":"7qx+MbH82z8taAlcwdPMP2RFpmpIiMs/VPd+dISI1j+QjUmxOK7VPyhwmz5eQNE/YHF86U9Izz8YN/msnr7PPyjO/sTiTs8/LFXTKecq0z/kTaFlAynUP2DJI4UMO84/IGLXJUgNzD8wUKgDDerNPxDSzcUXbc4/kDNyJsikyj/wFHev55XOP4Bvij2VrsQ/4I8dAXxLyD+Ad8zwRu/RPw==","dtype":"float64","shape":[20]}},"selected":{"id":"114200","type":"Selection"},"selection_policy":{"id":"114201","type":"UnionRenderers"}},"id":"114168","type":"ColumnDataSource"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"114192","type":"BoxAnnotation"},{"attributes":{"source":{"id":"114168","type":"ColumnDataSource"}},"id":"114172","type":"CDSView"},{"attributes":{"line_alpha":{"value":0.5},"line_width":{"value":1.5},"location":0.21484300137312468},"id":"114173","type":"Span"},{"attributes":{"overlay":{"id":"114191","type":"BoxAnnotation"}},"id":"114094","type":"BoxZoomTool"},{"attributes":{},"id":"114095","type":"WheelZoomTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"114170","type":"Circle"},{"attributes":{"callback":null,"overlay":{"id":"114192","type":"BoxAnnotation"}},"id":"114096","type":"BoxSelectTool"},{"attributes":{"data_source":{"id":"114168","type":"ColumnDataSource"},"glyph":{"id":"114169","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"114170","type":"Circle"},"selection_glyph":null,"view":{"id":"114172","type":"CDSView"}},"id":"114171","type":"GlyphRenderer"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"114169","type":"Circle"},{"attributes":{"line_alpha":{"value":0.7},"line_width":{"value":1.5},"location":0},"id":"114175","type":"Span"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"xs_units":"screen","ys_units":"screen"},"id":"114193","type":"PolyAnnotation"},{"attributes":{"callback":null,"data":{"rug_x":{"__ndarray__":"fV36E1z/6j89DycBWWfXP73VlTJ7YsE/w8E5M5BGxz/DwTkzkEbHP8PBOTOQRsc/w8E5M5BGxz/DwTkzkEbHP8PBOTOQRsc/w8E5M5BGxz/DwTkzkEbHP8PBOTOQRsc/w8E5M5BGxz/DwTkzkEbHP8PBOTOQRsc/w8E5M5BGxz9P6PYIJnnCP0/o9ggmecI/T+j2CCZ5wj9P6PYIJnnCP0/o9ggmecI/T+j2CCZ5wj9P6PYIJnnCP0/o9ggmecI/txiR/XzQvD+3GJH9fNC8P7cYkf180Lw/txiR/XzQvD+3GJH9fNC8P7cYkf180Lw/Oqay45Jr6D86SHRMZcflP7HThSU1z+I/VdSaCTtd6D9Hvab2ZmSwP8UA5kQ6d4M/0GULqag1oz+aI/Yi4T7rP55DEK8H/NA/qgGd6qjX1D+VqnS/h2ThP/UnuP7VN+Q/TGXHJdeQ2z8=","dtype":"float64","shape":[43]},"rug_y":{"__ndarray__":"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=","dtype":"float64","shape":[43]}},"selected":{"id":"114202","type":"Selection"},"selection_policy":{"id":"114203","type":"UnionRenderers"}},"id":"114177","type":"ColumnDataSource"},{"attributes":{"callback":null,"end":1,"start":-0.05},"id":"114077","type":"DataRange1d"},{"attributes":{},"id":"114093","type":"PanTool"},{"attributes":{"overlay":{"id":"114204","type":"BoxAnnotation"}},"id":"114134","type":"BoxZoomTool"},{"attributes":{},"id":"114119","type":"LinearScale"},{"attributes":{"callback":null},"id":"114115","type":"DataRange1d"},{"attributes":{"callback":null,"end":1,"start":-0.05},"id":"114117","type":"DataRange1d"},{"attributes":{"source":{"id":"114177","type":"ColumnDataSource"}},"id":"114179","type":"CDSView"},{"attributes":{"callback":null,"overlay":{"id":"114205","type":"BoxAnnotation"}},"id":"114136","type":"BoxSelectTool"},{"attributes":{"angle":{"units":"rad","value":1.5707963267948966},"line_alpha":{"value":0.35},"size":{"units":"screen","value":8},"x":{"field":"rug_x"},"y":{"field":"rug_y"}},"id":"114176","type":"Dash"},{"attributes":{"tools":[{"id":"114093","type":"PanTool"},{"id":"114094","type":"BoxZoomTool"},{"id":"114095","type":"WheelZoomTool"},{"id":"114096","type":"BoxSelectTool"},{"id":"114097","type":"LassoSelectTool"},{"id":"114098","type":"UndoTool"},{"id":"114099","type":"RedoTool"},{"id":"114100","type":"ResetTool"},{"id":"114101","type":"SaveTool"},{"id":"114102","type":"HoverTool"},{"id":"114133","type":"PanTool"},{"id":"114134","type":"BoxZoomTool"},{"id":"114135","type":"WheelZoomTool"},{"id":"114136","type":"BoxSelectTool"},{"id":"114137","type":"LassoSelectTool"},{"id":"114138","type":"UndoTool"},{"id":"114139","type":"RedoTool"},{"id":"114140","type":"ResetTool"},{"id":"114141","type":"SaveTool"},{"id":"114142","type":"HoverTool"}]},"id":"114209","type":"ProxyToolbar"},{"attributes":{},"id":"114135","type":"WheelZoomTool"},{"attributes":{"data_source":{"id":"114177","type":"ColumnDataSource"},"glyph":{"id":"114176","type":"Dash"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"114179","type":"CDSView"}},"id":"114178","type":"GlyphRenderer"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"114191","type":"BoxAnnotation"},{"attributes":{"children":[[{"id":"114074","subtype":"Figure","type":"Plot"},0,0],[{"id":"114114","subtype":"Figure","type":"Plot"},0,1]]},"id":"114208","type":"GridBox"},{"attributes":{"dimension":1,"ticker":{"id":"114089","type":"BasicTicker"}},"id":"114092","type":"Grid"},{"attributes":{"toolbar":{"id":"114209","type":"ProxyToolbar"},"toolbar_location":"above"},"id":"114210","type":"ToolbarBox"},{"attributes":{},"id":"114089","type":"BasicTicker"},{"attributes":{"axis_label":"MCSE for quantiles","formatter":{"id":"114183","type":"BasicTickFormatter"},"ticker":{"id":"114089","type":"BasicTicker"}},"id":"114088","type":"LinearAxis"},{"attributes":{},"id":"114079","type":"LinearScale"},{"attributes":{"ticker":{"id":"114084","type":"BasicTicker"}},"id":"114087","type":"Grid"},{"attributes":{},"id":"114133","type":"PanTool"}],"root_ids":["114211"]},"title":"Bokeh Application","version":"1.4.0"}}';
                  var render_items = [{"docid":"0a90790a-891a-49ff-8d48-0063244c1fe1","roots":{"114211":"b87b5c94-18f0-4cbb-b699-808447f4cf59"}}];
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