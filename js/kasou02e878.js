/*===============================
ヘッダー画像切り替え
===============================*/
$(function(){
    var mvH = $('#mv').height();
    $(window).on('load scroll', function () {
        if ($(this).scrollTop() > mvH ) {
            $('.chenge_img_logo').attr('src','../common/img/header_logo_kasou.png');
            $('.chenge_img_mail').attr('src','../common/img/sp_mail_btn_black.png');
        } else {
            $('.chenge_img_logo').attr('src','../common/img/header_logo.png');
            $('.chenge_img_mail').attr('src','../common/img/sp_mail_btn.png');
        }
    });
});