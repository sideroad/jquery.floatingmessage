(function( $ ) {

module( "floatingmessage" );

asyncTest( "top-left", function() {
    expect( 12 );
    var elem1 = $( "#fms1" ).floatingMessage({
            duration : 100
        }),
        fms1 = elem1.parent( ".ui-floating-message" ),
        elem2 = $( "#fms2" ).floatingMessage({
            duration : 200
        }),
        fms2 = elem2.parent( ".ui-floating-message" );

    setTimeout(function( ){
        ok( fms1.is(":visible") );
        equals( fms1.css("top"), "10px");
        equals( fms1.css("bottom"), "auto");
        equals( fms1.css("left"), "10px");
        equals( fms1.css("right"), "auto");
        setTimeout(function( ){
            elem1.trigger("click");
            setTimeout(function(){
                ok( fms1.is(":hidden") );
            }, 125 );
        }, 125);    
    }, 125);
    
    setTimeout(function( ){
        ok( fms2.is(":visible") );
        equals( fms2.css("top"), "90px");
        equals( fms2.css("bottom"), "auto");
        equals( fms2.css("left"), "10px");
        equals( fms2.css("right"), "auto");
        setTimeout(function( ){
            elem2.trigger("click");
            setTimeout(function(){
                ok( fms2.is(":hidden") );
                start();
            }, 225 );
        }, 225);    
    }, 225);
});

asyncTest( "bottom-right", function() {
    expect( 12 );
    var elem1 = $( "#fms1" ).floatingMessage({
        position : "bottom-right",
            duration : 100
        }),
        fms1 = elem1.parent( ".ui-floating-message" ),
        elem2 = $( "#fms2" ).floatingMessage({
            position : "bottom-right",
            duration : 200
        }),
        fms2 = elem2.parent( ".ui-floating-message" );

    setTimeout(function( ){
        ok( fms1.is(":visible") );
        equals( fms1.css("top"), "auto");
        equals( fms1.css("bottom"), "10px");
        equals( fms1.css("left"), "auto");
        equals( fms1.css("right"), "10px");
        setTimeout(function( ){
            elem1.trigger("click");
            setTimeout(function(){
                ok( fms1.is(":hidden") );
            }, 125 );
        }, 125);    
    }, 125);
    
    setTimeout(function( ){
        ok( fms2.is(":visible") );
        equals( fms2.css("top"), "auto");
        equals( fms2.css("bottom"), "90px");
        equals( fms2.css("left"), "auto");
        equals( fms2.css("right"), "10px");
        setTimeout(function( ){
            elem2.trigger("click");
            setTimeout(function(){
                ok( fms2.is(":hidden") );
                start();
            }, 225 );
        }, 225);    
    }, 225);
});

asyncTest("animation" ,function(){
    expect( 2 );
    var elem1 = $.floatingMessage("String Message", {
            duration : 100,
            show : "puff",
            hide : "puff",
            stuffEasing : "easeInOutBack"
        }),
        fms1 = elem1.parent( ".ui-floating-message" );
    
    setTimeout(function( ){
        ok( fms1.is(":visible") );
        setTimeout(function( ){
            elem1.trigger("click");
            setTimeout(function(){
                ok( fms1.is(":hidden") );
                start();
            }, 125 );
        }, 125);    
    }, 125);
});

asyncTest("string message" ,function(){
    expect( 2 );
    var elem1 = $.floatingMessage("String Message", {
            duration : 100
        }),
        fms1 = elem1.parent( ".ui-floating-message" );
    
    setTimeout(function( ){
        ok( fms1.is(":visible") );
        setTimeout(function( ){
            elem1.trigger("click");
            setTimeout(function(){
                ok( fms1.is(":hidden") );
                start();
            }, 125 );
        }, 125);    
    }, 125);
});

asyncTest( "destroy method", function() {
    expect( 2 );
    var elem1 = $( "#fms1" ).floatingMessage( {
            duration : 100
        } ),
        fms1 = elem1.parent( ".ui-floating-message" );

    setTimeout(function( ){
        ok( fms1.is(":visible") );
        elem1.floatingMessage("destroy");
        setTimeout(function( ){
            ok( fms1.is(":hidden") );
            start( );
        }, 125);
    }, 125);
});

asyncTest( "time", function() {
    expect( 2 );
    var elem1 = $( "#fms1" ).floatingMessage( {
            duration : 100,
            time : 100
        } ),
        fms1 = elem1.parent( ".ui-floating-message" );

    setTimeout(function( ){
        ok( fms1.is(":visible") );
        setTimeout(function( ){
            ok( fms1.is(":hidden") );
            start( );
        }, 225);
    }, 125);
});

asyncTest( "close event", function() {
    expect( 3 );
    var elem1 = $( "#fms1" ).floatingMessage( {
            duration : 100,
            close : function(){
                ok( true );
            }
        } ),
        fms1 = elem1.parent( ".ui-floating-message" );

    setTimeout(function( ){
        ok( fms1.is(":visible") );
        elem1.trigger("click");
        setTimeout(function( ){
            ok( fms1.is(":hidden") );
            start( );
        }, 125);
    }, 125);
});

asyncTest( "click override", function() {
    expect( 3 );
    var elem1 = $( "#fms1" ).floatingMessage( {
            duration : 100,
            click : function( elem ){
                ok( 1 );
                $("#fms1").floatingMessage("destroy");
            }
        } ),
        fms1 = elem1.parent( ".ui-floating-message" );

    setTimeout(function( ){
        ok( fms1.is(":visible") );
        elem1.trigger("click");
        setTimeout(function( ){
            ok( fms1.is(":hidden") );
            start( );
        }, 125);
    }, 125);
});

}( jQuery ) );