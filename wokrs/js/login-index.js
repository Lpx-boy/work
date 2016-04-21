/*同意协议按钮*/
$(".margin_below label").click(function() {
	$(this).find("i").toggleClass("agree_true")
});
/*添加类/显示提示框*/
$(".prompt").hide();
$(".input_content").focusin(function() {
	$(this).toggleClass("blue_color");
	$(this).parent().find(".input_icon1").toggleClass("blue_color");
	$(this).parent().parent().find(".prompt").stop(true, true).slideDown("slow");
}).focusout(function() {
	$(this).toggleClass("blue_color");
	$(this).parent().find(".input_icon1").toggleClass("blue_color");
	//$(this).parent().parent().find(".prompt").stop(true,true).slideUp("slow");验证成功提示框消失
});
/*注册表单验证*/
$(document).ready(function() {
	$("#input1").focusin(function() {

		$(this).parent().parent().find(".prompt_content").html("请输入您的用户名！")
		var a = $("#prompt1").width();
		$(this).parent().parent().find("#prompt1").css({
			left: -(a + 20)
		});
		/*移除red_color*/
		$(this).removeClass("red_color");
		$(this).parent().find(".input_icon1").removeClass("red_color");
	}).focusout(function() {

		$(this).parent().parent().find(".prompt_content").html("请输入6-20个字母、数字、下划线！")
		var a = $("#prompt1").width();
		$(this).parent().parent().find("#prompt1").css({
			left: -(a + 20)
		});
		/*添加red_color*/
		$(this).addClass("red_color");
		$(this).parent().find(".input_icon1").addClass("red_color");
	});
	$("#input2").focusin(function() {
		$(this).parent().parent().find(".prompt_content").html("请输入您的真实邮箱地址！")
		var b = $("#prompt2").width();
		$(this).parent().parent().find("#prompt2").css({
			left: -(b + 20)
		});
		/*移除red_color*/
		$(this).removeClass("red_color");
		$(this).parent().find(".input_icon1").removeClass("red_color");
	}).focusout(function() {
		$(this).parent().parent().find(".prompt_content").html("您输入的邮箱地址有误！")
		var b = $("#prompt2").width();
		$(this).parent().parent().find("#prompt2").css({
			left: -(b + 20)
		});
		/*添加red_color*/
		$(this).addClass("red_color");
		$(this).parent().find(".input_icon1").addClass("red_color");
	});
	$("#input3").focusin(function() {
		$(this).parent().parent().find(".prompt_content").html("请输入您的登录密码！")
		var c = $("#prompt3").width();
		$(this).parent().parent().find("#prompt3").css({
			left: -(c + 20)
		});
		/*移除red_color*/
		$(this).removeClass("red_color");
		$(this).parent().find(".input_icon1").removeClass("red_color");
	}).focusout(function() {
		$(this).parent().parent().find(".prompt_content").html("请输入6-18位英文、数字组成的密码！")
		var c = $("#prompt3").width();
		$(this).parent().parent().find("#prompt3").css({
			left: -(c + 20)
		});
		/*添加red_color*/
		$(this).addClass("red_color");
		$(this).parent().find(".input_icon1").addClass("red_color");
	});
	$("#input4").focusin(function() {
		$(this).parent().parent().find(".prompt_content").html("请再次输入您的登录密码！")
		var d = $("#prompt4").width();
		$(this).parent().parent().find("#prompt4").css({
			left: -(d + 20)
		});
		/*移除red_color*/
		$(this).removeClass("red_color");
		$(this).parent().find(".input_icon1").removeClass("red_color");
	}).focusout(function() {
		$(this).parent().parent().find(".prompt_content").html("两次输入的密码不一致！")
		var d = $("#prompt4").width();
		$(this).parent().parent().find("#prompt4").css({
			left: -(d + 20)
		});
		/*添加red_color*/
		$(this).addClass("red_color");
		$(this).parent().find(".input_icon1").addClass("red_color");
	});
	$("#input5").focusin(function() {
		$(this).parent().parent().find(".prompt_content").html("请输入您的短信验证码！")
		var e = $("#prompt5").width();
		$(this).parent().parent().find("#prompt5").css({
			left: -(e + 20)
		});
		/*移除red_color*/
		$(this).removeClass("red_color");
		$(this).parent().find(".input_icon1").removeClass("red_color");
	}).focusout(function() {
		$(this).parent().parent().find(".prompt_content").html("您输入的验证码有误！")
		var e = $("#prompt5").width();
		$(this).parent().parent().find("#prompt5").css({
			left: -(e + 20)
		});
		/*添加red_color*/
		$(this).addClass("red_color");
		$(this).parent().find(".input_icon1").addClass("red_color");
	});
});
/*登录表单验证*/
$(document).ready(function() {

	$("#input6").focusin(function() {
		$(this).parent().parent().find(".prompt_content").html("请输入您的用户名/邮箱！")
		var f = $("#prompt6").width();
		$(this).parent().parent().find("#prompt6").css({
			left: -(f + 20)
		});
		/*移除red_color*/
		$(this).removeClass("red_color");
		$(this).parent().find(".input_icon1").removeClass("red_color");
	}).focusout(function() {
		$(this).parent().parent().find(".prompt_content").html("用户不存在！")
		var f = $("#prompt6").width();
		$(this).parent().parent().find("#prompt6").css({
			left: -(f + 20)
		});
		/*添加red_color*/
		$(this).addClass("red_color");
		$(this).parent().find(".input_icon1").addClass("red_color");
	});

	$("#input7").focusin(function() {
		$(this).parent().parent().find(".prompt_content").html("请输入您的登录密码！")
		var h = $("#prompt7").width();
		$(this).parent().parent().find("#prompt7").css({
			left: -(h + 20)
		});
		/*移除red_color*/
		$(this).removeClass("red_color");
		$(this).parent().find(".input_icon1").removeClass("red_color");
	}).focusout(function() {
		$(this).parent().parent().find(".prompt_content").html("你输入的密码错误！")
		var h = $("#prompt7").width();
		$(this).parent().parent().find("#prompt7").css({
			left: -(h + 20)
		});
		/*添加red_color*/
		$(this).addClass("red_color");
		$(this).parent().find(".input_icon1").addClass("red_color");
	});
});