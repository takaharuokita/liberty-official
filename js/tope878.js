/*===========================
トップだけ
===========================*/
$(document).ready(function(){
	$('body').addClass('toppage')
});

/*===========================
スライダー
===========================*/
/* MV */
$(document).ready(function(){
	$('.mv_slider_wrapper').slick({arrows: false});
});

mv_height();

function mv_height() {
	var h = window.innerHeight;
	if(typeof window.matchMedia == "function"){
		var mql = window.matchMedia('screen and (max-width: 767px)');
		var checkBreakPoint = function(mql) {

			if (mql.matches){
				TweenMax.set('#mv.top_mv',{height:h});
			}else{
				$('#mv.top_mv').removeAttr('style');
			}
		}
		mql.addListener(checkBreakPoint);
		checkBreakPoint(mql);
	}else{
		var switchResizeInit = true,
			switchResizeName = '';
		Common.addResize(function(w,h){
			if(767 < w){//pc
				if(switchResizeName != 'pc'){
					$('#mv.top_mv').removeAttr('style');
					switchResizeName = 'pc';
					switchResizeInit = true;
				}
			}else{//smart
				if(switchResizeName != 'sp'){
					TweenMax.set('#mv.top_mv',{height:h});
					switchResizeName = 'sp';
					switchResizeInit = true;
				}
			}
			if(switchResizeInit){
				switchResizeInit = false;
			}
		});
	}
};

/* 施工実績*/
$(function(){
	function sliderSetting(){

		var width = $(window).width();

		if(width < 768){
			$('.works_case_wrapper').not('.slick-initialized').slick({
				fade: false,
				autoplay: false,
				speed: 500
			});
		} else {
			$('.works_case_wrapper.slick-initialized').slick('unslick');
		}
	}

	sliderSetting();

	$(window).resize( function() {
		sliderSetting();
	});
});
