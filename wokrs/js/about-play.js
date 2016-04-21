/*企业资质*/
jQuery(".ladyScroll").slide({
	mainCell: ".dlList",
	effect: "leftLoop",
	vis: 3,
	autoPlay: true,
	trigger: "click"
});
/*员工风采*/
$(function() {
	var prev = $(".prev-3d");
	var next = $(".next-3d");
	var box_li = $(".box-con li");
	var box_ul = $(".box-con ul");

	box_li.eq(0).stop().animate({
		left: 0
	}, 500);
	box_li.eq(1).stop().animate({
		width: 400,
		height: 235,
		left: 66,
		top: 35
	}, 500).css("z-index", 50);
	box_li.eq(2).stop().animate({
		width: 508,
		height: 299,
		left: 138,
		top: 0
	}, 500).css("z-index", 50);

	box_li.eq(3).stop().animate({
		width: 625,
		height: 369,
		left: 210,
		top: -35
	}, 500).next().css("z-index", 80);

	box_li.eq(4).stop().animate({
		width: 508,
		height: 299,
		left: 400,
		top: 0
	}, 500).css("z-index", 50);

	box_li.eq(5).stop().animate({
		left: 582
	}, 500).css("z-index", 30);
	//初始化位置
	next.click(function() {
		box_li = $(".box-con li");
		box_li.eq(0).stop().animate({
			left: -320
		}, 500, function() {
			box_li.eq(0).css("left", 1055).appendTo(box_ul);
		}).css("z-index", 10);
		box_li.eq(1).stop().animate({
			width: 320,
			height: 188,
			left: 0,
			top: 66,
			opacity: 0.7
		}, 500).css("z-index", 20);
		box_li.eq(2).stop().animate({
			width: 400,
			height: 235,
			left: 66,
			top: 35,
			opacity: 0.8
		}, 500).css("z-index", 30);

		box_li.eq(3).stop().animate({
			width: 508,
			height: 299,
			left: 138,
			top: 0,
			opacity: 0.9
		}, 500).css("z-index", 50);
		box_li.eq(4).stop().animate({
			width: 625,
			height: 369,
			left: 210,
			top: -35,
			opacity: 1
		}, 500).css("z-index", 80);
		box_li.eq(5).stop().animate({
			width: 508,
			height: 299,
			left: 400,
			top: 0,
			opacity: 0.9
		}, 500).css("z-index", 50);
		box_li.eq(6).stop().animate({
			width: 400,
			height: 235,
			left: 582,
			top: 35,
			opacity: 0.8
		}, 500).css("z-index", 30);
		box_li.eq(7).stop().animate({
			left: 735,
			opacity: 0.7
		}).css("z-index", 20);

	});
	//向右点击滑动
	prev.click(function() {
		box_li = $(".box-con li");
		$(".box-con li:last").prependTo(box_ul).css("left", -320).stop().animate({
			left: 0
		}, 500);
		box_li.eq(6).stop().animate({
			left: 1055,
			opacity: 0.7
		}).css("z-index", 10);
		box_li.eq(5).stop().animate({
			width: 322,
			height: 188,
			left: 735,
			top: 66,
			opacity: 0.7
		}, 500).css("z-index", 20);
		box_li.eq(4).stop().animate({
			width: 400,
			height: 235,
			left: 582,
			top: 35,
			opacity: 0.8
		}, 500).css("z-index", 30);
		box_li.eq(3).stop().animate({
			width: 508,
			height: 299,
			left: 400,
			top: 0,
			opacity: 0.9
		}, 500).css("z-index", 50);
		box_li.eq(2).stop().animate({
			width: 625,
			height: 369,
			left: 210,
			top: -35,
			opacity: 1
		}, 500).css("z-index", 80);
		box_li.eq(1).stop().animate({
			width: 508,
			height: 299,
			left: 138,
			top: 0,
			opacity: 0.9
		}, 500).css("z-index", 50);
		box_li.eq(0).stop().animate({
			width: 400,
			height: 235,
			left: 66,
			top: 35,
			opacity: 0.8
		}, 500).css("z-index", 30);

	});
	//向左滑动

});
/*合作机构*/
$("#prev1,#prev2").click(function() {
	play_box = $(this).parent().find(".cooperation_play_box");
	$(this).parents(".coo_play").find("ul").first().prependTo(play_box).stop(true, true).animate({
		left: 1068
	}, 500);
	$(this).parents(".coo_play").find("ul").last().prependTo(play_box).stop().animate({
		left: -1068
	}, 100).animate({
		left: 0
	}, 500);
});
$("#next1,#next2").click(function() {
	play_box = $(this).parent().find(".cooperation_play_box");
	$(this).parents(".coo_play").find("ul").first().prependTo(play_box).stop(true, true).animate({
		left: -1068
	}, 500);
	$(this).parents(".coo_play").find("ul").last().prependTo(play_box).stop().animate({
		left: 1068
	}, 100).animate({
		left: 0
	}, 500);
});