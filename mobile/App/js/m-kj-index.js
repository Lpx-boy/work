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
	setInterval(autoSwiper, 3500)
})