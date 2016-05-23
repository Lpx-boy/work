/*投资管理--我的投资--导航文本*/
$(".acc_invest_nav li").click(function() {
	$(".acc_invest_nav li").removeClass("first_li")
	$(this).addClass("first_li");
	var inv = $(".acc_invest_nav li").index(this);
	$(".acc_invest_main").stop(true, true).hide("slow");
	$(".acc_invest_main").eq(inv).stop(true, true).show("slow")
});
/*投资管理--我的投资*/
$(".popup_frame").hide()
$(".last_td").find(".popup_close").click(function() {
	$(this).parent().stop(true, true).slideUp(300)
});
$(".last_td").find(".ret").click(function() {
	$(".last_td .popup_frame").slideUp("slow");
	$(this).parent().find(".popup_frame").stop(true, true).slideToggle("slow")
});
$(".popup_frame").mouseleave(function() {
	$(this).stop(true, true).slideUp("slow")
});
$("#subdate").click(function() {

	/*判断输入时间*/
	$(".datecontrol").each(function() {
		if ($(this).val() != "") {
			return true;
		} else {
			$(this).focus();
			return false;
		}

	});
});
/*投标方案*/
$(".first_li").click(function() {
	$(this).find(".arrows_icon i").toggleClass("arrows_down");
	$(this).parent().parent().find(".auto_content").stop(true, true).toggle("slow");
});
/*下拉*/
$(".pull").find("button").focusin(function() {
	$(this).parent().find(".pull_menu").stop(true, true).toggle("slow");
}).focusout(function() {
	$(this).parent().find(".pull_menu").stop(true, true).toggle("slow");
})
$(".pull_menu li").click(function() {
	$(this).parent().parent().find(".pull_center").html($(this).html());
	$(this).parent().hide("fast");
});
/*单选按钮*/
$(".acc_right_centre").find(".area_place").click(function() {
		$(this).parent().find("i").removeClass("error_pro");
		$(this).find("i").addClass("error_pro");
	})
	/*删除li*/
$(".operate span").eq(0).click(function() {
	$(this).parent().parent().remove()
})