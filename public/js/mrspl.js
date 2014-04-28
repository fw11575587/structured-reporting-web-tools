$(function(){
  $('.ui.rating').rating({
    clearable: true
  });

  $('.menu .item').tab({history:false});

  $('#test_btn').click(function(){
    a1 = $('#disc-rating-l12').rating('get rating');
    // alert(a1);
  });

  $('.ui.button').on('click', function(){
    if ($(this).hasClass('active')) {
      $(this).removeClass('active');
    } else {
      $(this)
        .addClass('active')
        .siblings()
        .removeClass('active')
      ;
    }
  });
});