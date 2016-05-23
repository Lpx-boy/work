
/*详细资料--右侧*/

/*借款top*/
$(".details_skip span").click(function() {
	var user = $(".details_skip span").index(this);
	$(".user_data").stop(true, true).fadeOut(300);
	$(".user_data").eq(user).stop(true, true).fadeIn(300);
});
$(".skip_icon_1").click(function() {
	$(".details_skip span").removeClass("contact work_news car_news exa_take");
	$(this).addClass("per_data")
	$(".fill_plan i").animate({
		width: "8%"
	});
});
$(".skip_icon_2").click(function() {
	$(".details_skip span").removeClass("per_data work_news car_news exa_take");
	$(this).addClass("contact")
	$(".fill_plan i").animate({
		width: "30%"
	});
});
$(".skip_icon_3").click(function() {
	$(".details_skip span").removeClass("contact per_data car_news exa_take");
	$(this).addClass("work_news")
	$(".fill_plan i").animate({
		width: "52%"
	});
});
$(".skip_icon_4").click(function() {
	$(".details_skip span").removeClass("contact work_news per_data exa_take");
	$(this).addClass("car_news")
	$(".fill_plan i").animate({
		width: "74%"
	});
});
$(".skip_icon_5").click(function() {
	$(".details_skip span").removeClass("contact work_news car_news per_data");
	$(this).addClass("exa_take")
	$(".fill_plan i").animate({
		width: "95%"
	});
});
/*车贷*/

/*个人资料  点击切换类名*/
/*户籍地址*/
$("#add").click(function() {
	$("#detail_li").toggle();
})
$("#detail_li li").click(function() {
	$("#select_but").html($(this).html());
});
$("#detail_li li").eq(1).click(function() {
	$("#city,#neigh").fadeOut("slow");
});
$("#detail_li li").eq(0).click(function() {
	$("#city,#neigh").slideDown("slow")
})
$("#city").click(function() {
	$("#city_li").toggle();
})
$("#city_li li").click(function() {
	$("#city_but").html($(this).html())
});
$("#neigh").click(function() {
	$("#neigh_li").toggle();
})
$("#neigh_li li").click(function() {
	$("#neigh_but").html($(this).html())
});

/*现居地址*/
$("#now_add").click(function() {
	$("#now_detail_li").toggle();
})
$("#now_detail_li li").click(function() {
	$("#now_select_but").html($(this).html());
});
$("#now_detail_li li").eq(1).click(function() {
	$("#now_city,#now_neigh").fadeOut("slow");
});
$("#now_detail_li li").eq(0).click(function() {
	$("#now_city,#now_neigh").slideDown("slow")
})
$("#now_city").click(function() {
	$("#now_city_li").toggle();
})
$("#now_city_li li").click(function() {
	$("#now_city_but").html($(this).html())
});
$("#now_neigh").click(function() {
	$("#now_neigh_li").toggle();
})
$("#now_neigh_li li").click(function() {
	$("#now_neigh_but").html($(this).html())
});

/*单位地址*/
$("#Unit_add").click(function() {
	$("#Unit_add_li").toggle();
})
$("#Unit_add_li li").click(function() {
	$("#Unit_add_but").html($(this).html());
});
$("#Unit_add_li li").eq(1).click(function() {
	$("#Unit_city,#Unit_neigh").fadeOut("slow");
});
$("#Unit_add_li li").eq(0).click(function() {
	$("#Unit_city,#Unit_neigh").slideDown("slow")
})
$("#Unit_city").click(function() {
	$("#Unit_city_li").toggle();
})
$("#Unit_city_li li").click(function() {
	$("#Unit_city_but").html($(this).html())
});
$("#Unit_neigh").click(function() {
	$("#Unit_neigh_li").toggle();
})
$("#Unit_neigh_li li").click(function() {
	$("#Unit_neigh_but").html($(this).html())
});

/*房产地址*/
$("#house_add").click(function() {
	$("#house_add_li").toggle();
})
$("#house_add_li li").click(function() {
	$("#house_add_but").html($(this).html());
});
$("#house_add_li li").eq(1).click(function() {
	$("#house_city,#house_neigh").fadeOut("slow");
});
$("#house_add_li li").eq(0).click(function() {
	$("#house_city,#house_neigh").slideDown("slow")
})
$("#house_city").click(function() {
	$("#house_city_li").toggle();
})
$("#house_city_li li").click(function() {
	$("#house_city_but").html($(this).html())
});
$("#house_neigh").click(function() {
	$("#house_neigh_li").toggle();
})
$("#house_neigh_li li").click(function() {
	$("#house_neigh_but").html($(this).html())
});

