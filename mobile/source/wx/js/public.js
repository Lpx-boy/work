$(function() {
	//百分比圆圈
	$('.ring').circliful();
	//底部切换背景图
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
})