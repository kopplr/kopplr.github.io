$(document).ready(function(){


    
    //Animate main page images
    $('.my-img').mouseover(function(){
        $('p', this).animate({opacity:1});
        $('img', this).animate({opacity:0});
        
    }).mouseout(function(){
        $('p', this).animate({opacity:0});
        $('img', this).animate({opacity:1});
    })
        
    
    
    
    // animate.css function
    // http://www.telegraphicsinc.com/2013/07/how-to-use-animate-css/
    function animationHover(element, animation) {
        element = $(element);
        element.hover(
            function () {
                element.addClass('animated ' + animation);        
            },
            function () {
                //wait for animation to finish before removing classes
                window.setTimeout(function () {
                    
                    element.removeClass('animated ' + animation);
                    element.addClass('animated fadeIn');
                    
                }, 200);         
            });
    }

});