/*供养子女*/
$("#childred_id .area_place").click(function() {
	$("#childred_id .area_place").find("i").removeClass("true_icon");
	$(this).find("i").addClass("true_icon");
});
$("#childred_id label").eq(0).click(function() {
	$("#childred_box,.childred_box").fadeOut("slow");
});
$("#childred_id label").eq(1).click(function() {
	$("#childred_box,.childred_box").slideDown("slow");
});
$("#childred_box").focusin(function() {
		$(this).addClass("blue_border")
	}).focusout(function() {
		$(this).removeClass("blue_border")
	})
	/*婚姻状态*/
$("#marry .area_place").click(function() {
	$("#marry .area_place").find("i").removeClass("true_icon");
	$(this).find("i").addClass("true_icon");
});
/*最高学历*/
$("#ed_back .area_place").click(function() {
	$("#ed_back .area_place").find("i").removeClass("true_icon");
	$(this).find("i").addClass("true_icon");
});
/*贷款用途*/
$("#purpose .area_place").click(function() {
	$("#purpose .area_place").find("i").removeClass("true_icon");
	$(this).find("i").addClass("true_icon");
});
/*贷款金额*/
$("#loan_money").focusin(function() {
		$(this).addClass("blue_border")
	}).focusout(function() {
		$(this).removeClass("blue_border")
	})
	/*申请期限*/
$("#deadline .area_place").click(function() {
	$("#deadline .area_place").find("i").removeClass("true_icon");
	$(this).find("i").addClass("true_icon");
});
/*有无推荐人*/
$("#referrer .area_place").click(function() {
	$("#referrer .area_place").find("i").removeClass("true_icon");
	$(this).find("i").addClass("true_icon");
});
$("#referrer_text").focusin(function() {
	$(this).parent().find("i").removeClass("noraml_pro");
	$(this).parent().find("i").addClass("error_pro");
	$(this).parent().find("#prompt_text").html("请输入您的真实推荐人！")
}).focusout(function() {

	$(this).parent().find("#prompt_text").html("您的真实推荐人不能为空！")
});
$("#referrer .area_place").eq(0).click(function() {
	$("#referrer_name,#referrer_text,.referrer_pro").fadeOut("slow");
});
$("#referrer .area_place").eq(1).click(function() {
	$("#referrer_name,#referrer_text,.referrer_pro").slideDown("slow");
});
/*平台来源*/
$("#origin .area_place").click(function() {
	$("#origin .area_place").find("i").removeClass("true_icon");
	$(this).find("i").addClass("true_icon");
});

/*表单验证提示*/

