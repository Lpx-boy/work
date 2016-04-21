/*点击切换--找回内容*/
var forget1 = $("#forget_change span").eq(0);
var forget2 = $("#forget_change span").eq(1);
$("#forget_change span").click(function() {
	$("#forget_change span").removeClass();
	$(this).addClass("forget_left_blue");
});
	forget1.click(function(){
		$(".forget1,.forget2").stop(true, true).toggle("show")
	});
	forget2.click(function(){
		$(".forget1,.forget2").stop(true, true).toggle("show")
	});
/*input获得焦点*/
$(".input_content").focusin(function() {
	$(this).removeClass("red_color");
	$(this).parent().parent().find(".prompt").stop(true, true).slideDown("slow");
}).focusout(function() {
	$(this).toggleClass("red_color");
	$(this).parent().find(".input_icon1").toggleClass("blue_color");
	//$(this).parent().parent().find(".prompt").stop(true,true).slideUp("slow");验证成功提示框消失
});
/*input获取焦点--提示*/
$(".prompt").hide();
$(function() {
	/*手机号码*/
	$("#input1").focusin(function() {

		$(this).parent().parent().find(".prompt_content").html("手机必须是11位数字！")
		var a = $("#prompt1").width();
		$(this).parent().parent().find("#prompt1").css({
			right: -(a + 20)
		});
	}).focusout(function() {

		$(this).parent().parent().find(".prompt_content").html("请输入您的手机号码！")
		var a = $("#prompt1").width();
		$(this).parent().parent().find("#prompt1").css({
			right: -(a + 20)
		});
	});
	/*手机号码--验证码*/
	$("#input2").focusin(function() {

		$(this).parent().parent().find(".prompt_content").html("请输入手机验证码！")
		var b = $("#prompt2").width();
		$(this).parent().parent().find("#prompt2").css({
			right: -(b + 20)
		});
	}).focusout(function() {

		$(this).parent().parent().find(".prompt_content").html("您的手机验证码有误！")
		var b = $("#prompt2").width();
		$(this).parent().parent().find("#prompt2").css({
			right: -(b + 20)
		});
	});
	/*电子邮箱*/
	$("#input3").focusin(function() {

		$(this).parent().parent().find(".prompt_content").html("请输入您的电子邮箱！")
		var b = $("#prompt3").width();
		$(this).parent().parent().find("#prompt3").css({
			right: -(b + 20)
		});
	}).focusout(function() {

		$(this).parent().parent().find(".prompt_content").html("您的电子邮箱格式有误！")
		var b = $("#prompt3").width();
		$(this).parent().parent().find("#prompt3").css({
			right: -(b + 20)
		});
	});
	/*电子邮箱--验证码*/
	$("#input4").focusin(function() {

		$(this).parent().parent().find(".prompt_content").html("请输入邮箱验证码！")
		var b = $("#prompt4").width();
		$(this).parent().parent().find("#prompt4").css({
			right: -(b + 20)
		});
	}).focusout(function() {

		$(this).parent().parent().find(".prompt_content").html("您的邮箱验证码有误！")
		var b = $("#prompt4").width();
		$(this).parent().parent().find("#prompt4").css({
			right: -(b + 20)
		});
	});
})