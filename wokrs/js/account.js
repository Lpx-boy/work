/*账户中心--左侧*/
$("#down_1").click(function() {
	$("#pull_1").stop(true, true).slideToggle(400);
	$(".pull-down div").removeClass("down2_color down3_color down4_color down5_color down6_color down7_color")
	$(this).addClass("down1_color")
})
$("#down_2").click(function() {
	$("#pull_2").stop(true, true).slideToggle(400);
	$(".pull-down div").removeClass("down1_color down3_color down4_color down5_color down6_color down7_color")
	$(this).addClass("down2_color")
})
$("#down_3").click(function() {
	$("#pull_3").stop(true, true).slideToggle(400);
	$(".pull-down div").removeClass("down1_color down2_color down4_color down5_color down6_color down7_color")
	$(this).addClass("down3_color")
})
$("#down_4").click(function() {
	$("#pull_4").stop(true, true).slideToggle(400);
	$(".pull-down div").removeClass("down1_color down2_color down3_color down5_color down6_color down7_color")
	$(this).addClass("down4_color")
})
$("#down_5").click(function() {
	$("#pull_5").stop(true, true).slideToggle(400);
	$(".pull-down div").removeClass("down1_color down2_color down3_color down4_color down6_color down7_color")
	$(this).addClass("down5_color")
})
$("#down_6").click(function() {
	$("#pull_6").stop(true, true).slideToggle(400);
	$(".pull-down div").removeClass("down1_color down2_color down3_color down4_color down5_color down7_color")
	$(this).addClass("down6_color")
})
$("#down_7").click(function() {
	$("#pull_7").stop(true, true).slideToggle(400);
	$(".pull-down div").removeClass("down1_color down2_color down3_color down4_color down5_color down6_color")
	$(this).addClass("down7_color")
})
$(".pull-down a").click(function() {
	$(".pull-down a").removeClass("pull-a-color");
	$(this).addClass("pull-a-color");
});

/*安全中心*/
$(".line_icon1").animate({
	left: "10%",
	opacity: 1
}, 2000).find(".icon_text").delay(1500).show(3000);
$(".line_icon2").delay(1000).animate({
	left: "45%",
	opacity: 1
}, 2000).find(".icon_text").delay(1700).show(3000);
$(".line_icon3").delay(2000).animate({
	left: "80%",
	opacity: 1
}, 2000).find(".icon_text").delay(2000).show(3500);

/* 账户中心 */

