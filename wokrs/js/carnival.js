/*banner*/
$(".carnival_top").animate({
	opacity: 0
}, 1500).animate({
	opacity: 1
}, 2000);

/*暖冬计划1*/
$("#plan1").animate({
	left: 0
}, 2500);
$("#plan1_text").animate({
	left: 40,
	opacity: 1
}, 4500);
/*活动规则1*/
$(function() {
	$(window).scroll(function() {
		if ($(window).scrollTop() > 200) {
			$("#plan2").show(1000)
		} else {
			$("#plan2").hide(1000);
		};
		if ($(window).scrollTop() > 260) {
			$(".plan1_content").slideDown(2000)
		} else {
			$(".plan1_content").slideUp(2000);
		};
	});
});
/*暖冬计划2*/
$("#plan3").hide();
$(function() {
	$(window).scroll(function() {
		if ($(window).scrollTop() > 950) {
			$("#plan3").show("slow")
		} else {
			$("#plan3").hide("slow");
		};
		if ($(window).scrollTop() > 1000) {
			$("#plan2_text").show(2000)
		} else {
			$("#plan2_text").hide(1500);
		};
		if ($(window).scrollTop() > 1500) {
			$("#plan4").show(1500)
		} else {
			$("#plan4").hide(1000);
		};
		if ($(window).scrollTop() > 1580) {
			$(".plan2_content").slideDown(1800)
		} else {
			$(".plan2_content").slideUp(1800);
		};
	});
});