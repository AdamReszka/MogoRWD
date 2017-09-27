$(document).ready(initAll);

function initAll() {
  navBurger();
  setHeight();
  startParallax();
  setNumbers();
  iconAnimating();
  serviceDropdown();
  startSlider();
  startSlider2();
  mapPin();
  hamburgerMenu();
  scrollBack();
  firstScroll();
  navigationScript();
}
function navBurger(){
	$('.hamburger-icon').click(function(){
		$(this).find('#nav-icon2').toggleClass('open');
	});
};

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
  $('#photography-desc').addClass('sd-extended');
  $('.sd-arrow').on('click', function(){
    if(!$('.sd-description').hasClass('sd-extended')){
      $(this).addClass('arrow-up');
      $(this).closest('.sd-dropcont').find('.sd-description').addClass('sd-extended');

    }else if($(this).closest('.sd-dropcont').find('.sd-description').hasClass('sd-extended')){
      $(this).closest('.sd-dropcont').find('.sd-description').removeClass('sd-extended');
      $(this).removeClass('arrow-up');

    }else if(!$(this).closest('.sd-dropcont').find('.sd-description').hasClass('sd-extended')
            && $('.sd-description').hasClass('sd-extended')){

              $('.sd-description').each(function(){
                $(this).removeClass('sd-extended');
                $('.sd-arrow').removeClass('arrow-up');
              });

                $(this).closest('.sd-dropcont').find('.sd-description').addClass('sd-extended');
                $(this).addClass('arrow-up');

    }else if(!$(this).closest('.sd-dropcont').find('.sd-description').hasClass('sd-extended')){
      $(this).closest('.sd-dropcont').find('.sd-description').addClass('sd-extended');
    }
  });
}


