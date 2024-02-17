// ------Slick Slider---------

$('.banner_slider').slick({
      // centerMode: true,
      // centerPadding: '60px',
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      // dots: false,
      infinite: true,
      autoplay: true,
      speed: 1000,
      fade: true,
      cssEase: 'linear',
      autoplaySpeed: 3000,
      asNavFor: '.banner_mockup_slider'
});

$('.banner_mockup_slider').slick({
      // centerMode: true,
      // centerPadding: '60px',
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      // dots: false,
      infinite: true,
      autoplay: true,
      speed: 1000,
      fade: true,
      cssEase: 'linear',
      autoplaySpeed: 3000,
      asNavFor: '.banner_slider'
});

// order slider
$('.main_slider').slick({
      centerMode: true,
      centerPadding: '60px',
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      dots: false,
      infinite: true,
      autoplay: true,
      speed: 600,
      fade: true,
      cssEase: 'linear',
      autoplaySpeed: 3000,
      asNavFor: '.instruction_slide'
});

$('.instruction_slide').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  asNavFor: '.main_slider, .float_slide',
  arrows: false,
  dots: true,
  centerMode: true,
  focusOnSelect: true
});

$('.float_slide').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  asNavFor: '.instruction_slide',
  arrows: false,
  dots: false,
  // centerMode: true,
  // focusOnSelect: true,
  // infinite: true,
  autoplay: true,
  speed: 600,
  fade: true,
  // cssEase: 'linear',
  // autoplaySpeed: 3000,
});



// ------Slick Slider---------

// -----Scroll to top button------

let mybutton = document.getElementById("btn-back-to-top");
window.onscroll = function () {
  scrollFunction();
};
function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
mybutton.addEventListener("click", backToTop);
function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// -----Scroll to top button------

// -----Banner Left Video------

// var video = document.getElementById('slowVideo');
// video.playbackRate = 0.8;
// video.addEventListener('ended', function() {
//   video.currentTime = 0; 
//   video.play();
// });
// video.play();

// -----Banner Left Video------

$(document).ready(function() {
  $('a[href*=#]').bind('click', function(e) {
      e.preventDefault(); // prevent hard jump, the default behavior

      var target = $(this).attr("href"); // Set the target as variable

      // perform animated scrolling by getting top-position of target-element and set it as scroll target
      $('html, body').stop().animate({
          scrollTop: $(target).offset().top
      }, 600, function() {
          location.hash = target; //attach the hash (#jumptarget) to the pageurl
      });

      return false;
  });
});

$(window).scroll(function() {
  var scrollDistance = $(window).scrollTop();

  // Show/hide menu on scroll
  //if (scrollDistance >= 850) {
  //		$('nav').fadeIn("fast");
  //} else {
  //		$('nav').fadeOut("fast");
  //}

  // Assign active class to nav links while scolling
  $('.page-section').each(function(i) {
      if ($(this).position().top <= scrollDistance) {
          $('.navigation a.active').removeClass('active');
          $('.navigation a').eq(i).addClass('active');
      }
  });
}).scroll();
