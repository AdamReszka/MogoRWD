$(document).ready(initAll);

function initAll() {
  setHeight();
  startParallax();
  setNumbers();
}

function setHeight() {
  $('#sec1-landing').height($(window).innerHeight());
}

function startParallax() {
  $('.parallax-window').parallax({imageSrc: 'images/sec1-main-photo.png'});
}

function setNumbers() {

  var eventFired = false;
  objectPositionTop = $('#numbersPosition').offset().top - $(window).height();
  $(window).on('scroll', function() {
    var currentPosition = $(document).scrollTop();
    if (currentPosition > objectPositionTop && eventFired === false) {
      eventFired = true;
      $('.timer').countTo();
    }
  });
}




//   var numsPos = $('#projects').offset().top - window.innerHeight;
//   var checkPos = function(){
//   var horison = $('body').scrollTop();
//   if (horison > numsPos) {
//     alert('ok');
//     console.log('ok');
//   }};
//   checkPos();
// }