/*真实姓名*/
$("#real_name").focusin(function() {
	$(this).parent().find("i").removeClass("noraml_pro");
	$(this).parent().find("i").addClass("error_pro");
	$(this).parent().find("#prompt_text").html("请输入您的真实姓名！")
}).focusout(function() {

	$(this).parent().find("#prompt_text").html("真实姓名不能为空！")

});
/*证件号码*/
$("#status_id").focusin(function() {
	$(this).parent().find("i").removeClass("noraml_pro");
	$(this).parent().find("i").addClass("error_pro");
	$(this).parent().find("#prompt_text").html("请输入您的真实证件号码！")
}).focusout(function() {

	$(this).parent().find("#prompt_text").html("您的真实证件号码不正确！")

});
/*发证机关*/
$("#status_office").focusin(function() {
	$(this).parent().find("i").removeClass("noraml_pro");
	$(this).parent().find("i").addClass("error_pro");
	$(this).parent().find("#prompt_text").html("请输入您的真实发证机关！")
}).focusout(function() {

	$(this).parent().find("#prompt_text").html("您的真实发证机关不能为空！");

});
/*有效期*/
$("#period").focusin(function() {
	$(this).parent().find("i").removeClass("noraml_pro");
	$(this).parent().find("i").addClass("error_pro");
	$(this).parent().find("#prompt_text").html("请填写您的真实有效期！")
}).focusout(function() {

	$(this).parent().find("#prompt_text").html("您的真实有效期不能为空！")
});
/*籍贯*/
$("#native_place").focusin(function() {
	$(this).parent().find("i").removeClass("noraml_pro");
	$(this).parent().find("i").addClass("error_pro");
	$(this).parent().find("#prompt_text").html("请输入您的真实籍贯！")
}).focusout(function() {

	$(this).parent().find("#prompt_text").html("您的真实籍贯不能为空！")
});
/*民族*/
$("#nation").focusin(function() {
	$(this).parent().find("i").removeClass("noraml_pro");
	$(this).parent().find("i").addClass("error_pro");
	$(this).parent().find("#prompt_text").html("请输入您的真实民族！")
}).focusout(function() {

	$(this).parent().find("#prompt_text").html("您的真实民族不能为空！")
});
/*社保--卡号*/
$("#card_num").focusin(function() {
	$(this).parent().find("i").removeClass("noraml_pro");
	$(this).parent().find("i").addClass("error_pro");
	$(this).parent().find("#prompt_text").html("请输入您的真实卡号！")
}).focusout(function() {

	$(this).parent().find("#prompt_text").html("您的真实卡号不能为空！")
});
$("#social .area_place").click(function() {
	$("#social .area_place").find("i").removeClass("true_icon");
	$(this).find("i").addClass("true_icon");
});
$("#social .area_place").eq(0).click(function() {
	$("#clip_num,#card_num,.card_num").fadeOut("slow");
});
$("#social .area_place").eq(1).click(function() {
	$("#clip_num,#card_num,.card_num").slideDown("slow");
});
/*年龄*/
$("#age").focusin(function() {
	$(this).parent().find("i").removeClass("noraml_pro");
	$(this).parent().find("i").addClass("error_pro");
	$(this).parent().find("#prompt_text").html("请输入您的真实年龄！")
}).focusout(function() {

	$(this).parent().find("#prompt_text").html("您的真实年龄不能为空！")
});
/*供养子女*/
$("#childred").focusin(function() {
	$(this).parent().parent().find("i").removeClass("noraml_pro");
	$(this).parent().parent().find("i").addClass("error_pro");
	$(this).parent().parent().find("#prompt_text").html("请输入您的真实子女个数！")
}).focusout(function() {

	$(this).parent().parent().find("#prompt_text").html("您的真实子女个数不能为空！")
});

/*手机号码*/
$("#mobile_num").focusin(function() {
	$(this).parent().find("i").removeClass("noraml_pro");
	$(this).parent().find("i").addClass("error_pro");
	$(this).parent().find("#prompt_text").html("请输入您的真实手机号码！")
}).focusout(function() {

	$(this).parent().find("#prompt_text").html("您的真实手机号码不能为空！")
});
/*E-mail*/
$("#e_mail").focusin(function() {
	$(this).parent().find("i").removeClass("noraml_pro");
	$(this).parent().find("i").addClass("error_pro");
	$(this).parent().find("#prompt_text").html("请输入您的真实E-mail！")
}).focusout(function() {

	$(this).parent().find("#prompt_text").html("您的真实E-mail不能为空！")
});
/*贷款金额*/
$("#loan_money").focusin(function() {
	$(this).parent().find("i").removeClass("noraml_pro");
	$(this).parent().find("i").addClass("error_pro");
	$(this).parent().find("#prompt_text").html("请输入您的真实贷款金额！")
}).focusout(function() {

	$(this).parent().find("#prompt_text").html("您的真实贷款金额不能为空！")
});


/*联系方式  点击切换类名*/

/*单位电话*/
$("#unit_mob_y").click(function() {
	$("#unit_mob_text").fadeIn("slow");
});
$("#unit_mob_w").click(function() {
	$("#unit_mob_text").slideUp("slow");
});
$("#unit_mob .area_place").click(function() {
	$("#unit_mob .area_place").find("i").removeClass("true_icon");
	$(this).find("i").addClass("true_icon");
});
/*单位名称*/
$("#unit_name_y").click(function() {
	$("#unit_name_text").fadeIn("slow");
});
$("#unit_name_w").click(function() {
	$("#unit_name_text").slideUp("slow");
});
$("#unit_name .area_place").click(function() {
	$("#unit_name .area_place").find("i").removeClass("true_icon");
	$(this).find("i").addClass("true_icon");
});
/*其他联系人-关系*/
$("#else_linkman .area_place").click(function() {
	$("#else_linkman .area_place").find("i").removeClass("true_icon");
	$(this).find("i").addClass("true_icon");
});
/*家人知此项贷款*/
$("#now_loan .area_place").click(function() {
	$("#now_loan .area_place").find("i").removeClass("true_icon");
	$(this).find("i").addClass("true_icon");
});

