/*资讯中心--左侧点击效果*/

$(".message_left dl dd").mouseover(function() {
	var bor = $(".message_left dl dd").index(this);
	$(".message_left dl dd").eq(bor - 1).css("border-bottom-color", "#2196f3");
	if (bor < 1) {
		$(".message_left dl dd").eq(5).css("border-bottom-color", "#ddd")
	}
}).mouseout(function() {
	var bor = $(".message_left dl dd").index(this);
	$(".message_left dl dd").eq(bor - 1).css("border-bottom-color", "");
	if (bor < 1) {
		$(".message_left dl dd").eq(5).css("border-bottom-color", "")
	}
})
$(".message_left dl dd").eq(0).mouseover(function() {
	$(".message_left dl dt").css("border-bottom-color", "#2196f3")
}).mouseout(function() {
	$(".message_left dl dt").css("border-bottom-color", "")
})
$(".message_left dl dd").eq(0).click(function() {
	$(".frame_sole").show("slow").delay(100).animate({
		top: 55
	})
});
$(".message_left dl dd").eq(1).click(function() {
	$(".frame_sole").show("slow").delay(100).animate({
		top: 109
	})
});
$(".message_left dl dd").eq(2).click(function() {
	$(".frame_sole").show("slow").delay(100).animate({
		top: 163
	})
});
$(".message_left dl dd").eq(3).click(function() {
	$(".frame_sole").show("slow").delay(100).animate({
		top: 217
	})
});
$(".message_left dl dd").eq(4).click(function() {
	$(".frame_sole").show("slow").delay(100).animate({
		top: 271
	})
});
$(".message_left dl dd").eq(5).click(function() {
	$(".frame_sole").show("slow").delay(100).animate({
		top: 325
	})
});