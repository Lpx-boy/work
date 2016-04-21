/*平台介绍*/
$(".introduce_name img").hide();
$(".introduce_line span").hide();
$(".synopsis").css("opacity", 0)
$(".introduce_name img").delay(1000).show(1500);
$(".synopsis").delay(2000).animate({
	opacity: 100
}, 3000)
$(".introduce_name-left i").animate({
	width: "0%",
	opacity: 0
}, 1000).animate({
	width: "100%",
	opacity: 100
}, 5000);
$(".introduce_name-right i").animate({
	width: "0%",
	opacity: 0
}, 1000).animate({
	width: "100%",
	opacity: 100
}, 5000);
$(".introduce_name-left em").delay(6000).animate({
	bottom: 5,
	opacity: 100,
	height: 22
}, 2000);
$(".introduce_name-right em").delay(6000).animate({
	bottom: 5,
	opacity: 100,
	height: 22
}, 2000);
$(".introduce_line span").delay(6000).show("slow");

function clound1() {
	$(".clound1").animate({
		left: "50%"
	}, 6000).animate({
		left: "20%"
	}, 6000);
	$(".clound2").animate({
		right: "50%"
	}, 6000).animate({
		right: "20%"
	}, 6000);
};

function clound3() {
	$(".clound3").animate({
		left: "0%"
	}, 6000).animate({
		left: "-10%"
	}, 6000);
};
setInterval(clound1, 6000);
setInterval(clound3, 6000);
/*快捷财富简介--图片*/

$(".left_arrows").click(function() {
	$(".play_box i:first").insertAfter(".play_box i:last")
});
$(".right_arrows").click(function() {
	$(".play_box i:last").insertBefore(".play_box i:first")
});

$(".box_content").click(function() {
	$(this).parent().fadeOut("slow")
});
$(".play_box i,#dlList dl dt,.box ul li").click(function() {
	$(".amend_box").fadeIn("fast");
	$(".box_content").html($(this).html());
	var a = $(".box_content img").width();
	var b = $(".box_content img").height();
	$(".box_content img").css({
		marginLeft: -a / 2
	})
	$(".box_content img").css({
		marginTop: -b / 2
	})
});
/*logo--释义*/
$(".us_box_left").hide();
$(".us_box_right h1").hide();
$(".logo_us_pic dt").hide();
$(".logo_us_pic dd").hide();
$(function() {
	$(window).scroll(function() {
		if ($(window).scrollTop() > 200) {
			$(".us_box_left").show("slow")
			$(".us_box_right h1").show(1500)
		} else {
			$(".us_box_left").hide("slow")
			$(".us_box_right h1").hide(1500)
		};
		if ($(window).scrollTop() > 580) {
			$(".logo_us_pic dt").show(1000)
			$(".logo_us_pic .us_pic1").show(1500)
			$(".logo_us_pic .us_pic2").show(2000)
			$(".logo_us_pic .us_pic3").show(2500)
			$(".logo_us_pic .us_pic4").show(3000)
			$(".logo_us_pic .us_pic5").show(3500)
		} else {
			$(".logo_us_pic dt").hide(1000)
			$(".logo_us_pic .us_pic1").hide(1000)
			$(".logo_us_pic .us_pic2").hide(1000)
			$(".logo_us_pic .us_pic3").hide(1000)
			$(".logo_us_pic .us_pic4").hide(1000)
			$(".logo_us_pic .us_pic5").hide(1000)
		}
	})
});
/*企业文化&浮窗左侧类*/
$(".culture_head").hide();
for (var j = 1; j < 6; j++) {
	$("#culture" + j).hide();
}

var about = $("#about_window li"),
	cul_head = $(".culture_head"),
	cul1 = $("#culture1"),
	cul2 = $("#culture2"),
	cul3 = $("#culture3"),
	cul4 = $("#culture4"),
	cul5 = $("#culture5")
var dream_of =$("#dream_of"),
	left1 = $("#left1"),
	left2 = $("#left2"),
	left3 = $("#left3"),
	left4 = $("#left4"),
	left5 = $("#left5"),
	left6 = $("#left6"),
	left7 = $("#left7"),
	left8 = $("#left8"),
	left9 = $("#left9"),
	right1 = $("#right1"),
	right2 = $("#right2"),
	right3 = $("#right3"),
	right4 = $("#right4"),
	right5 = $("#right5")
