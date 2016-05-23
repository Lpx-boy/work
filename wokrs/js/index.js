/*首页banner轮播*/
vs = 0;

function ban() {
	if (vs < 2) {
		vs = vs + 1;
	} else {
		vs = 0;
	}
	$(".qiehuan a").stop(true, true).fadeOut("noraml")
	$(".qiehuan a").eq(vs).stop(true, true).fadeIn("slow");
	$(".qiehuan_btn span").removeClass("active");
	$(".qiehuan_btn span").eq(vs).addClass("active");
}
var index = setInterval(ban, 3500);
$(".banner_area").hover(function() {
	clearInterval(index)
}, function() {
	index = setInterval(ban, 3500);
});

$(".qiehuan_btn>span").mouseover(function() {
	$(".qiehuan_btn span").removeClass("active");
	$(this).addClass("active");
	var pic = $(".qiehuan_btn>span").index(this);
	$(".qiehuan a").stop(true, true).fadeOut("slow");
	$(".qiehuan a").eq(pic).stop(true, true).fadeIn("slow");
});
/*合作机构&媒体机构*/
$(".cha_top dl dd").mouseover(function() {
	$(".cha_top dl dd").removeClass("cha_first_dd");
	$(this).addClass("cha_first_dd");
	var cha = $(".cha_top dl dd").index(this);
	$(".cha_bottom").stop(true, true).hide();
	$(".cha_bottom").stop(true, true).eq(cha).slideToggle("slow");
});
/*滚动条返回top*/
$("#totop").click(function() {
	$('body,html').animate({
		scrollTop: 0
	}, "slow");
	return false;
});