/*表单验证提示*/

/*配偶姓名*/
$("#spouse").focusin(function() {
	$(this).parent().find("i").removeClass("noraml_pro");
	$(this).parent().find("i").addClass("error_pro");
	$(this).parent().find("#prompt_text").html("请输入您的真实配偶姓名！")
}).focusout(function() {
	$(this).parent().find("#prompt_text").html("真实配偶姓名不能为空！")
});
/*移动电话*/
$("#shift_moblie").focusin(function() {
	$(this).parent().find("i").removeClass("noraml_pro");
	$(this).parent().find("i").addClass("error_pro");
	$(this).parent().find("#prompt_text").html("请输入您的真实移动电话！")
}).focusout(function() {
	$(this).parent().find("#prompt_text").html("您的真实移动电话不能为空！")
});
/*直系亲属姓名*/
$("#clan_name").focusin(function() {
	$(this).parent().find("i").removeClass("noraml_pro");
	$(this).parent().find("i").addClass("error_pro");
	$(this).parent().find("#prompt_text").html("请输入您的真实直系亲属姓名！")
}).focusout(function() {
	$(this).parent().find("#prompt_text").html("您的真实直系亲属姓名不能为空！")
});
/*亲属手机号码*/
$("#clan_mob").focusin(function() {
	$(this).parent().find("i").removeClass("noraml_pro");
	$(this).parent().find("i").addClass("error_pro");
	$(this).parent().find("#prompt_text").html("请输入真实的亲属手机号码！")
}).focusout(function() {
	$(this).parent().find("#prompt_text").html("您真实的亲属手机号码不能为空！")
});
/*亲属住址电话*/
$("#address_mob").focusin(function() {
	$(this).parent().find("i").removeClass("noraml_pro");
	$(this).parent().find("i").addClass("error_pro");
	$(this).parent().find("#prompt_text").html("请输入真实的亲属住址电话！")
}).focusout(function() {
	$(this).parent().find("#prompt_text").html("您真实的亲属住址电话不能为空！")
});
/*家庭住址*/
$("#family_address").focusin(function() {
	$(this).parent().find("i").removeClass("noraml_pro");
	$(this).parent().find("i").addClass("error_pro");
	$(this).parent().find("#prompt_text").html("请输入您的真实家庭住址！")
}).focusout(function() {
	$(this).parent().find("#prompt_text").html("您真实的家庭住址不能为空！")
});


/*工作信息 点击切换类名*/

/*关系*/
$("#branch_regrad .area_place").click(function() {
	$("#branch_regrad .area_place").find("i").removeClass("true_icon");
	$(this).find("i").addClass("true_icon");
});

/*表单验证提示*/