function startSlider() {
  timer1 = setInterval(function() {moveRightAuto();}, 12000);

  var slideCount = $('.customers-slider ul li').length;
  var slideWidth = $('.customers-slider ul li').width();
  var slideHeight = $('.customers-slider ul li').height();
  var sliderUlWidth = slideCount * slideWidth;
  $('.customers-slider').css({ width: slideWidth, height: slideHeight });
  $('.customers-slider ul').css({ width: sliderUlWidth, marginLeft: - slideWidth });
  $('.customers-slider ul li:last-child').prependTo('.customers-slider ul');

  function moveLeft() {
  $('.customers-slider ul').animate({
    left: + slideWidth
  }, 1200, function() {
    $('.customers-slider ul li:last-child').prependTo('.customers-slider ul');
    $('.customers-slider ul').css('left', '');
  });
};
function moveLeftAuto() {
  $('.customers-slider').animate({
    left: + slideWidth
  }, 1200, function() {
    $('.customers-slider ul li:last-child').prependTo('.customers-slider ul');
    $('.customers-slider ul').css('left', '');
  });
};
function moveRight() {
  $('.customers-slider ul').animate({
    left: - slideWidth
  }, 1200, function() {
    $('.customers-slider ul').css('left', '');
  });
};
function moveRightAuto() {
  $('.customers-slider ul').animate({
    left: - slideWidth
  }, 1200, function() {
    $('.customers-slider ul li:first-child').appendTo('.customers-slider ul');
    $('.customers-slider ul').css('left', '');
  });
};
$('#previous-slide').click(function() {
  console.log('to działa');
	$('.customers-slider ul').stop();
	moveLeft();
	clearInterval(timer1);
	timer1 = setInterval(function() {
		moveRightAuto();
	}, 12000);
});
$('#next-slide').click(function() {
	$('.customers-slider ul').stop();
	moveRightAuto();
	clearInterval(timer1);
	timer1 = setInterval(function() {
		moveRightAuto();
	}, 12000);
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
function startSlider2() {
  timer1 = setInterval(function() {moveRightAuto();}, 12000);

  var slideCount = $('.customers-slider2 ul li').length;
  var slideWidth = $('.customers-slider2 ul li').width();
  var slideHeight = $('.customers-slider2 ul li').height();
  var sliderUlWidth = slideCount * slideWidth;
  $('.customers-slider2').css({ width: slideWidth, height: slideHeight });
  $('.customers-slider2 ul').css({ width: sliderUlWidth, marginLeft: - slideWidth });
  $('.customers-slider2 ul li:last-child').prependTo('.customers-slider2 ul');

  function moveLeft() {
  $('.customers-slider2 ul').animate({
    left: + slideWidth
  }, 1200, function() {
    $('.customers-slider2 ul li:last-child').prependTo('.customers-slider2 ul');
    $('.customers-slider2 ul').css('left', '');
  });
};
function moveLeftAuto() {
  $('.customers-slider2').animate({
    left: + slideWidth
  }, 1200, function() {
    $('.customers-slider2 ul li:last-child').prependTo('.customers-slider2 ul');
    $('.customers-slider2 ul').css('left', '');
  });
};
function moveRight() {
  $('.customers-slider2 ul').animate({
    left: - slideWidth
  }, 1200, function() {
    $('.customers-slider2 ul').css('left', '');
  });
};
function moveRightAuto() {
  $('.customers-slider2 ul').animate({
    left: - slideWidth
  }, 1200, function() {
    $('.customers-slider2 ul li:first-child').appendTo('.customers-slider2 ul');
    $('.customers-slider2 ul').css('left', '');
  });
};
$('#previous-slide2').click(function() {
  console.log('to działa');
	$('.customers-slider2 ul').stop();
	moveLeft();
	clearInterval(timer1);
	timer1 = setInterval(function() {
		moveRightAuto();
	}, 12000);
});
$('#next-slide2').click(function() {
	$('.customers-slider2 ul').stop();
	moveRightAuto();
	clearInterval(timer1);
	timer1 = setInterval(function() {
		moveRightAuto();
	}, 12000);
});
}


function mapPin(){
  $('.map-box').hover(function(){
    $(this).find('.map-image').toggleClass('flip');
  });
}

function hamburgerMenu(){
  $('.hamburger-icon').on('click', function(){
    if(!$('.hamburger-menu').hasClass('burger-parameter')){
    $(this).closest('nav').find('.hamburger-menu').slideDown();
    $(this).closest('nav').find('.hamburger-menu').addClass('burger-parameter');
  }else{
    $(this).closest('nav').find('.hamburger-menu').slideUp();
    $(this).closest('nav').find('.hamburger-menu').removeClass('burger-parameter');
  }
  });
}

function firstScroll(){
  $('#scroll-down').on('click', function(){

    $("html, body").animate({ scrollTop: $('#sec2-about').offset().top }, 600);
    return false;
  });
}


function scrollBack(){
	$('#scroll-back-button').on('click', function(){
    	$("html, body").animate({ scrollTop: 0 }, 600);
    	return false;

    });

		var screenHeight = $(window).innerHeight();

        var NavY = $('#sec2-about').offset().top;
		var stickyNav = function(){
		var scrollY = $(window).scrollTop();
        var scrollYBottom = scrollY + screenHeight;
		if (scrollYBottom > NavY+300) {
			$('#scroll-back-button').addClass('scroll-back-flex');
		} else {
			$('#scroll-back-button').removeClass('scroll-back-flex');
		}
		};
		stickyNav();
		$(window).scroll(function() {
	  stickyNav();
	  }

  );
}

function navigationScript(){
  $('.navStarter').click(function(event){
  		event = event || window.event;
  		var sectionID = "sec" + event.currentTarget.id;
      $(this).closest('nav').find('.hamburger-menu').slideUp();
      $(this).closest('nav').find('.hamburger-menu').removeClass('burger-parameter');
      $(this).closest('nav').find('#nav-icon2').removeClass('open');
      $("html,body").animate({
  			scrollTop: $("#" + sectionID).offset().top
  		}, 1000)
  	});
}
