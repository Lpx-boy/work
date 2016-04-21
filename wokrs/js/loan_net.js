/*标题*/
$("#real_name").focusin(function() {
	$(this).parent().find("i").removeClass("noraml_pro");
	$(this).parent().find("i").addClass("error_pro");
	$(this).parent().find("#prompt_text").html("请输入您的真实姓名！")
}).focusout(function() {

	$(this).parent().find("#prompt_text").html("真实姓名不能为空！")
	pattern.test($('#real_name').val());

});
/*总金额*/
$("#loan_money").focusin(function() {
	$(this).addClass("blue_border")
}).focusout(function() {
	$(this).removeClass("blue_border")
})
$("#loan_money").focusin(function() {
	$(this).parent().find("i").removeClass("noraml_pro");
	$(this).parent().find("i").addClass("error_pro");
	$(this).parent().find("#prompt_text").html("请输入您的真实总金额！")
}).focusout(function() {

	$(this).parent().find("#prompt_text").html("您的真实总金额不能为空！")
	pattern.test($('#real_name').val());

});
/*最小单位*/
$("#unit_center,#unit").focusin(function() {
	$("#unit_pull_menu").stop(true, true).toggle("slow");
}).focusout(function(){
	$("#unit_pull_menu").stop(true, true).toggle("slow");
})
$("#unit_pull_menu li").click(function() {

	$("#unit_center").html($(this).html());
	$(this).parent().hide("fast");
});
/*年化利率*/
$("#rate_center,#rate").focusin(function() {
	$("#rate_pull_menu").stop(true, true).toggle("slow");
}).focusout(function(){
	$("#rate_pull_menu").stop(true, true).toggle("slow");
})
$("#rate_pull_menu li").click(function() {

	$("#rate_center").html($(this).html());
	$(this).parent().hide("fast");
});
/*借款期限*/
$("#loan_deadline,#deadline").focusin(function() {
	$("#loan_deadline_menu").stop(true, true).toggle("slow");
}).focusout(function(){
	$("#loan_deadline_menu").stop(true, true).toggle("slow");
})
$("#loan_deadline_menu li").click(function() {

	$("#loan_deadline").html($(this).html());
	$(this).parent().hide("fast");
});
/*还款方式*/
$("#refund_text,#refund_way").focusin(function() {
	$("#refund_menu").stop(true, true).toggle("slow");
}).focusout(function(){
	$("#refund_menu").stop(true, true).toggle("slow");
})
$("#refund_menu li").click(function() {

	$("#refund_text").html($(this).html());
	$(this).parent().hide("fast");
});
/*资金用途*/
$("#fund_use").focusin(function() {
	$(this).parent().find("i").removeClass("noraml_pro");
	$(this).parent().find("i").addClass("error_pro");
	$(this).parent().find("#prompt_text").html("请输入您的真实资金用途！")
}).focusout(function() {

	$(this).parent().find("#prompt_text").html("您的真实资金用途不能为空！")

});
/*交易密码*/
$("#trade_code").focusin(function() {
	$(this).parent().find("i").removeClass("noraml_pro");
	$(this).parent().find("i").addClass("error_pro");
	$(this).parent().find("#prompt_text").html("请输入您的真实交易密码！")
}).focusout(function() {

	$(this).parent().find("#prompt_text").html("您的真实交易密码不能为空！")

});