/*===============================
ヘッダー画像切り替え
===============================*/
$(window).on('load',function(){ 
	// URLの取得
	var url = location.href
	if (url !== "https://yamada-gumi.co.jp.rondomark.asia/"){
			$('.chenge_img_logo').toggleClass("header_logo");
			$('.chenge_img_mail').toggleClass("header_mail");
			$('.header_mail').attr('src','/common/img/sp_mail_btn_black.png'); 
			$('.header_logo').attr('src','/common/img/header_logo_kasou.png');
	}
});
