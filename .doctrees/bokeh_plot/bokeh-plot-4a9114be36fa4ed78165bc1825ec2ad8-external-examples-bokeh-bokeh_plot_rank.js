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
      };var element = document.getElementById("808d6d50-7046-4faa-85f7-72ca89660a31");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid '808d6d50-7046-4faa-85f7-72ca89660a31' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"83cb9f44-5640-46ec-a201-2c50d884d954":{"roots":{"references":[{"attributes":{},"id":"118371","type":"UndoTool"},{"attributes":{"callback":null,"overlay":{"id":"118510","type":"BoxAnnotation"}},"id":"118407","type":"BoxSelectTool"},{"attributes":{},"id":"118352","type":"LinearScale"},{"attributes":{"bottom":{"value":2},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"118467","type":"VBar"},{"attributes":{"below":[{"id":"118356","type":"LinearAxis"}],"center":[{"id":"118360","type":"Grid"},{"id":"118365","type":"Grid"},{"id":"118430","type":"Span"},{"id":"118436","type":"Span"},{"id":"118442","type":"Span"},{"id":"118448","type":"Span"}],"left":[{"id":"118361","type":"LinearAxis"}],"output_backend":"webgl","plot_height":331,"plot_width":496,"renderers":[{"id":"118428","type":"GlyphRenderer"},{"id":"118434","type":"GlyphRenderer"},{"id":"118440","type":"GlyphRenderer"},{"id":"118446","type":"GlyphRenderer"}],"title":{"id":"118451","type":"Title"},"toolbar":{"id":"118376","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"118348","type":"DataRange1d"},"x_scale":{"id":"118352","type":"LinearScale"},"y_range":{"id":"118350","type":"DataRange1d"},"y_scale":{"id":"118354","type":"LinearScale"}},"id":"118347","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null,"overlay":{"id":"118495","type":"PolyAnnotation"}},"id":"118370","type":"LassoSelectTool"},{"attributes":{},"id":"118372","type":"RedoTool"},{"attributes":{"callback":null,"overlay":{"id":"118511","type":"PolyAnnotation"}},"id":"118408","type":"LassoSelectTool"},{"attributes":{"data_source":{"id":"118465","type":"ColumnDataSource"},"glyph":{"id":"118466","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"118467","type":"VBar"},"selection_glyph":null,"view":{"id":"118469","type":"CDSView"}},"id":"118468","type":"GlyphRenderer"},{"attributes":{"source":{"id":"118453","type":"ColumnDataSource"}},"id":"118457","type":"CDSView"},{"attributes":{"data_source":{"id":"118437","type":"ColumnDataSource"},"glyph":{"id":"118438","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"118439","type":"VBar"},"selection_glyph":null,"view":{"id":"118441","type":"CDSView"}},"id":"118440","type":"GlyphRenderer"},{"attributes":{"source":{"id":"118465","type":"ColumnDataSource"}},"id":"118469","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"xs_units":"screen","ys_units":"screen"},"id":"118511","type":"PolyAnnotation"},{"attributes":{},"id":"118490","type":"UnionRenderers"},{"attributes":{"below":[{"id":"118394","type":"LinearAxis"}],"center":[{"id":"118398","type":"Grid"},{"id":"118403","type":"Grid"},{"id":"118458","type":"Span"},{"id":"118464","type":"Span"},{"id":"118470","type":"Span"},{"id":"118476","type":"Span"}],"left":[{"id":"118399","type":"LinearAxis"}],"output_backend":"webgl","plot_height":331,"plot_width":496,"renderers":[{"id":"118456","type":"GlyphRenderer"},{"id":"118462","type":"GlyphRenderer"},{"id":"118468","type":"GlyphRenderer"},{"id":"118474","type":"GlyphRenderer"}],"title":{"id":"118479","type":"Title"},"toolbar":{"id":"118414","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"118348","type":"DataRange1d"},"x_scale":{"id":"118390","type":"LinearScale"},"y_range":{"id":"118350","type":"DataRange1d"},"y_scale":{"id":"118392","type":"LinearScale"}},"id":"118387","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"118373","type":"ResetTool"},{"attributes":{},"id":"118409","type":"UndoTool"},{"attributes":{"ticker":{"id":"118357","type":"BasicTicker"}},"id":"118360","type":"Grid"},{"attributes":{"source":{"id":"118431","type":"ColumnDataSource"}},"id":"118435","type":"CDSView"},{"attributes":{"line_dash":[6],"location":1.4166666666666665},"id":"118436","type":"Span"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"118510","type":"BoxAnnotation"},{"attributes":{},"id":"118374","type":"SaveTool"},{"attributes":{"source":{"id":"118471","type":"ColumnDataSource"}},"id":"118475","type":"CDSView"},{"attributes":{"callback":null},"id":"118348","type":"DataRange1d"},{"attributes":{},"id":"118354","type":"LinearScale"},{"attributes":{},"id":"118492","type":"UnionRenderers"},{"attributes":{"callback":null},"id":"118375","type":"HoverTool"},{"attributes":{"line_dash":[6],"location":3.4166666666666665},"id":"118448","type":"Span"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"118493","type":"BoxAnnotation"},{"attributes":{"axis_label":"Rank (all chains)","formatter":{"id":"118483","type":"BasicTickFormatter"},"major_label_overrides":{"0":"0","1":"1","2":"2","3":"3"},"ticker":{"id":"118357","type":"BasicTicker"}},"id":"118356","type":"LinearAxis"},{"attributes":{"bottom":{"value":2},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"118439","type":"VBar"},{"attributes":{"bottom":{"value":2},"fill_color":{"value":"#328c06"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"118466","type":"VBar"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"118509","type":"BoxAnnotation"},{"attributes":{"callback":null,"data":{"top":{"__ndarray__":"AAAAAAAAAECkcD0K1yMBQCa/WPKLpQFA6LSBThtoAkBqA5020OkCQCz5xZJfrANA8O7u7u5uBEDrUbgehWsDQOtRuB6FawNAC9ejcD0KA0BKfrHkF0sDQA102kCnDQRAqqqqqqoqA0BQG+i0gU4EQC+W/GLJrwRAThvotIFOBECuR+F6FC4EQE4b6LSBTgRAcD0K16PwBEA=","dtype":"float64","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","shape":[19]}},"selected":{"id":"118489","type":"Selection"},"selection_policy":{"id":"118490","type":"UnionRenderers"}},"id":"118437","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"118455","type":"VBar"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"118494","type":"BoxAnnotation"},{"attributes":{},"id":"118410","type":"RedoTool"},{"attributes":{"line_dash":[6],"location":3.480769230769231},"id":"118476","type":"Span"},{"attributes":{"bottom":{"value":2},"fill_color":{"value":"#328c06"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"118438","type":"VBar"},{"attributes":{"bottom":{"value":3},"fill_color":{"value":"#c10c90"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"118444","type":"VBar"},{"attributes":{},"id":"118357","type":"BasicTicker"},{"attributes":{"text":"tau"},"id":"118451","type":"Title"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"xs_units":"screen","ys_units":"screen"},"id":"118495","type":"PolyAnnotation"},{"attributes":{"bottom":{"value":1},"fill_color":{"value":"#fa7c17"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"118460","type":"VBar"},{"attributes":{"data_source":{"id":"118443","type":"ColumnDataSource"},"glyph":{"id":"118444","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"118445","type":"VBar"},"selection_glyph":null,"view":{"id":"118447","type":"CDSView"}},"id":"118446","type":"GlyphRenderer"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"118366","type":"PanTool"},{"id":"118367","type":"BoxZoomTool"},{"id":"118368","type":"WheelZoomTool"},{"id":"118369","type":"BoxSelectTool"},{"id":"118370","type":"LassoSelectTool"},{"id":"118371","type":"UndoTool"},{"id":"118372","type":"RedoTool"},{"id":"118373","type":"ResetTool"},{"id":"118374","type":"SaveTool"},{"id":"118375","type":"HoverTool"}]},"id":"118376","type":"Toolbar"},{"attributes":{},"id":"118507","type":"Selection"},{"attributes":{"line_dash":[6],"location":2.480769230769231},"id":"118470","type":"Span"},{"attributes":{},"id":"118395","type":"BasicTicker"},{"attributes":{"line_dash":[6],"location":1.4807692307692308},"id":"118464","type":"Span"},{"attributes":{},"id":"118508","type":"UnionRenderers"},{"attributes":{"axis_label":"Chain","formatter":{"id":"118482","type":"BasicTickFormatter"},"ticker":{"id":"118449","type":"FixedTicker"}},"id":"118361","type":"LinearAxis"},{"attributes":{"text":"mu"},"id":"118479","type":"Title"},{"attributes":{"ticker":{"id":"118395","type":"BasicTicker"}},"id":"118398","type":"Grid"},{"attributes":{"bottom":{"value":3},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"118473","type":"VBar"},{"attributes":{},"id":"118498","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"118427","type":"VBar"},{"attributes":{"source":{"id":"118437","type":"ColumnDataSource"}},"id":"118441","type":"CDSView"},{"attributes":{},"id":"118362","type":"BasicTicker"},{"attributes":{"bottom":{"value":1},"fill_color":{"value":"#fa7c17"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"118432","type":"VBar"},{"attributes":{},"id":"118505","type":"Selection"},{"attributes":{},"id":"118404","type":"PanTool"},{"attributes":{"data_source":{"id":"118431","type":"ColumnDataSource"},"glyph":{"id":"118432","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"118433","type":"VBar"},"selection_glyph":null,"view":{"id":"118435","type":"CDSView"}},"id":"118434","type":"GlyphRenderer"},{"attributes":{"source":{"id":"118443","type":"ColumnDataSource"}},"id":"118447","type":"CDSView"},{"attributes":{},"id":"118499","type":"BasicTickFormatter"},{"attributes":{"dimension":1,"ticker":{"id":"118362","type":"BasicTicker"}},"id":"118365","type":"Grid"},{"attributes":{"line_dash":[6],"location":2.4166666666666665},"id":"118442","type":"Span"},{"attributes":{"axis_label":"Chain","formatter":{"id":"118498","type":"BasicTickFormatter"},"ticker":{"id":"118477","type":"FixedTicker"}},"id":"118399","type":"LinearAxis"},{"attributes":{"bottom":{"value":1},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"118433","type":"VBar"},{"attributes":{},"id":"118501","type":"Selection"},{"attributes":{},"id":"118482","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"118425","type":"ColumnDataSource"},"glyph":{"id":"118426","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"118427","type":"VBar"},"selection_glyph":null,"view":{"id":"118429","type":"CDSView"}},"id":"118428","type":"GlyphRenderer"},{"attributes":{"dimension":1,"ticker":{"id":"118400","type":"BasicTicker"}},"id":"118403","type":"Grid"},{"attributes":{"bottom":{"value":3},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"118445","type":"VBar"},{"attributes":{"bottom":{"value":3},"fill_color":{"value":"#c10c90"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"118472","type":"VBar"},{"attributes":{"toolbar":{"id":"118514","type":"ProxyToolbar"},"toolbar_location":"above"},"id":"118515","type":"ToolbarBox"},{"attributes":{},"id":"118506","type":"UnionRenderers"},{"attributes":{},"id":"118411","type":"ResetTool"},{"attributes":{"data_source":{"id":"118471","type":"ColumnDataSource"},"glyph":{"id":"118472","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"118473","type":"VBar"},"selection_glyph":null,"view":{"id":"118475","type":"CDSView"}},"id":"118474","type":"GlyphRenderer"},{"attributes":{},"id":"118392","type":"LinearScale"},{"attributes":{},"id":"118400","type":"BasicTicker"},{"attributes":{"callback":null,"data":{"top":{"__ndarray__":"4Qd+4Af+BUDVSq3USq0EQBh6oRd6oQJAGHqhF3qhAkAUO7ETOzECQCu1Uiu10gRAd2IndmKnA0DFTuzETuwCQHIjN3IjNwNAJDdyIzfyA0Bu5EZu5MYCQB/4gR/4gQNAxU7sxE7sAkDTC73QCz0EQNALvdALPQRA0Au90As9BEB6oRd6oRcEQIIf+IEf+ARAhl7ohV5oBUA=","dtype":"float64","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","shape":[19]}},"selected":{"id":"118505","type":"Selection"},"selection_policy":{"id":"118506","type":"UnionRenderers"}},"id":"118465","type":"ColumnDataSource"},{"attributes":{"line_dash":[6],"location":0.41666666666666663},"id":"118430","type":"Span"},{"attributes":{"callback":null,"data":{"top":{"__ndarray__":"P/ADP/AD9z+SG7mRG7n2Py/0Qi/0QvU/eqEXeqEX9D9IbuRGbuT3P4If+IEf+PQ/MPRCL/RC9T+ZmZmZmZn3Pyd2Yid2YvQ/9kIv9EIv+D+4kRu5kRv7P7ATO7ETO/o/oBd6oRd6+D+mF3qhF3r4P1ZqpVZqpfk/9EIv9EIv+D9GbuRGbuT3P07sxE7sxPg/wA/8wA/8+z8=","dtype":"float64","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","shape":[19]}},"selected":{"id":"118503","type":"Selection"},"selection_policy":{"id":"118504","type":"UnionRenderers"}},"id":"118459","type":"ColumnDataSource"},{"attributes":{"callback":null,"data":{"top":{"__ndarray__":"EPzAD/zACUAg+IEf+IELQMEP/MAPfApAdmIndmKnC0A4ciM3ciMOQIZe6IVeaA1Ah17ohV5oDUDYiZ3YiR0NQD7wAz/wAw9Ae6EXeqEXDEAbuZEbuRELQHZiJ3ZipwtAeqEXeqEXDEB0IzdyIzcLQBu5kRu5EQtAFDuxEzsxCkByIzdyIzcLQBu5kRu5EQtAxU7sxE7sCkA=","dtype":"float64","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","shape":[19]}},"selected":{"id":"118507","type":"Selection"},"selection_policy":{"id":"118508","type":"UnionRenderers"}},"id":"118471","type":"ColumnDataSource"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"118404","type":"PanTool"},{"id":"118405","type":"BoxZoomTool"},{"id":"118406","type":"WheelZoomTool"},{"id":"118407","type":"BoxSelectTool"},{"id":"118408","type":"LassoSelectTool"},{"id":"118409","type":"UndoTool"},{"id":"118410","type":"RedoTool"},{"id":"118411","type":"ResetTool"},{"id":"118412","type":"SaveTool"},{"id":"118413","type":"HoverTool"}]},"id":"118414","type":"Toolbar"},{"attributes":{},"id":"118390","type":"LinearScale"},{"attributes":{"line_dash":[6],"location":0.48076923076923067},"id":"118458","type":"Span"},{"attributes":{},"id":"118485","type":"Selection"},{"attributes":{},"id":"118502","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"118453","type":"ColumnDataSource"},"glyph":{"id":"118454","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"118455","type":"VBar"},"selection_glyph":null,"view":{"id":"118457","type":"CDSView"}},"id":"118456","type":"GlyphRenderer"},{"attributes":{"callback":null,"data":{"top":{"__ndarray__":"AAAAAAAA8D8OdNpApw30PxSuR+F6FPY/1AY6baDT9T8c6LSBThv4PxdLfrHkF/c/1QY6baDT9T+V/GLJL5b2P1jyiyW/WPc/43oUrkfh+T8ehetRuB75PxdLfrHkF/c/mJmZmZmZ9z8YrkfhehT2P1RVVVVVVfY/lfxiyS+W9j/gehSuR+H5P5iZmZmZmfc/kl8s+cWS9T8=","dtype":"float64","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","shape":[19]}},"selected":{"id":"118487","type":"Selection"},"selection_policy":{"id":"118488","type":"UnionRenderers"}},"id":"118431","type":"ColumnDataSource"},{"attributes":{"callback":null,"data":{"top":{"__ndarray__":"MzMzMzOzDUC4HoXrUTgPQDCW/GLJrwxA0GkDnTbQDEBtoNMGOu0LQOi0gU4baApAzszMzMzMC0DrUbgehWsLQClcj8L1qApAqA102kAnCkBH4XoUrkcKQMaSXyz5xQlA6LSBThtoCkAqXI/C9agKQClcj8L1qApACtejcD0KC0AGOm2g0wYKQMkvlvxiyQpAaQOdNtDpCkA=","dtype":"float64","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","shape":[19]}},"selected":{"id":"118491","type":"Selection"},"selection_policy":{"id":"118492","type":"UnionRenderers"}},"id":"118443","type":"ColumnDataSource"},{"attributes":{"children":[{"id":"118515","type":"ToolbarBox"},{"id":"118513","type":"GridBox"}]},"id":"118516","type":"Column"},{"attributes":{},"id":"118503","type":"Selection"},{"attributes":{},"id":"118483","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"118459","type":"ColumnDataSource"},"glyph":{"id":"118460","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"118461","type":"VBar"},"selection_glyph":null,"view":{"id":"118463","type":"CDSView"}},"id":"118462","type":"GlyphRenderer"},{"attributes":{"axis_label":"Rank (all chains)","formatter":{"id":"118499","type":"BasicTickFormatter"},"major_label_overrides":{"0":"0","1":"1","2":"2","3":"3"},"ticker":{"id":"118395","type":"BasicTicker"}},"id":"118394","type":"LinearAxis"},{"attributes":{"fill_color":{"value":"#2a2eec"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"118426","type":"VBar"},{"attributes":{},"id":"118366","type":"PanTool"},{"attributes":{"callback":null,"data":{"top":{"__ndarray__":"ZWZmZmZm7j9OG+i0gU7XP2cDnTbQad8/WfKLJb9Y2j9Bpw102kDTP17JL5b8Yt0/PW2g0wY60T9U8oslv1jaP1ws+cWSX9w/WlVVVVVV2T9SVVVVVVXZPzTQaQOdNuA/ZgOdNtBp3z9m8oslv1jaP0h+seQXS9Y/SH6x5BdL1j84baDTBjrRPz+nDXTaQNM/SH6x5BdL1j8=","dtype":"float64","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","shape":[19]}},"selected":{"id":"118485","type":"Selection"},"selection_policy":{"id":"118486","type":"UnionRenderers"}},"id":"118425","type":"ColumnDataSource"},{"attributes":{"callback":null,"data":{"top":{"__ndarray__":"6YVe6IVe4D9nZmZmZmbeP2dmZmZmZu4/WWqlVmql7D/eyI3cyI3YP7vQC73QC9U/uBM7sRM73T+vEzuxEzvdPyZ2Yid2Ytc/lxu5kRu52T8ZuZEbuZHfP5AbuZEbudk/QS/0Qi/04D8LwQ/8wA/cP5AbuZEbudk/q9RKrdRK4z9BL/RCL/TgPyZ2Yid2Ytc/USu1Uiu1wj8=","dtype":"float64","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","shape":[19]}},"selected":{"id":"118501","type":"Selection"},"selection_policy":{"id":"118502","type":"UnionRenderers"}},"id":"118453","type":"ColumnDataSource"},{"attributes":{"tools":[{"id":"118366","type":"PanTool"},{"id":"118367","type":"BoxZoomTool"},{"id":"118368","type":"WheelZoomTool"},{"id":"118369","type":"BoxSelectTool"},{"id":"118370","type":"LassoSelectTool"},{"id":"118371","type":"UndoTool"},{"id":"118372","type":"RedoTool"},{"id":"118373","type":"ResetTool"},{"id":"118374","type":"SaveTool"},{"id":"118375","type":"HoverTool"},{"id":"118404","type":"PanTool"},{"id":"118405","type":"BoxZoomTool"},{"id":"118406","type":"WheelZoomTool"},{"id":"118407","type":"BoxSelectTool"},{"id":"118408","type":"LassoSelectTool"},{"id":"118409","type":"UndoTool"},{"id":"118410","type":"RedoTool"},{"id":"118411","type":"ResetTool"},{"id":"118412","type":"SaveTool"},{"id":"118413","type":"HoverTool"}]},"id":"118514","type":"ProxyToolbar"},{"attributes":{"ticks":[0,1,2,3]},"id":"118449","type":"FixedTicker"},{"attributes":{},"id":"118489","type":"Selection"},{"attributes":{"source":{"id":"118459","type":"ColumnDataSource"}},"id":"118463","type":"CDSView"},{"attributes":{"children":[[{"id":"118347","subtype":"Figure","type":"Plot"},0,0],[{"id":"118387","subtype":"Figure","type":"Plot"},0,1]]},"id":"118513","type":"GridBox"},{"attributes":{"overlay":{"id":"118493","type":"BoxAnnotation"}},"id":"118367","type":"BoxZoomTool"},{"attributes":{"source":{"id":"118425","type":"ColumnDataSource"}},"id":"118429","type":"CDSView"},{"attributes":{},"id":"118487","type":"Selection"},{"attributes":{"bottom":{"value":1},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"118461","type":"VBar"},{"attributes":{},"id":"118504","type":"UnionRenderers"},{"attributes":{},"id":"118406","type":"WheelZoomTool"},{"attributes":{"callback":null},"id":"118413","type":"HoverTool"},{"attributes":{},"id":"118486","type":"UnionRenderers"},{"attributes":{},"id":"118491","type":"Selection"},{"attributes":{},"id":"118368","type":"WheelZoomTool"},{"attributes":{},"id":"118412","type":"SaveTool"},{"attributes":{"fill_color":{"value":"#2a2eec"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"118454","type":"VBar"},{"attributes":{"callback":null,"overlay":{"id":"118494","type":"BoxAnnotation"}},"id":"118369","type":"BoxSelectTool"},{"attributes":{"overlay":{"id":"118509","type":"BoxAnnotation"}},"id":"118405","type":"BoxZoomTool"},{"attributes":{"callback":null},"id":"118350","type":"DataRange1d"},{"attributes":{"ticks":[0,1,2,3]},"id":"118477","type":"FixedTicker"},{"attributes":{},"id":"118488","type":"UnionRenderers"}],"root_ids":["118516"]},"title":"Bokeh Application","version":"1.4.0"}}';
                  var render_items = [{"docid":"83cb9f44-5640-46ec-a201-2c50d884d954","roots":{"118516":"808d6d50-7046-4faa-85f7-72ca89660a31"}}];
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