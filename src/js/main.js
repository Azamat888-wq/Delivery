$(document).ready(function(){
  // slider script
  var owl = $('.owl-carousel');
  owl.owlCarousel({
    loop: true
  
  });
  // Go to the next item
  $('.customNextBtn').click(function() {
      owl.trigger('next.owl.carousel');
  })
  // Go to the previous item
  $('.customPrevBtn').click(function() {
      // With optional speed parameter
      // Parameters has to be in square bracket '[]'
      owl.trigger('prev.owl.carousel', [300]);
  })
  //the end of the slider script
  $('ul.menu__caption').on('click', 'li:not(.active)', function() {
    $(this)
      .addClass('menu__btn_active').siblings().removeClass('menu__btn_active')
      .closest('div.menu__tabs').find('div.menu__content').removeClass('menu__content_active').eq($(this).index()).addClass('menu__content_active');
  });

  $('.text_more-btn').on('click',function() {
  $('.text').toggleClass('text_hidden')
  if($(".text_more-btn").text() == 'See More...'){
      $('.text_more-btn').text('hide')
  } else {
      $('.text_more-btn').text('See More')
  }
})

$('.support__order-btn').on('click', function(){
  $('.overlay').fadeIn(1000)
  $('order-popup__form').fadeIn(1000)
})

$('.close').on('click', function(){
  $('overlay').fadeOut(1000)
  $('order-popup__form').fadeOut(1000)
  $('end').fadeOut(1000)
})

$('.order-popup__btn').on('click', function(e){
  e.preventDefault()
  $('.overlay').fadeOut(1000)

})

$('.order-popup__btn').on('click', function(e){
  e.preventDefault()
  $('.order-popup__form').fadeOut(10)
  $('end').fadeIn(10)
})

});