/* 严格风控 投资无忧 */
/*文本-p*/
$("#gray_font").animate({
	opacity: 1
}, 2800);
/*隐藏标签名*/
var col_1 = $(".col_1,.col_2,.col_3,.col_4,.col_5,.col_6");
var numLeft = $(".risk_content .numLeft"),
	numRight = $(".risk_content .numRight");
col_1.hide();
/*鼠标滚动--指定值数*/
$(function() {
	$(window).scroll(function() {
		if ($(window).scrollTop() > 500) {
			col_1.show("slow")
			numLeft.addClass("numAnimate-left")
			numRight.addClass("numAnimate-right")
		}
	});

});
/*打造全方位安全体系*/
var custody4 = $(".custody4 > div");
custody4.hide();
$(function() {
	$(window).scroll(function() {
		if ($(window).scrollTop() > 2250) {
			custody4.slideDown("slow")
		}
		else {
			custody4.slideUp("slow")
		}
	});

});
/*高收益 低门槛*/
var reason = $(".reason_box");
reason.hide();
$(function() {
	$(window).scroll(function() {
		if ($(window).scrollTop() > 500) {
			reason.slideDown("slow")
		}
		else {
			reason.slideUp("slow")
		}
	});

});
/*多种期限 投资更灵活*/
var various = $(".various_box .various1"),
	various3 = $(".various_box .various3"),
	choiceKj = $(".bridge_box .choiceKj");
various.delay(500).animate({
	bottom: -20
}, 500);
various3.delay(800).animate({
	width: 213
}, 2500);
$(function() {
	$(window).scroll(function() {
		if ($(window).scrollTop() > 500) {
			choiceKj.addClass("aIchoiceKj") 
		}
	});

});