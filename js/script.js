/* js file */

(function( window, undefined ){

})( window, undefined );

$( function(){
    //NOTES: The animations are controlled with CSS and media queries
    //All that this program does is add and remove the "cat_nav_state"
    //class from the body. It also turn off and on the events that allow the class
    //to be added and removed. You'll learn a lot about what is going on by reading the css.
    //I've intentionally kept styling to a minimum so that you don't confuse what is causing the 
    //animation and any other arbitrary styling

    //the button that is pressed to open the offscreen nav
    var $menu_icon = $( ".menu_icon" );
    
    //the offscreen nav links
    var $links     = $( ".main_navigation ul a" );

    //the back button that closes the offscreen nav
    var $back      = $( ".backbutton" );

    //the page body
    var $body      = $( "body" );

    //the breakpoint between desktop and mobile
    var breakpoint = 1000;

    //a boolean that stores whether or not the offscreen nav is active
    var isOn       = false;

    //turns on the offscreen nav.
    //basically sets up the events that listen for the menu button clicks
    //to show and hide the offscreen nav
    var on = function(){

        //if is already on, do nothing. skip the rest of the function.
        if( isOn ){ return false; }

        //opens the offscreen nav
        $menu_icon.on( "click", function( e ){

            $body.addClass( "cat_nav_state" );
            e.preventDefault();
        } );

        //closes the offscreen nav
        $links.on( "click", function( e ){

            $body.removeClass( "cat_nav_state" );
        } );

        //closed the offscreen nav
        $back.on( "click", function( e ){

            $body.removeClass( "cat_nav_state" );
            e.preventDefault();
        } );

        //after the events are created, set the isOn veriable to true
        isOn = true;
        return isOn;
    };

    //turns off the offscreen nav events.
    var off = function(){

        //if is already off, do nothign
        if( !isOn ){ return false; }

        $menu_icon.off( "click" );
        $links.off( "click" );
        $back.off( "click" );
        $body.removeClass( "cat_nav_state" );

        //set to off
        isOn = false;
        return isOn;
    };

    //listens for when the windwo resizes or reloads and
    //checks the to see if the screen is a mobile size
    $( window ).on( "resize load", function( e ){

        //checks the width of the screen and either turns on the
        //menu events or turns them off
        if( $( this ).width() < breakpoint ){
        
            on();
            return true;
        }
        else{
        
            off();
            return false;
        }
    } );
} );


$(window).scroll(function () { 

// distance from top of footer to top of document
footertotop = ($('#footer').position().top);
// distance user has scrolled from top, adjusted to take in height of sidebar (570 pixels inc. padding)
scrolltop = $(document).scrollTop()+500;
// difference between the two
difference = scrolltop-footertotop;

// if user has scrolled further than footer,
// pull sidebar up using a negative margin

if (scrolltop > footertotop) {

$('#cart').css('margin-top',  0-difference);
}

else  {
$('#cart').css('margin-top', 0);
}


});