/*工作单位*/
$("#work_unit").focusin(function() {
	$(this).parent().find("i").removeClass("noraml_pro");
	$(this).parent().find("i").addClass("error_pro");
	$(this).parent().find("#prompt_text").html("请输入您的真实工作单位！")
}).focusout(function() {
	$(this).parent().find("#prompt_text").html("您的真实工作单位不能为空！")
});
/*部门*/
$("#branch").focusin(function() {
	$(this).parent().find("i").removeClass("noraml_pro");
	$(this).parent().find("i").addClass("error_pro");
	$(this).parent().find("#prompt_text").html("请输入您的真实部门！")
}).focusout(function() {
	$(this).parent().find("#prompt_text").html("您的真实部门不能为空！")
});
/*职务*/
$("#duties").focusin(function() {
	$(this).parent().find("i").removeClass("noraml_pro");
	$(this).parent().find("i").addClass("error_pro");
	$(this).parent().find("#prompt_text").html("请输入您的真实职务！")
}).focusout(function() {
	$(this).parent().find("#prompt_text").html("您的真实职务不能为空！")
});
/*所属行业*/
$("#guild").focusin(function() {
	$(this).parent().find("i").removeClass("noraml_pro");
	$(this).parent().find("i").addClass("error_pro");
	$(this).parent().find("#prompt_text").html("请输入您的真实行业！")
}).focusout(function() {
	$(this).parent().find("#prompt_text").html("您的所属行业不能为空！")
});
/*工作时间*/
$("#work_time").focusin(function() {
	$(this).parent().find("i").removeClass("noraml_pro");
	$(this).parent().find("i").addClass("error_pro");
	$(this).parent().find("#prompt_text").html("请输入您的真实工作时间！")
}).focusout(function() {
	$(this).parent().find("#prompt_text").html("您的真实工作时间不能为空！")
});
/*每月总收入*/
$("#month_income").focusin(function() {
	$(this).parent().find("i").removeClass("noraml_pro");
	$(this).parent().find("i").addClass("error_pro");
	$(this).parent().find("#prompt_text").html("请输入您的真实收入！")
}).focusout(function() {
	$(this).parent().find("#prompt_text").html("您每月的总收入不能为空！")
});
/*月均支出*/
$("#month_mean_pay").focusin(function() {
	$(this).addClass("blue_border")
}).focusout(function() {
	$(this).removeClass("blue_border")
})
$("#month_mean_pay").focusin(function() {
	$(this).parent().find("i").removeClass("noraml_pro");
	$(this).parent().find("i").addClass("error_pro");
	$(this).parent().find("#prompt_text").html("请输入您的真实月均支出！")
}).focusout(function() {

	$(this).parent().find("#prompt_text").html("您的真实月均支出不能为空！")
});
/*参加工作时间*/
$("#join_work_time").focusin(function() {
	$(this).parent().find("i").removeClass("noraml_pro");
	$(this).parent().find("i").addClass("error_pro");
	$(this).parent().find("#prompt_text").html("请填写您真实的入职时间！")
}).focusout(function() {
	$(this).parent().find("#prompt_text").html("您真实的入职时间不能为空！")
});

/*车辆信息 点击切换类名*/

/*按揭*/
$("#mortgage .area_place").click(function() {
	$("#mortgage .area_place").find("i").removeClass("true_icon");
	$(this).find("i").addClass("true_icon");
});

/*表单验证提示*/

