/*!
 * Floating Message v1.0.2
 * http://sideroad.secret.jp/
 *
 * Copyright (c) 2009 sideroad
 *
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * Date: 2009-08-18
 * 
 * @author sideroad
 * @require jQuery
 * 
 */
( function( $ ) {
    var ranges = {
            "top-left" : 10,
            "top-right" : 10,
            "bottom-left" : 10,
            "bottom-right" : 10
        },
        opt = {},
        align = 10,
        container = {
		    "top-left" : [],
		    "top-right" : [],
		    "bottom-left" : [],
		    "bottom-right" : []
        },
        remove = function( elem ) {
            var  i,
                id = elem.attr("id"),
                options = opt[id],
                animate = {},
                deleteIndex = 0,
                range = options.range,
                position = options.position,
                stuffEaseTime = options.stuffEaseTime,
                stuffEasing = options.stuffEasing,
                hide = options.hide,
                close = options.close,
                distance = options.height + options.margin + ( options.padding * 2 ) ,
                list = container[options.position];

            if ( options.timerId ) clearTimeout( options.timerId );
                
            for ( i = 0; i < list.length; i++ ) {
                options = list[i];
                if ( id === options.id ) {
                	    deleteIndex = i;
                	    continue;
                }
                if ( options.position == position && options.range > range ) {
                	options.range -= distance;
                    if ( options.range < 0 ) {
                    	options.range = 0;
                    }
                    animate[options.verticalAlign] = options.range;
                    options.elem.animate( animate, {
                        duration : stuffEaseTime,
                        easing : stuffEasing,
                        queue : false
                    } );
                }
            }
            list.splice( deleteIndex, 1 );
            delete opt[id];
            ranges[position] -= distance;
            if ( ranges[position] < 0 ) {
            	    ranges[position] = 10;
            }
            elem.hide( hide, function() {
                $( this ).remove();
                if ( close ) close();
            } );
        };

    $.floatingMessage = function( message, options ) {
        var id = "jqueryFloatingMessage" + new Date().getTime() + Math.random(),
            elem = $( '<div id="'+id+'" class="ui-widget-content ui-corner-all ui-floating-message"></div>' ),
            css = {};
        

        // default setting
        options = options || {};
        options = $.extend( true, {
        	    position : "top-left",
            verticalAlign : (options.position || "top-left").split("-")[0],
            align : (options.position || "top-left").split("-")[1],
            width : 300,
            height : 50,
            time : false,
            show : "drop",
            hide : "drop",
            padding : 10,
            margin : 10,
            stuffEaseTime : 500,
            stuffEasing : "easeOutBounce",
            body : $( "<div></div>" ),
            close : false,
            click : remove,
            elem : elem,
            timerId : false,
            id : id
        }, options );
        opt[id] = options;
        options.range = ranges[options.position];

        if ( message ) options.body.html( message.replace( /\n/g, "<br />" ) );
        if ( options.className ) elem.addClass(options.className);

        css = {
            width : options.width + "px",
            height : options.height + "px",
            position : "fixed",
            padding : options.padding + "px"
        };
        css[options.verticalAlign] = ranges[options.position];
        css[options.align] = align;
        
        elem.css( css ).append( options.body );

        if ( options.time ) {
        	    options.timerId = setTimeout( function(){
        	    		options.click( elem );
        	    	}, options.time );
        }
        if ( options.click ) {
        		elem.bind( "click.fms", function(){
        			options.click( elem );
        		} );
        }
        elem.bind( "destroy.fms", function(){ remove( elem );} );

        $( document.body ).append( elem );
        elem.show( options.show );
        container[options.position].push( options );
        ranges[options.position] += ( options.height + options.margin + ( options.padding * 2 ) );
        
        return options.body;

    };

    $.fn.floatingMessage = function( options ) {
        return this.each( function() {
            if ( typeof options == "string" ) {
                $( this ).parent(".ui-floating-message").trigger( options+".fms" );
            } else {
                options = options || {};
                options.body = this;
                $.floatingMessage( false, options );
            }
        } );
    };
} )( jQuery );