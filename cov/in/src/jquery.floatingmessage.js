/* automatically generated by JSCoverage - do not edit */
if (typeof _$jscoverage === 'undefined') _$jscoverage = {};
if (! _$jscoverage['jquery.floatingmessage.js']) {
  _$jscoverage['jquery.floatingmessage.js'] = [];
  _$jscoverage['jquery.floatingmessage.js'][14] = 0;
  _$jscoverage['jquery.floatingmessage.js'][15] = 0;
  _$jscoverage['jquery.floatingmessage.js'][29] = 0;
  _$jscoverage['jquery.floatingmessage.js'][44] = 0;
  _$jscoverage['jquery.floatingmessage.js'][47] = 0;
  _$jscoverage['jquery.floatingmessage.js'][48] = 0;
  _$jscoverage['jquery.floatingmessage.js'][49] = 0;
  _$jscoverage['jquery.floatingmessage.js'][50] = 0;
  _$jscoverage['jquery.floatingmessage.js'][51] = 0;
  _$jscoverage['jquery.floatingmessage.js'][54] = 0;
  _$jscoverage['jquery.floatingmessage.js'][55] = 0;
  _$jscoverage['jquery.floatingmessage.js'][56] = 0;
  _$jscoverage['jquery.floatingmessage.js'][57] = 0;
  _$jscoverage['jquery.floatingmessage.js'][66] = 0;
  _$jscoverage['jquery.floatingmessage.js'][67] = 0;
  _$jscoverage['jquery.floatingmessage.js'][68] = 0;
  _$jscoverage['jquery.floatingmessage.js'][69] = 0;
  _$jscoverage['jquery.floatingmessage.js'][70] = 0;
  _$jscoverage['jquery.floatingmessage.js'][74] = 0;
  _$jscoverage['jquery.floatingmessage.js'][75] = 0;
  _$jscoverage['jquery.floatingmessage.js'][84] = 0;
  _$jscoverage['jquery.floatingmessage.js'][85] = 0;
  _$jscoverage['jquery.floatingmessage.js'][106] = 0;
  _$jscoverage['jquery.floatingmessage.js'][107] = 0;
  _$jscoverage['jquery.floatingmessage.js'][108] = 0;
  _$jscoverage['jquery.floatingmessage.js'][109] = 0;
  _$jscoverage['jquery.floatingmessage.js'][111] = 0;
  _$jscoverage['jquery.floatingmessage.js'][112] = 0;
  _$jscoverage['jquery.floatingmessage.js'][114] = 0;
  _$jscoverage['jquery.floatingmessage.js'][120] = 0;
  _$jscoverage['jquery.floatingmessage.js'][121] = 0;
  _$jscoverage['jquery.floatingmessage.js'][123] = 0;
  _$jscoverage['jquery.floatingmessage.js'][124] = 0;
  _$jscoverage['jquery.floatingmessage.js'][125] = 0;
  _$jscoverage['jquery.floatingmessage.js'][128] = 0;
  _$jscoverage['jquery.floatingmessage.js'][129] = 0;
  _$jscoverage['jquery.floatingmessage.js'][130] = 0;
  _$jscoverage['jquery.floatingmessage.js'][131] = 0;
  _$jscoverage['jquery.floatingmessage.js'][134] = 0;
  _$jscoverage['jquery.floatingmessage.js'][135] = 0;
  _$jscoverage['jquery.floatingmessage.js'][136] = 0;
  _$jscoverage['jquery.floatingmessage.js'][137] = 0;
  _$jscoverage['jquery.floatingmessage.js'][140] = 0;
  _$jscoverage['jquery.floatingmessage.js'][142] = 0;
  _$jscoverage['jquery.floatingmessage.js'][143] = 0;
  _$jscoverage['jquery.floatingmessage.js'][145] = 0;
  _$jscoverage['jquery.floatingmessage.js'][146] = 0;
  _$jscoverage['jquery.floatingmessage.js'][150] = 0;
  _$jscoverage['jquery.floatingmessage.js'][151] = 0;
  _$jscoverage['jquery.floatingmessage.js'][152] = 0;
  _$jscoverage['jquery.floatingmessage.js'][153] = 0;
  _$jscoverage['jquery.floatingmessage.js'][155] = 0;
  _$jscoverage['jquery.floatingmessage.js'][156] = 0;
  _$jscoverage['jquery.floatingmessage.js'][157] = 0;
}
_$jscoverage['jquery.floatingmessage.js'][14]++;
(function ($) {
  _$jscoverage['jquery.floatingmessage.js'][15]++;
  var ranges = {"top-left": 10, "top-right": 10, "bottom-left": 10, "bottom-right": 10}, align = 10, container = {"top-left": [], "top-right": [], "bottom-left": [], "bottom-right": []}, remove = (function (elem) {
  _$jscoverage['jquery.floatingmessage.js'][29]++;
  var i, id = elem.attr("id"), options = elem.data("floating-message"), animate = {}, deleteIndex = 0, range = options.range, position = options.position, duration = options.duration, stuffEasing = options.stuffEasing, hide = options.hide, close = options.close, timerId = options.timerId, distance = options.height + options.margin + (options.padding * 2), list = container[options.position];
  _$jscoverage['jquery.floatingmessage.js'][44]++;
  if (timerId) {
    _$jscoverage['jquery.floatingmessage.js'][44]++;
    clearTimeout(timerId);
  }
  _$jscoverage['jquery.floatingmessage.js'][47]++;
  for (i = 0; i < list.length; i++) {
    _$jscoverage['jquery.floatingmessage.js'][48]++;
    options = list[i];
    _$jscoverage['jquery.floatingmessage.js'][49]++;
    if (id == options.id) {
      _$jscoverage['jquery.floatingmessage.js'][50]++;
      deleteIndex = i;
      _$jscoverage['jquery.floatingmessage.js'][51]++;
      continue;
    }
    _$jscoverage['jquery.floatingmessage.js'][54]++;
    if (options.range > range) {
      _$jscoverage['jquery.floatingmessage.js'][55]++;
      options.range -= distance;
      _$jscoverage['jquery.floatingmessage.js'][56]++;
      animate[options.verticalAlign] = options.range;
      _$jscoverage['jquery.floatingmessage.js'][57]++;
      options.elem.stop().animate(animate, {duration: duration, easing: stuffEasing, queue: false});
    }
}
  _$jscoverage['jquery.floatingmessage.js'][66]++;
  list.splice(deleteIndex, 1);
  _$jscoverage['jquery.floatingmessage.js'][67]++;
  ranges[position] -= distance;
  _$jscoverage['jquery.floatingmessage.js'][68]++;
  elem.stop().hide(hide, duration, (function () {
  _$jscoverage['jquery.floatingmessage.js'][69]++;
  $(this).remove();
  _$jscoverage['jquery.floatingmessage.js'][70]++;
  if (close) {
    _$jscoverage['jquery.floatingmessage.js'][70]++;
    close();
  }
}));
});
  _$jscoverage['jquery.floatingmessage.js'][74]++;
  $.floatingMessage = (function (message, options) {
  _$jscoverage['jquery.floatingmessage.js'][75]++;
  var id = "jqueryFloatingMessage" + new Date().getTime() + "" + parseInt(Math.random() * 10000, 10), elem = $("<div id=\"" + id + "\" class=\"ui-widget-content ui-corner-all ui-floating-message\"></div>"), css = {}, height = 0, padding = 0, open;
  _$jscoverage['jquery.floatingmessage.js'][84]++;
  options = options || {};
  _$jscoverage['jquery.floatingmessage.js'][85]++;
  options = $.extend(true, {position: "top-left", verticalAlign: (options.position || "top-left").split("-")[0], align: (options.position || "top-left").split("-")[1], width: 300, height: 50, time: false, show: "drop", hide: "drop", padding: 10, margin: 10, duration: 500, stuffEasing: "easeOutBounce", body: $("<div></div>"), open: false, close: false, click: remove, elem: elem, timerId: false, id: id}, options);
  _$jscoverage['jquery.floatingmessage.js'][106]++;
  options.range = ranges[options.position];
  _$jscoverage['jquery.floatingmessage.js'][107]++;
  height = options.height;
  _$jscoverage['jquery.floatingmessage.js'][108]++;
  padding = options.padding;
  _$jscoverage['jquery.floatingmessage.js'][109]++;
  open = options.open;
  _$jscoverage['jquery.floatingmessage.js'][111]++;
  if (message) {
    _$jscoverage['jquery.floatingmessage.js'][111]++;
    options.body.html(message.replace(/\n/g, "<br />"));
  }
  _$jscoverage['jquery.floatingmessage.js'][112]++;
  if (options.className) {
    _$jscoverage['jquery.floatingmessage.js'][112]++;
    elem.addClass(options.className);
  }
  _$jscoverage['jquery.floatingmessage.js'][114]++;
  css = {width: options.width + "px", height: height + "px", position: "fixed", padding: padding + "px"};
  _$jscoverage['jquery.floatingmessage.js'][120]++;
  css[options.verticalAlign] = ranges[options.position];
  _$jscoverage['jquery.floatingmessage.js'][121]++;
  css[options.align] = align;
  _$jscoverage['jquery.floatingmessage.js'][123]++;
  elem.css(css).append(options.body);
  _$jscoverage['jquery.floatingmessage.js'][124]++;
  elem.bind("destroy.fms", (function () {
  _$jscoverage['jquery.floatingmessage.js'][125]++;
  remove(elem);
}));
  _$jscoverage['jquery.floatingmessage.js'][128]++;
  $(document.body).append(elem);
  _$jscoverage['jquery.floatingmessage.js'][129]++;
  if (options.click) {
    _$jscoverage['jquery.floatingmessage.js'][130]++;
    elem.bind("click.fms", (function () {
  _$jscoverage['jquery.floatingmessage.js'][131]++;
  options.click(elem);
}));
  }
  _$jscoverage['jquery.floatingmessage.js'][134]++;
  elem.show(options.show, options.duration, (function () {
  _$jscoverage['jquery.floatingmessage.js'][135]++;
  if (options.time) {
    _$jscoverage['jquery.floatingmessage.js'][136]++;
    options.timerId = setTimeout((function () {
  _$jscoverage['jquery.floatingmessage.js'][137]++;
  options.click(elem);
}), options.time);
  }
  _$jscoverage['jquery.floatingmessage.js'][140]++;
  if (open) {
    _$jscoverage['jquery.floatingmessage.js'][140]++;
    open();
  }
}));
  _$jscoverage['jquery.floatingmessage.js'][142]++;
  container[options.position].push(options);
  _$jscoverage['jquery.floatingmessage.js'][143]++;
  ranges[options.position] += (height + options.margin + (padding * 2));
  _$jscoverage['jquery.floatingmessage.js'][145]++;
  elem.data("floating-message", options);
  _$jscoverage['jquery.floatingmessage.js'][146]++;
  return options.body;
});
  _$jscoverage['jquery.floatingmessage.js'][150]++;
  $.fn.floatingMessage = (function (options) {
  _$jscoverage['jquery.floatingmessage.js'][151]++;
  return this.each((function () {
  _$jscoverage['jquery.floatingmessage.js'][152]++;
  if (typeof options == "string") {
    _$jscoverage['jquery.floatingmessage.js'][153]++;
    $(this).parent(".ui-floating-message").trigger(options + ".fms");
  }
  else {
    _$jscoverage['jquery.floatingmessage.js'][155]++;
    options = options || {};
    _$jscoverage['jquery.floatingmessage.js'][156]++;
    options.body = this;
    _$jscoverage['jquery.floatingmessage.js'][157]++;
    $.floatingMessage(false, options);
  }
}));
});
})(jQuery);
_$jscoverage['jquery.floatingmessage.js'].source = ["/*!"," * Floating Message v1.0.3"," * http://sideroad.secret.jp/"," *"," * Copyright (c) 2009 sideroad"," *"," * Dual licensed under the MIT or GPL Version 2 licenses."," * Date: 2009-08-18"," * "," * @author sideroad"," * @require jQuery, jQueryUI"," * "," */","( function( $ ) {","    var ranges = {","            \"top-left\" : 10,","            \"top-right\" : 10,","            \"bottom-left\" : 10,","            \"bottom-right\" : 10","        },","        align = 10,","        container = {","\t\t    \"top-left\" : [],","\t\t    \"top-right\" : [],","\t\t    \"bottom-left\" : [],","\t\t    \"bottom-right\" : []","        },","        remove = function( elem ) {","            var  i,","                id = elem.attr(\"id\"),","                options = elem.data(\"floating-message\"),","                animate = {},","                deleteIndex = 0,","                range = options.range,","                position = options.position,","                duration = options.duration,","                stuffEasing = options.stuffEasing,","                hide = options.hide,","                close = options.close,","                timerId = options.timerId,","                distance = options.height + options.margin + ( options.padding * 2 ) ,","                list = container[options.position];","","            if ( timerId ) clearTimeout( timerId );","             ","            // manipulation same position message ","            for ( i = 0; i &lt; list.length; i++ ) {","                options = list[i];","                if ( id == options.id ) {","                    deleteIndex = i;","                    continue;","                }","                ","                if ( options.range &gt; range ) {","                    options.range -= distance;","                    animate[options.verticalAlign] = options.range;","                    options.elem.stop().animate( animate, {","                        duration : duration,","                        easing : stuffEasing,","                        queue : false","                    } );","                }","            }","            ","            // delete message","            list.splice( deleteIndex, 1 );","            ranges[position] -= distance;","            elem.stop().hide( hide, duration, function() {","                $( this ).remove();","                if ( close ) close();","            } );","        };","","    $.floatingMessage = function( message, options ) {","        var id = \"jqueryFloatingMessage\" + new Date().getTime() + \"\" + parseInt( Math.random() * 10000, 10 ),","            elem = $( '&lt;div id=\"'+id+'\" class=\"ui-widget-content ui-corner-all ui-floating-message\"&gt;&lt;/div&gt;' ),","            css = {},","            height = 0,","            padding = 0,","            open;","        ","","        // default setting","        options = options || {};","        options = $.extend( true, {","            position : \"top-left\",","            verticalAlign : (options.position || \"top-left\").split(\"-\")[0],","            align : (options.position || \"top-left\").split(\"-\")[1],","            width : 300,","            height : 50,","            time : false,","            show : \"drop\",","            hide : \"drop\",","            padding : 10,","            margin : 10,","            duration : 500,","            stuffEasing : \"easeOutBounce\",","            body : $( \"&lt;div&gt;&lt;/div&gt;\" ),","            open : false,","            close : false,","            click : remove,","            elem : elem,","            timerId : false,","            id : id","        }, options );","        options.range = ranges[options.position];","        height = options.height;","        padding = options.padding;","        open = options.open;","","        if ( message ) options.body.html( message.replace( /\\n/g, \"&lt;br /&gt;\" ) );","        if ( options.className ) elem.addClass(options.className);","","        css = {","            width : options.width + \"px\",","            height : height + \"px\",","            position : \"fixed\",","            padding : padding + \"px\"","        };","        css[options.verticalAlign] = ranges[options.position];","        css[options.align] = align;","        ","        elem.css( css ).append( options.body );","        elem.bind( \"destroy.fms\", function(){ ","            remove( elem );","        } );","","        $( document.body ).append( elem );","        if ( options.click ) {","            elem.bind( \"click.fms\", function(){","                options.click( elem );","            } );","        }","        elem.show( options.show, options.duration,function(){","            if ( options.time ) {","                    options.timerId = setTimeout( function(){","                        options.click( elem );","                    }, options.time );","            }","            if(open) open();","        } );","        container[options.position].push( options );","        ranges[options.position] += ( height + options.margin + ( padding * 2 ) );","        ","        elem.data( \"floating-message\", options );","        return options.body;","","    };","","    $.fn.floatingMessage = function( options ) {","        return this.each( function() {","            if ( typeof options == \"string\" ) {","                $( this ).parent(\".ui-floating-message\").trigger( options+\".fms\" );","            } else {","                options = options || {};","                options.body = this;","                $.floatingMessage( false, options );","            }","        } );","    };","} )( jQuery );"];
