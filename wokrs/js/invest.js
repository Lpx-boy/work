/*我要投资 选项按钮*/
$("#om_line_1 dd").click(function() {
	$("#om_line_1 dd").removeClass("om_color");
	$(this).addClass("om_color");
});
$("#om_line_2 dd").click(function() {
	$("#om_line_2 dd").removeClass("om_color");
	$(this).addClass("om_color");
});
$("#om_line_3 dd").click(function() {
	$("#om_line_3 dd").removeClass("om_color");
	$(this).addClass("om_color");
});
$("#om_line_4 dd").click(function() {
	$("#om_line_4 dd").removeClass("om_color");
	$(this).addClass("om_color");
});
$("#om_line_5 dd").click(function() {
	$("#om_line_5 dd").removeClass("om_color");
	$(this).addClass("om_color");
});
$("#om_line_6 dd").click(function() {
	$("#om_line_6 dd").removeClass("om_color");
	$(this).addClass("om_color");
});

/*综合排序*/
$(".invest_title_text ul li").mouseover(function() {
	$(".invest_title_text ul li i").addClass("color_arrows")
	$(".invest_title_text ul li").removeClass("title_first_li");
	$(this).addClass("title_first_li");
}).mouseout(function() {
	$(".invest_title_text ul li").removeClass("title_first_li");
	$(".invest_title_text ul li i").removeClass("color_arrowsUp color_arrowsDown");
}).click(function() {
	var click = $(".invest_title_text ul li").index(this);
	$(".invest_title_text ul li i").removeClass("color_arrows color_arrowsDown");
	$(".invest_title_text ul li i").eq(click).toggleClass("color_arrowsDown color_arrowsUp");
})