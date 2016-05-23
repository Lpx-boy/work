/*借款top*/
$(".details_rent span").click(function() {
	var user = $(".details_rent span").index(this);
	$(".user_data").stop(true, true).fadeOut(300);
	$(".user_data").eq(user).stop(true, true).fadeIn(300);
});
$(".rent_icon_1").click(function() {
	$(".details_rent span").removeClass("contact work_news finance joint data_up exa_take");
	$(this).addClass("per_data")
	$(".fill_plan i").animate({
		width: "8%"
	});
});
$(".rent_icon_2").click(function() {
	$(".details_rent span").removeClass("per_data work_news finance joint data_up exa_take");
	$(this).addClass("contact")
	$(".fill_plan i").animate({
		width: "23%"
	});
});
$(".rent_icon_3").click(function() {
	$(".details_rent span").removeClass("contact per_data finance joint data_up exa_take");
	$(this).addClass("work_news")
	$(".fill_plan i").animate({
		width: "38%"
	});
});
$(".rent_icon_4").click(function() {
	$(".details_rent span").removeClass("contact work_news per_data joint data_up exa_take");
	$(this).addClass("finance")
	$(".fill_plan i").animate({
		width: "52%"
	});
});
$(".rent_icon_5").click(function() {
	$(".details_rent span").removeClass("contact work_news finance per_data data_up exa_take");
	$(this).addClass("joint")
	$(".fill_plan i").animate({
		width: "67%"
	});
});
$(".rent_icon_6").click(function() {
	$(".details_rent span").removeClass("contact work_news finance joint per_data data_up");
	$(this).addClass("data_up")
	$(".fill_plan i").animate({
		width: "82%"
	});
});
$(".rent_icon_7").click(function() {
	$(".details_rent span").removeClass("contact work_news finance joint per_data data_up");
	$(this).addClass("exa_take")
	$(".fill_plan i").animate({
		width: "97%"
	});
});

/*财务状态*/

/*月均收入*/
$("#month_inc").focusin(function() {
	$(this).addClass("blue_border")
	$(this).parent().find("i").removeClass("noraml_pro");
	$(this).parent().find("i").addClass("error_pro");
	$(this).parent().find("#prompt_text").html("请输入您的真实月均收入！")
}).focusout(function() {
	$(this).removeClass("blue_border")
	$(this).parent().find("#prompt_text").html("您的真实月均收入不能为空！")
});
/*收入构成描述*/
$("#inc_text").focusin(function() {
	$(this).addClass("blue_border")
	$(this).parent().find("i").removeClass("noraml_pro");
	$(this).parent().find("i").addClass("error_pro");
	$(this).parent().find("#prompt_text").html("请输入您的真实收入构成描述！")
}).focusout(function() {
	$(this).removeClass("blue_border")
	$(this).parent().find("#prompt_text").html("您的真实收入构成描述不能为空！")
});
/*月均支出*/
$("#month_pay").focusin(function() {
	$(this).addClass("blue_border")
	$(this).parent().find("i").removeClass("noraml_pro");
	$(this).parent().find("i").addClass("error_pro");
	$(this).parent().find("#prompt_text").html("请输入您的真实月均支出！")
}).focusout(function() {
	$(this).removeClass("blue_border")
	$(this).parent().find("#prompt_text").html("您的真实月均支出不能为空！")
});
/*支出构成描述*/
$("#pay_text").focusin(function() {
	$(this).addClass("blue_border")
	$(this).parent().find("i").removeClass("noraml_pro");
	$(this).parent().find("i").addClass("error_pro");
	$(this).parent().find("#prompt_text").html("请输入您的真实支出构成描述！")
}).focusout(function() {
	$(this).removeClass("blue_border")
	$(this).parent().find("#prompt_text").html("您的真实支出构成描述不能为空！")
});
/*住房条件&房产价值*/
$("#live_house .area_place").click(function() {
	$("#live_house .area_place").find("i").removeClass("true_icon");
	$(this).find("i").addClass("true_icon");
});
$("#live_house .area_place").eq(2).click(function() {
	$("#house_jz").stop(true, true).slideUp("slow");
});
$("#live_house .area_place").eq(0).click(function() {
	$("#house_jz").stop(true, true).slideDown("slow");
});
$("#live_house .area_place").eq(1).click(function() {
	$("#house_jz").stop(true, true).slideDown("slow");
});