/*性别*/
$("#sex .area_place").click(function() {
	$("#sex .area_place").find("i").removeClass("true_icon");
	$(this).find("i").addClass("true_icon");
});
/*最高学历*/
$("#edu .area_place").click(function() {
	$("#edu .area_place").find("i").removeClass("true_icon");
	$(this).find("i").addClass("true_icon");
});
/*最高学历*/
$("#academy").focusin(function() {
	$(this).parent().find("i").removeClass("noraml_pro");
	$(this).parent().find("i").addClass("error_pro");
	$(this).parent().find("#prompt_text").html("请输入您的真实毕业院校！")
}).focusout(function() {
	$(this).parent().find("#prompt_text").html("您的真实毕业院校不能为空！")
});
/*婚姻状态*/
$("#marry .area_place").click(function() {
	$("#marry .area_place").find("i").removeClass("true_icon");
	$(this).find("i").addClass("true_icon");
});
/*公司行业*/
$("#trade_content,#com_trade").focusin(function() {
	$("#unit_pull_menu").stop(true, true).toggle("slow");
}).focusout(function() {
	$("#unit_pull_menu").stop(true, true).toggle("slow");
})
$("#unit_pull_menu li").click(function() {
	$("#trade_content").html($(this).html());
	$(this).parent().hide("fast");
});
/*公司规模*/
$("#scale_content,#trade_scale").focusin(function() {
	$("#scale_pull_menu").stop(true, true).toggle("slow");
}).focusout(function() {
	$("#scale_pull_menu").stop(true, true).toggle("slow");
})
$("#scale_pull_menu li").click(function() {
	$("#scale_content").html($(this).html());
	$(this).parent().hide("fast");
});
/*职务*/
$("#post_content,#post").focusin(function() {
	$("#post_pull_menu").stop(true, true).toggle("slow");
}).focusout(function() {
	$("#post_pull_menu").stop(true, true).toggle("slow");
})
$("#post_pull_menu li").click(function() {
	$("#post_content").html($(this).html());
	$(this).parent().hide("fast");
});
/*月收入*/
$("#mone_income .area_place").click(function() {
	$("#mone_income .area_place").find("i").removeClass("true_icon");
	$(this).find("i").addClass("true_icon");
});
/*保存&取消修改*/
$("#amend_news").click(function() {
	$(this).hide("fast").parent().find(".hide_but").show("slow");
	$(".alter_fill").hide("slow");
	$(".alter_no_fill").show("slow");
});
$("#cancel").click(function() {
	$(this).parent().find(".hide_but").hide("fast").parent().find("#amend_news").show("slow");
	$(".alter_no_fill").hide("slow");
	$(".alter_fill").show("slow");
});
/*更换头像*/
$(".system_head_pic li").click(function() {
	$(".system_head_pic li").removeClass("pic_border");
	$(this).addClass("pic_border")
});
$(".system_head_pic li").click(function() {
	$("#head_preview_pic").html($(this).html());
});
/*确定修改*/
$(".amend_box_bg").click(function() {
	$(this).parent().fadeOut(350)
});
$("#amend_close button").click(function() {
	$(this).parent().parent().slideUp("slow").parent().delay(500).slideUp("slow")
});
$("#close_icon").click(function() {
	$(this).parent().slideUp("slow").parent().delay(500).slideUp("slow")
});
$("#save_pic").click(function() {
	$(".amend_box").slideDown("slow").find(".box_content").slideDown(1500)
});
/*系统信息*/
$("#text1").click(function() {
	$(".text_detail").stop(true, true).slideToggle("slow")
});
$("#sys_news span").click(function() {
	$("#sys_news span").removeClass("sys_color");
	$(this).addClass("sys_color");
	var sys = $("#sys_news span").index(this);
	$(".system_news").stop(true, true).hide("slow");
	$(".system_news").eq(sys).stop(true, true).show("slow");
});
/*删除地址*/
$(".close1").click(function() {
	$(this).parent().parent().remove()
});
$("#close").click(function() {
	$("#tolerant").slideUp("slow")
});
/*设置为默认收货地址*/
$(".judge_add_box").click(function() {
	$(this).find("i").toggleClass("judge_add_true")
});
/*修改地址--提示文字*/

/*详细地址*/
$("#minute_add").focusin(function() {
	$(this).parent().find("i").removeClass("noraml_pro");
	$(this).parent().find("i").addClass("error_pro");
	$(this).parent().find("#prompt_text").html("请输入您的真实详细地址！")
}).focusout(function() {

	$(this).parent().find("#prompt_text").html("您的真实详细地址不能为空！")

});
/*邮政编码*/
$("#zip_code").focusin(function() {
	$(this).parent().find("i").removeClass("noraml_pro");
	$(this).parent().find("i").addClass("error_pro");
	$(this).parent().find("#prompt_text").html("请输入您的真实邮政编码！")
}).focusout(function() {

	$(this).parent().find("#prompt_text").html("您的真实邮政编码不能为空！")

});
/*收货人姓名*/
$("#real_name").focusin(function() {
	$(this).parent().find("i").removeClass("noraml_pro");
	$(this).parent().find("i").addClass("error_pro");
	$(this).parent().find("#prompt_text").html("请输入真实收货人姓名！")
}).focusout(function() {

	$(this).parent().find("#prompt_text").html("真实收货人姓名不能为空！")

});
/*手机号码*/
$("#mobile_num").focusin(function() {
	$(this).parent().find("i").removeClass("noraml_pro");
	$(this).parent().find("i").addClass("error_pro");
	$(this).parent().find("#prompt_text").html("请输入您的真实手机号码！")
}).focusout(function() {

	$(this).parent().find("#prompt_text").html("您的真实手机号码不能为空！")

});
/*电话号码*/
$("#phone_num").find(".phone_num").focusin(function() {
	$(this).parent().find("i").removeClass("noraml_pro");
	$(this).parent().find("i").addClass("error_pro");
	$(this).parent().find("#prompt_text").html("请输入您的真实电话号码！")
}).focusout(function() {

	$(this).parent().find("#prompt_text").html("您的真实电话号码不能为空！")

});