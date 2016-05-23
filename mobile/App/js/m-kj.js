/*
 * 移动端--快捷--js  
 */
var swiper = new Swiper('.swiper-container', {
	pagination: '.swiper-pagination',
	paginationClickable: true,
	autoplay: 2500
});
$(function() {
	var Ul = $(".notice ul");
	//自动滑动
	function autoSwiper() {
		Ul.animate({
				top: '-3rem'
			}, 500,
			function() {
				Ul.css({
					top: 0
				});
				$(".notice > ul li:first").insertAfter($(".notice > ul li:last"))
			}
		)
	}
	setInterval(autoSwiper, 3500);
	//百分比圆圈
	$('.ring').circliful()
});
var grayIcon1 = $(".grayIcon1"),
	grayIcon2 = $(".grayIcon2"),
	grayIcon3 = $(".grayIcon3");
grayIcon1.click(function() {
	$(this).addClass("blueIcon1").siblings().removeClass("blueIcon2 blueIcon3")
})
grayIcon2.click(function() {
	$(this).addClass("blueIcon2").siblings().removeClass("blueIcon1 blueIcon3")
})
grayIcon3.click(function() {
	$(this).addClass("blueIcon3").siblings().removeClass("blueIcon1 blueIcon2")
})