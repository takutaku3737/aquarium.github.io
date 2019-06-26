$(function(){

  $('.top-wrapper').bgSwitcher({
    images: ['https://www.pakutaso.com/shared/img/thumb/tokunoshimaP6040066_TP_V1.jpg','https://www.pakutaso.com/shared/img/thumb/SAYA1913040_TP_V1.jpg','https://www.pakutaso.com/shared/img/thumb/KAZ19112B003_TP_V1.jpg','https://www.pakutaso.com/shared/img/thumb/SHI_iwanouepengimure_TP_V.jpg'],
    interval: 7000,
    duration: 3000,
  });

  setInterval(function(){
    $('.top-scroll').animate({'paddingTop': '30px'}, 1500)
                    .animate({'paddingTop': '0'}, 1500);
  });

  $('.top-scroll').click(function(){
    var position = $('.situation').offset().top;
    $('html, body').animate({scrollTop: position});
  });

if(window.matchMedia("(min-width:1000px)").matches){
  $('.situation-choice').hover(
    function(){
      $(this).find('.situation-absolute').css({'background-color':'rgba(255, 255, 255, 1)', 'color':'rgb(10, 8, 89)'});
      $(this).find('img').css({'transform':'scale(1.1)', 'transition-duration':'0.5s'});
      $(this).css('overflow', 'hidden');
    },function(){
      $(this).find('.situation-absolute').css({'background-color':'rgba(255, 255, 255, 0)', 'color':'white'});
      $(this).find('img').css('transform', 'scale(1)')
    }
  );
}

  $('.news-article').hover(
    function(){
      $(this).css('opacity', '0.6')
    },function(){
      $(this).css('opacity', '1')
    }
  );

  setInterval(function(){
    $('.ticket-i').animate({'paddingLeft': '6px'},1500)
                  .animate({'paddingLeft': '0'},1500)
  });

  $('.ticket-buy').hover(
    function(){
      $(this).css('opacity', '0.6')
    },function(){
      $(this).css('opacity', '1')
    }
  );

  $('.footer-scroll').click(function(){
    $('html, body').animate({scrollTop: 0});
  });

  $('.header-responsive').click(function(){
    if($('.header-responsive').hasClass('open')){
      $('.header-responsive-modal').fadeIn();
      $('.header-responsive').removeClass('open');
      $('.header-responsive').html('<i class="fas fa-times"></i>');
    }else{
      $('.header-responsive-modal').fadeOut();
      $('.header-responsive').addClass('open');
      $('.header-responsive').html('<i class="fas fa-bars"></i>');
    }
  });

});
