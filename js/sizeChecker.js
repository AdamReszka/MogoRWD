$(document).bind('keypress', function(event){
  if( event.which === 113 && event.ctrlKey ){

  var wWidth = $(window).width();
  var wHeight = $(window).height();
  var pStyle = '<p style="font-size: 24px; color: #0199af;'+
  'font-family:Consolas;'+
  '">';
  var outSource = pStyle+wWidth+'px'+' x '+wHeight+'px'+'</p>';
  var w = window.open('','','width=220, height=80');
  $(w.document.body).css('background-color','black');
  $(w.document.body).html(outSource);
  $(window).resize(function(){
    wWidth = $(window).width();
    wHeight = $(window).height();
    outSource = pStyle+wWidth+'px'+' x '+wHeight+'px'+'</p>';
    $(w.document.body).html(outSource);
  });


}
});
