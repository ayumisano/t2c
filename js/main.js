document.querySelector('.toggle_menu').addEventListener('click', () => {
  document.querySelector('.toggle_menu').classList.toggle('active');
  document.querySelector('header').classList.toggle('active');
  document.querySelector('nav').classList.toggle('active');
  document.querySelector('.gNav_list').classList.toggle('active');
});

$(function () {
  $(window).on('load scroll', function () {
    $('.animation').each(function () {
      var target = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var height = $(window).height();
      if (scroll > target - height) {
        $(this).addClass('fadeIn');
      }
    });
  });
});

$(function () {
  var pageTop = $('.btn_scroll');
  pageTop.click(function () {
    $('body, html').animate({ scrollTop: 0 }, 500);
    return false;
  });
});
