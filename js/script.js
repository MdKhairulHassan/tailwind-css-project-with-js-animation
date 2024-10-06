//  =======================================================================================
$(window).scroll(function () {
  let scrolling = $(this).scrollTop();
  if (scrolling > 60) {
    $('.navbarone').addClass('sticky_header');
  }
  else {
    $('.navbarone').removeClass('sticky_header');
  }
});
//  =======================================================================================


//==== Back-to-top button
  $(window).on('scroll', function(event) {
    if($(this).scrollTop() > 400){
        $('.back-to-top').fadeIn(200)
    } else{
        $('.back-to-top').fadeOut(200)
    }
});
//==== Animate the scroll to top
$('.back-to-top').on('click', function(event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: 0,
    }, 1000);
});
//  =======================================================================================


//  =======================================================================================
AOS.init();
//  =======================================================================================


//  =======================================================================================
var wow = new WOW(
  {
    boxClass:     'wow',      // animated element css class (default is wow)
    animateClass: 'animated', // animation css class (default is animated)
    offset:       0,          // distance to the element when triggering the animation (default is 0)
    mobile:       true,       // trigger animations on mobile devices (default is true)
    live:         true,       // act on asynchronously loaded content (default is true)
    callback:     function(box) {
      // the callback is fired every time an animation is started
      // the argument that is passed in is the DOM node being animated
    },
    scrollContainer: null,    // optional scroll container selector, otherwise use window,
    resetAnimation: true,     // reset animation on end (default is true)
  }
)
wow.init()
//  =======================================================================================
