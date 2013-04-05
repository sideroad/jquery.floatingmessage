(function( $ ) {

module( "floatingmessage" );

asyncTest( "top-left", function() {
    expect( 12 );
    var elem1 = $( "#fms1" ).floatingMessage({
            duration : 100,
            open : function(){
                ok( fms1.is(":visible") );
                equal( fms1.css("left"), "10px");
                equal( fms1.css("top"), "10px");
                notEqual( fms1.css("right"), "10px");
                notEqual( fms1.css("bottom"), "10px");
            },
            close : function(){
                ok( fms1.is(":hidden") );    
                elem2.trigger("click");            
            }
        }),
        fms1 = elem1.parent( ".ui-floating-message" ),
        elem2 = $( "#fms2" ).floatingMessage({
            duration : 200,
            open : function(){
                ok( fms2.is(":visible") );
                equal( fms2.css("left"), "10px");
                equal( fms2.css("top"), "90px");
                notEqual( fms2.css("right"), "10px");
                notEqual( fms2.css("bottom"), "10px");
                elem1.trigger("click");
            },
            close : function(){
                ok( fms2.is(":hidden") );
                start();
            }
        }),
        fms2 = elem2.parent( ".ui-floating-message" );

});

asyncTest( "bottom-right", function() {
    expect( 12 );
    var elem1 = $( "#fms1" ).floatingMessage({
            position : "bottom-right",
            duration : 100,
            open : function(){
                ok( fms1.is(":visible") );
                notEqual( fms1.css("left"), "10px");
                notEqual( fms1.css("top"), "10px");
                equal( fms1.css("right"), "10px");
                equal( fms1.css("bottom"), "10px");
            },
            close : function(){
                ok( fms1.is(":hidden") );    
                elem2.trigger("click");            
            }
        }),
        fms1 = elem1.parent( ".ui-floating-message" ),
        elem2 = $( "#fms2" ).floatingMessage({
            position : "bottom-right",
            duration : 200,
            open : function(){
                ok( fms2.is(":visible") );
                notEqual( fms2.css("left"), "10px");
                notEqual( fms2.css("top"), "10px");
                equal( fms2.css("right"), "10px");
                equal( fms2.css("bottom"), "90px");
                elem1.trigger("click");
            },
            close : function(){
                ok( fms2.is(":hidden") );
                start();
            }
        }),
        fms2 = elem2.parent( ".ui-floating-message" );

});

asyncTest("animation" ,function(){
    expect( 2 );
    var elem1 = $("#fms1").floatingMessage( {
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

asyncTest("add class" ,function(){
    expect( 3 );
    var elem1 = $("#fms1").floatingMessage( {
            duration : 100,
            className : "ui-state-error"
        }),
        fms1 = elem1.parent( ".ui-floating-message" );
    
    setTimeout(function( ){
        ok( fms1.is(":visible") );
        ok( fms1.hasClass("ui-state-error") );
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