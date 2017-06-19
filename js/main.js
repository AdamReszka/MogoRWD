$(document).ready(initAll);

function initAll() {
  setHeight();
  startParallax();
  setNumbers();
  iconAnimating();
  serviceDropdown();
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

function iconAnimating() {
  $('.serv-link').hover(function(){
    $(this).find('.serv-icon').addClass('bounce');
  });
  $('.serv-link').mouseleave(function(){
    $(this).find('.serv-icon').removeClass('bounce');
  });

}

function serviceDropdown(){
  $('#sd-photography').addClass('sd-extended');
  $('.sd-arrow').on('click', function(){
    if($(this).closest('.sd-dropcont').hasClass('sd-extended')){
      $(this).css('background-image','url("../images/sec6-arrow-down.png")');
      $(this).closest('.sd-dropcont').removeClass('sd-extended');

    }else{
      $('.sd-arrow').css('background-image','url("../images/sec6-arrow-down.png")');
      $(this).css('background-image','url("../images/sec6-arrow-up.png")');
      $('.sd-dropcont').removeClass('sd-extended');
      $(this).closest('.sd-dropcont').addClass('sd-extended');

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
