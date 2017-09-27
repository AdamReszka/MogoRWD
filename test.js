function burgerPositions(){


  jQuery('.header-drop-arrow').on('click', function(){
    if(!jQuery(this).hasClass('drop-open')){
      jQuery('.header-drop-arrow').each(
        function(){
          jQuery(this).removeClass('drop-open');
          jQuery(this).closest('.burger-menu-item').find('.bmi-list').addClass('burger-close');
        }
      );
      jQuery(this).addClass('drop-open');
      jQuery(this).closest('.burger-menu-item').find('.bmi-list').removeClass('burger-close');


    }
    else if(jQuery(this).hasClass('drop-open')){
      jQuery(this).removeClass('drop-open');
      jQuery(this).closest('.burger-menu-item').find('.bmi-list').addClass('burger-close');
    }

  }
   );

}
