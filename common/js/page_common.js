/*===============================
スマホヘッダーメニュー
===============================*/
/* 開閉の設定 */
$(function(){
	$('#SPnaviBtn').click(function(){
		$(this).toggleClass('active');
		$('header nav').fadeToggle(200);
		$('body').toggleClass('menu_open');

		if($(this).hasClass("active")) { 
			$('.header_mail').attr('src','/common/img/sp_mail_btn.png'); 
			$('.header_logo').attr('src','/common/img/header_logo.png'); 
		} else { 
			$('.header_mail').attr('src','/common/img/sp_mail_btn_black.png'); 
			$('.header_logo').attr('src','/common/img/header_logo_kasou.png');
		}
		
	});

	$('header nav a, #sp_menu_close a').click(function(){
		$('header nav').fadeOut(100);
		$('#SPnaviBtn').removeClass('active');
		$('body').removeClass('menu_open');

		if($('#SPnaviBtn').hasClass("active")) { 
			$('.header_mail').attr('src','/common/img/sp_mail_btn.png'); 
			$('.header_logo').attr('src','/common/img/header_logo.png'); 
		} else { 
			$('.header_mail').attr('src','/common/img/sp_mail_btn_black.png'); 
			$('.header_logo').attr('src','/common/img/header_logo_kasou.png');
		}
		
	});

	/* mvを超えたらヘッダー固定 */
	$(function(){

		var mvH = $('#mv').height();
		$(window).on('load scroll', function () {
		
			if ($(this).scrollTop() > mvH ) {
				$('header').addClass('fixed');
			} else {
				$('header').removeClass('fixed');
			}
		});

	});

});

/*===============================
アンカーリンク
===============================*/
$(function () {
	$('header a[href^="#"], .mv_scroll a[href^="#"]').click(function () {
		var speed = 1000;
		var href = $(this).attr("href");
		var target = $(href == "#" || href == "" ? 'html' : href);

		/* ヘッダーを固定する場合の設定 */
//		var headerH = $('header').height();
		var position = target.offset().top;

		$("html, body").animate({
			scrollTop: position
		}, speed, "swing");
		return false;
	});
});


/*===============================
ページの先頭に戻る
===============================*/
$(document).ready(function() {
  var pagetop = $('#back_to_top');
    $(window).scroll(function () {
       if ($(this).scrollTop() > $(window).innerHeight() ) {
            pagetop.fadeIn();
       } else {
            pagetop.fadeOut();
            }
       });
       pagetop.click(function () {
           $('body, html').animate({ scrollTop: 0 }, 1000);
              return false;
   });
});

