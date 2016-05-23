/*借款top*/
$(".details_rent span").click(function() {
	var user = $(".details_rent span").index(this);
	$(".user_data").stop(true, true).fadeOut(300);
	$(".user_data").eq(user).stop(true, true).fadeIn(300);
});
$(".rent_icon_1").click(function() {
	$(".details_rent span").removeClass("contact work_news car_news data_up exa_take");
	$(this).addClass("per_data")
	$(".fill_plan i").animate({
		width: "8%"
	});
});
$(".rent_icon_2").click(function() {
	$(".details_rent span").removeClass("per_data work_news car_news data_up exa_take");
	$(this).addClass("contact")
	$(".fill_plan i").animate({
		width: "26%"
	});
});
$(".rent_icon_3").click(function() {
	$(".details_rent span").removeClass("contact per_data car_news data_up exa_take");
	$(this).addClass("work_news")
	$(".fill_plan i").animate({
		width: "44%"
	});
});
$(".rent_icon_4").click(function() {
	$(".details_rent span").removeClass("contact work_news per_data data_up exa_take");
	$(this).addClass("car_news")
	$(".fill_plan i").animate({
		width: "61%"
	});
});
$(".rent_icon_5").click(function() {
	$(".details_rent span").removeClass("contact work_news car_news per_data exa_take");
	$(this).addClass("data_up")
	$(".fill_plan i").animate({
		width: "79%"
	});
});
$(".rent_icon_6").click(function() {
	$(".details_rent span").removeClass("contact work_news car_news per_data data_up");
	$(this).addClass("exa_take")
	$(".fill_plan i").animate({
		width: "97%"
	});
});

/*资产信息*/

/*产权人*/
$("#pro_owner").focusin(function() {
	$(this).addClass("blue_border")
	$(this).parent().find("i").removeClass("noraml_pro");
	$(this).parent().find("i").addClass("error_pro");
	$(this).parent().find("#prompt_text").html("请输入您的真实产权人")
}).focusout(function() {
	$(this).removeClass("blue_border")
	$(this).parent().find("#prompt_text").html("您的真实产权人不能为空！")
});

/*占地面积*/
$("#floor_area").focusin(function() {
	$(this).addClass("blue_border")
	$(this).parent().find("i").removeClass("noraml_pro");
	$(this).parent().find("i").addClass("error_pro");
	$(this).parent().find("#prompt_text").html("请输入您的真实占地面积")
}).focusout(function() {
	$(this).removeClass("blue_border")
	$(this).parent().find("#prompt_text").html("您的真实占地面积不能为空！")
});
/*建筑面积*/
$("#build_area").focusin(function() {
	$(this).addClass("blue_border")
	$(this).parent().find("i").removeClass("noraml_pro");
	$(this).parent().find("i").addClass("error_pro");
	$(this).parent().find("#prompt_text").html("请输入您的真实建筑面积")
}).focusout(function() {
	$(this).removeClass("blue_border")
	$(this).parent().find("#prompt_text").html("您的真实建筑面积不能为空！")
});
/*目前价值*/
$("#house_cost").focusin(function() {
	$(this).addClass("blue_border")
	$(this).parent().find("i").removeClass("noraml_pro");
	$(this).parent().find("i").addClass("error_pro");
	$(this).parent().find("#prompt_text").html("请输入您的真实房产价值！")
}).focusout(function() {
	$(this).removeClass("blue_border")
	$(this).parent().find("#prompt_text").html("您的真实房产价值不能为空！")
});
/*购买金额*/
$("#buy_sum").focusin(function() {
	$(this).addClass("blue_border")
	$(this).parent().find("i").removeClass("noraml_pro");
	$(this).parent().find("i").addClass("error_pro");
	$(this).parent().find("#prompt_text").html("请输入您的真实购买金额")
}).focusout(function() {
	$(this).removeClass("blue_border")
	$(this).parent().find("#prompt_text").html("您的真实购买金额不能为空！")
});
/*房屋年限*/
$("#fix_years").focusin(function() {
	$(this).addClass("blue_border")
	$(this).parent().find("i").removeClass("noraml_pro");
	$(this).parent().find("i").addClass("error_pro");
	$(this).parent().find("#prompt_text").html("请输入您的真实房屋年限！")
}).focusout(function() {
	$(this).removeClass("blue_border")
	$(this).parent().find("#prompt_text").html("您的真实房屋年限不能为空！")
});
/*租凭年限*/
$("#rental_years").focusin(function() {
	$(this).addClass("blue_border")
	$(this).parent().find("i").removeClass("noraml_pro");
	$(this).parent().find("i").addClass("error_pro");
	$(this).parent().find("#prompt_text").html("请输入您的真实租凭年限！")
}).focusout(function() {
	$(this).removeClass("blue_border")
	$(this).parent().find("#prompt_text").html("您的真实租凭年限不能为空！")
});
/*月租金收入*/
$("#month_rent_income").focusin(function() {
	$(this).addClass("blue_border")
	$(this).parent().find("i").removeClass("noraml_pro");
	$(this).parent().find("i").addClass("error_pro");
	$(this).parent().find("#prompt_text").html("请输入您的真实月租金收入！")
}).focusout(function() {
	$(this).removeClass("blue_border")
	$(this).parent().find("#prompt_text").html("您的真实月租金收入不能为空！")
});
/*房产地址*/
$("#house_pro_add").focusin(function() {
	$(this).addClass("blue_border")
	$(this).parent().find("i").removeClass("noraml_pro");
	$(this).parent().find("i").addClass("error_pro");
	$(this).parent().find("#prompt_text").html("请输入您的真实房产地址！")
}).focusout(function() {
	$(this).removeClass("blue_border")
	$(this).parent().find("#prompt_text").html("您的真实房产地址不能为空！")
});
/*有无红本*/
$("#red_book .area_place").click(function() {
	$("#red_book .area_place").find("i").removeClass("true_icon");
	$(this).find("i").addClass("true_icon");
});
/*是否有贷款*/
$("#wy_loan .area_place").click(function() {
	$("#wy_loan .area_place").find("i").removeClass("true_icon");
	$(this).find("i").addClass("true_icon");
});
//*商品房&自建房切换*//
$("#fishing button").click(function() {
	$("#fishing button").removeClass("fishing_color");
	$(this).addClass("fishing_color");
});
$("#fishing button").eq(1).click(function() {
	$(".condo").slideUp("slow");
	$(".own_build").slideDown("slow");
});
$("#fishing button").eq(0).click(function() {
	$(".condo").slideDown("slow");
	$(".own_build").slideUp("slow");
});