$(function() {
	$(window).scroll(function() {
		if($(window).scrollTop() > 0){
			$(about).removeClass()
			$(about).eq(0).addClass("about-vary1")
		}
		if ($(window).scrollTop() > 800) {
			cul_head.slideDown("slow");
		} else {
			cul_head.slideUp("slow");
		}
		if ($(window).scrollTop() > 1200) {
			cul1.fadeIn("slow");
		} else {
			cul1.fadeOut("slow");
		}
		if ($(window).scrollTop() > 1280) {
			cul2.fadeIn(1300);
		} else {
			cul2.fadeOut("slow");
		}
		if ($(window).scrollTop() > 1460) {
			cul3.fadeIn(1900);
		} else {
			cul3.fadeOut("slow");
		}
		if ($(window).scrollTop() > 1540) {
			cul4.fadeIn(2500);
		} else {
			cul4.fadeOut("slow");
		}
		if ($(window).scrollTop() > 1650) {
			cul5.fadeIn(3100);
		} else {
			cul5.fadeOut("slow");
		}
		if ($(window).scrollTop() > 4550) {
			$(about).removeClass()
			$(about).eq(1).addClass("about-vary2")
		}
		if ($(window).scrollTop() > 6800) {
			$(about).removeClass()
			$(about).eq(2).addClass("about-vary3")
		}
		if ($(window).scrollTop() > 7800) {
			$(about).removeClass()
			$(about).eq(3).addClass("about-vary4")
		} 
		if($(window).scrollTop() > 9300){
			dream_of.find(".future").addClass("dh-left");
		} else{
			dream_of.find(".future").removeClass("dh-left");
		}
		if ($(window).scrollTop() > 10050) {
			$(about).removeClass()
			$(about).eq(4).addClass("about-vary5")
		}
		if ($(window).scrollTop() > 10850) {
			$(about).removeClass()
			$(about).eq(5).addClass("about-vary6")
		}
	})
});
$(function(){
	$(window).scroll(function() {
		if ($(window).scrollTop() > 7800) {
			dream_of.find(".course-right").addClass("dh-right");
			dream_of.find(".course-left").addClass("dh-left");
			left1.addClass("delay1-course");
			left2.addClass("delay3-course");
			left3.addClass("delay5-course");
			left4.addClass("delay7-course");
			left5.addClass("delay9-course");
			left6.addClass("delay11-course");
			left7.addClass("delay12-course");
			left8.addClass("delay13-course");
			left9.addClass("delay14-course");
			right1.addClass("delay2-course");
			right2.addClass("delay4-course");
			right3.addClass("delay6-course");
			right4.addClass("delay8-course");
			right5.addClass("delay10-course");
		} else{
			dream_of.find(".course-right").removeClass("dh-right delay2-course delay4-course delay6-course delay8-course delay10-course");
			dream_of.find(".course-left").removeClass("dh-left delay1-course delay3-course delay5-course delay7-course delay9-course delay11-course");
			
		}
		
	})
})

/*浮动窗--左侧*/
about.eq(0).click(function() {
	$(about).removeClass()
	$(about).eq(0).addClass("about-vary1")
	$("body,html").stop(true, true).animate({
		scrollTop: 0
	}, 1000)
});
about.eq(1).click(function() {
	$(about).removeClass()
	$(about).eq(1).addClass("about-vary2")
	$("body,html").stop(true, true).animate({
		scrollTop: 4550
	}, 1000)
});
about.eq(2).click(function() {
	$(about).removeClass()
	$(about).eq(2).addClass("about-vary3")
	$("body,html").stop(true, true).animate({
		scrollTop: 7100
	}, 1000)
});
about.eq(3).click(function() {
	$(about).removeClass()
	$(about).eq(3).addClass("about-vary4")
	$("body,html").stop(true, true).animate({
		scrollTop: 7850
	}, 1000)
});
about.eq(4).click(function() {
	$(about).removeClass()
	$(about).eq(4).addClass("about-vary5")
	$("body,html").stop(true, true).animate({
		scrollTop: 10150
	}, 1000)
});
about.eq(5).click(function() {
	$(about).removeClass()
	$(about).eq(5).addClass("about-vary6")
	$("body,html").stop(true, true).animate({
		scrollTop: 11200
	}, 1000)
});
/*点击向下滚动*/
$("#down1").click(function() {
	$("body,html").stop(true, true).animate({
		scrollTop: 800
	}, 1000)
});
$("#down2").click(function() {
	$("body,html").stop(true, true).animate({
		scrollTop: 2300
	}, 1000)
});
$("#down3").click(function() {
	$("body,html").stop(true, true).animate({
		scrollTop: 5100
	}, 1000)
});
$("#down4").click(function() {
	$("body,html").stop(true, true).animate({
		scrollTop: 5950
	}, 1000)
});
$("#down5").click(function() {
	$("body,html").stop(true, true).animate({
		scrollTop: 7100
	}, 1000)
});
$("#down6").click(function() {
	$("body,html").stop(true, true).animate({
		scrollTop: 9500
	}, 1000)
});
$("#down7").click(function() {
	$("body,html").stop(true, true).animate({
		scrollTop: 10300
	}, 1000)
});
$("#down8").click(function() {
	$("body,html").stop(true, true).animate({
		scrollTop: 11150
	}, 1000)
});