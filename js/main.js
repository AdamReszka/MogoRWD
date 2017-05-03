$(document).ready(initAll);

function initAll() {
  setHeight();
  startParallax();
}

function setHeight() {
  $('#sec1-landing').height($(window).innerHeight());
}

function startParallax() {
  $('.parallax-window').parallax({imageSrc: '../images/sec1-main-photo.png'});
}