/*汽车品牌*/
$("#car_brand").focusin(function() {
	$(this).parent().find("i").removeClass("noraml_pro");
	$(this).parent().find("i").addClass("error_pro");
	$(this).parent().find("#prompt_text").html("请输入您的真实汽车品牌！")
}).focusout(function() {
	$(this).parent().find("#prompt_text").html("您的真实汽车品牌不能为空！")
});
/*汽车型号*/
$("#car_mobel").focusin(function() {
	$(this).parent().find("i").removeClass("noraml_pro");
	$(this).parent().find("i").addClass("error_pro");
	$(this).parent().find("#prompt_text").html("请输入您的真实汽车型号！")
}).focusout(function() {
	$(this).parent().find("#prompt_text").html("您的真实汽车型号不能为空！")
});
/*车辆价格*/
$("#car_price").focusin(function() {
	$(this).parent().find("i").removeClass("noraml_pro");
	$(this).parent().find("i").addClass("error_pro");
	$(this).parent().find("#prompt_text").html("请输入您的真实汽车价格！")
}).focusout(function() {
	$(this).parent().find("#prompt_text").html("您的真实汽车价格不能为空！")
});
/*购买时间*/
$("#but_time").focusin(function() {
	$(this).parent().find("i").removeClass("noraml_pro");
	$(this).parent().find("i").addClass("error_pro");
	$(this).parent().find("#prompt_text").html("请输入您的真实购买时间！")
}).focusout(function() {
	$(this).parent().find("#prompt_text").html("您的真实购买时间不能为空！")
});
/*识别代码(vin)*/
$("#dg_code").focusin(function() {
	$(this).parent().find("i").removeClass("noraml_pro");
	$(this).parent().find("i").addClass("error_pro");
	$(this).parent().find("#prompt_text").html("vin码由17位字符（包括英文字母和数字）组成！")
}).focusout(function() {
	$(this).parent().find("#prompt_text").html("您的真实车辆识别代码（vin）不能为空！")
});
/*月供还款*/
$("#month_offer_refund").focusin(function() {
	$(this).addClass("blue_border")
	$(this).parent().find("i").removeClass("noraml_pro");
	$(this).parent().find("i").addClass("error_pro");
	$(this).parent().find("#prompt_text").html("请输入您的真实月供还款")
}).focusout(function() {
	$(this).removeClass("blue_border")
	$(this).parent().find("#prompt_text").html("您的真实月供还款不能为空！")
});
/*房屋信息*/
/*房屋面积*/
$("#house_area").focusin(function() {
	$(this).addClass("blue_border")
	$(this).parent().find("i").removeClass("noraml_pro");
	$(this).parent().find("i").addClass("error_pro");
	$(this).parent().find("#prompt_text").html("请输入您的真实房屋面积")
}).focusout(function() {
	$(this).removeClass("blue_border")
	$(this).parent().find("#prompt_text").html("您的真实房屋面积不能为空！")
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
/*是否装修*/
$("#fitment .area_place").click(function() {
	$("#fitment .area_place").find("i").removeClass("true_icon");
	$(this).find("i").addClass("true_icon");
});
/*是否有房贷*/
$("#Mortgage .area_place").click(function() {
	$("#Mortgage .area_place").find("i").removeClass("true_icon");
	$(this).find("i").addClass("true_icon");
});
/*同意协议*/
$("#agree_deal .area_place").click(function() {
	$(this).find("i").toggleClass("true_icon");
	$("#proposer").stop(true, true).slideToggle("slow")
});
$("#agree_but button").click(function() {
	$(this).parent().parent().parent().hide("slow");
});


/*资料上传*/
$("#verify_take_1 tr").hover(function() {
	$(this).find(".mod_del").stop(true, true).fadeToggle("slow");
});

/*审核记录*/
$("#approve_state").hover(function() {
	$(".state_hide").stop(true, true).toggle("fast");
	$(this).toggleClass("state_down state_top");
});
/*我要提交借款--意向弹框*/
/*借款产品*/
$("#loan_deadline,#deadline").focusin(function() {
	$("#loan_deadline_menu").stop(true, true).toggle("slow");
}).focusout(function(){
	$("#loan_deadline_menu").stop(true, true).toggle("slow");
})
$("#loan_deadline_menu li").click(function() {
	$("#loan_deadline").html($(this).html());
	$(this).parent().hide("fast");
});
/*真实姓名--弹框*/
$("#pop .area_place").click(function() {
	$("#pop .area_place").find("i").removeClass("true_icon");
	$(this).find("i").addClass("true_icon");
});
/*借款金额*/
$("#loan_money").focusin(function() {
	$(this).addClass("blue_border")
}).focusout(function() {
	$(this).removeClass("blue_border")
})
$("#loan_money").focusin(function() {
	$(this).parent().find("i").removeClass("noraml_pro");
	$(this).parent().find("i").addClass("error_pro");
	$(this).parent().find("#prompt_text").html("请输入您的真实借款金额！")
}).focusout(function() {
	$(this).parent().find("#prompt_text").html("您的真实借款金额不能为空！")
});
/*借款期限*/
$("#loan_deadline1,#deadline1").focusin(function() {
	$("#loan_deadline_menu1").stop(true, true).toggle("slow");
}).focusout(function(){
	$("#loan_deadline_menu1").stop(true, true).toggle("slow");
})
$("#loan_deadline_menu1 li").click(function() {
	$("#loan_deadline1").html($(this).html());
	$(this).parent().hide("fast");
});
/*验证码*/
$("#checking").focusin(function() {
	$(this).parent().find("i").removeClass("noraml_pro");
	$(this).parent().find("i").addClass("error_pro");
	$(this).parent().find("#prompt_text").html("请输入您的真实验证码！")
}).focusout(function() {
	$(this).parent().find("#prompt_text").html("您的真实验证码不能为空！")
});
/*保存并继续--弹框*/
$(".refer_but").click(function() {
	$(".loan_popup_frame").slideDown("slow");
	$(".popup_frame_box").slideDown("slow");
});
$("#pop_but").click(function() {
	$(this).parent().parent().slideUp("slow").parent().delay(650).slideUp("slow")
});
$(".loan_popup_frame_bg").click(function() {
	$(this).parent().slideUp("slow");
});
$("#close_but i").click(function() {
	$(this).parent().parent().slideUp("slow").parent().delay(650).slideUp("slow")
});