$("#house_worth").focusin(function() {
	$(this).addClass("blue_border")
	$(this).parent().find("i").removeClass("noraml_pro");
	$(this).parent().find("i").addClass("error_pro");
	$(this).parent().find("#prompt_text").html("请输入您的真实房产价值！")
}).focusout(function() {
	$(this).removeClass("blue_border")
	$(this).parent().find("#prompt_text").html("您的真实房产价值不能为空！")
});
/*是否购车&车辆价值*/
$("#if_buy_car .area_place").click(function() {
	$("#if_buy_car .area_place").find("i").removeClass("true_icon");
	$(this).find("i").addClass("true_icon");
});
$("#if_buy_car .area_place").eq(1).click(function() {
	$("#car_jz").stop(true, true).slideUp("slow");
});
$("#if_buy_car .area_place").eq(0).click(function() {
	$("#car_jz").stop(true, true).slideDown("slow");
});


$("#car_cost").focusin(function() {
	$(this).addClass("blue_border")
	$(this).parent().find("i").removeClass("noraml_pro");
	$(this).parent().find("i").addClass("error_pro");
	$(this).parent().find("#prompt_text").html("请输入您的真实车辆价值！")
}).focusout(function() {
	$(this).removeClass("blue_border")
	$(this).parent().find("#prompt_text").html("您的真实车辆价值不能为空！")
});
/*联保情况*/

/*第一联保人*/
$("#first_joint").focusin(function() {
	$(this).addClass("blue_border")
	$(this).parent().find("i").removeClass("noraml_pro");
	$(this).parent().find("i").addClass("error_pro");
	$(this).parent().find("#prompt_text").html("请输入您的真实第一联保人！")
}).focusout(function() {
	$(this).removeClass("blue_border")
	$(this).parent().find("#prompt_text").html("您的真实第一联保人不能为空！")
});
/*关系1*/
$("#joint_regard .area_place").click(function() {
	$("#joint_regard .area_place").find("i").removeClass("true_icon");
	$(this).find("i").addClass("true_icon");
});
/*手机号码1*/
$("#joint_num").focusin(function() {
	$(this).addClass("blue_border")
	$(this).parent().find("i").removeClass("noraml_pro");
	$(this).parent().find("i").addClass("error_pro");
	$(this).parent().find("#prompt_text").html("请输入您的真实第一联保人手机号码！")
}).focusout(function() {
	$(this).removeClass("blue_border")
	$(this).parent().find("#prompt_text").html("您的真实第一联保人手机号码不能为空！")
});
/*第二联保人*/
$("#second_joint").focusin(function() {
	$(this).addClass("blue_border")
	$(this).parent().find("i").removeClass("noraml_pro");
	$(this).parent().find("i").addClass("error_pro");
	$(this).parent().find("#prompt_text").html("请输入您的真实第二联保人！")
}).focusout(function() {
	$(this).removeClass("blue_border")
	$(this).parent().find("#prompt_text").html("您的真实第二联保人不能为空！")
});
/*关系2*/
$("#joint_regard_2 .area_place").click(function() {
	$("#joint_regard_2 .area_place").find("i").removeClass("true_icon");
	$(this).find("i").addClass("true_icon");
});
/*手机号码2*/
$("#joint_num_2").focusin(function() {
	$(this).addClass("blue_border")
	$(this).parent().find("i").removeClass("noraml_pro");
	$(this).parent().find("i").addClass("error_pro");
	$(this).parent().find("#prompt_text").html("请输入您的真实第二联保人手机号码！")
}).focusout(function() {
	$(this).removeClass("blue_border")
	$(this).parent().find("#prompt_text").html("您的真实第二联保人手机号码不能为空！")
});

