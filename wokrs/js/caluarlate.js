$(function() {
	/******checkbox单选按钮 ******/
	$("input[name=type]").click(function() {
		$("input[name=type]").removeAttr("checked");
		$(this).prop("checked", true);

	});
	/**计算器**/

	/*********************重置按钮*************/
	$(".inv_reset").click(function() {
		$("#paycontent").empty();
		$(".result-account span[id*='span']").empty();
		$(".validate").empty();
		$(".required").empty();

	});

	/*******************计算按钮****************/
	$(".inv_calculate").click(function() {
		//每次点击计算都刷新数据
		$("#paycontent").empty();
		$(".result-account span[id*='span']").empty();

		var money = $("#inv_count").val(); //投资金额
		var liv = $("#yearper").val(); //年化利率
		var qixian = $("#loaddate").val(); //借款期限
		var type = $("input[name=type]:checked").val(); //收款方式

		if (money <= 0) {

			$("#inv_count").addClass("required").focus();

			$(".r1").show("fast");
			return;
		}
		if (liv <= 0) {
			$("#yearper").addClass("required").focus();
			$(".r2").show("fast");
			return;
		}
		if (qixian <= 0 || qixian >= 13) {
			$("#loaddate").addClass("required").focus();
			$(".r3").show("fast");
			return;
		}

		//填写成功删除警告样式
		$(".validate").empty();
		$(".inv_main_text").removeClass("required");
		// 填写成功切换样式
		$(".easyicon").hide();
		$(".paytable").show();

		// 收益计算器公式
		var m = parseFloat(parseInt(money) * parseInt(liv) / 100 / 12).toFixed(2); //type=1每月收款

		var total = parseFloat(m * qixian + parseInt(money)).toFixed(2);

		var mmonery = parseFloat(parseFloat(m).toFixed(2) + parseFloat(money)).toFixed(2); //每月付息
		switch (parseInt(type)) {
			case 1:
				var r = 1;

				for (var i = qixian; i > 0; i--) {

					// console.log(m);
					if (i == 1) {
						/************计算结果表***********/
						$("#span1").append(parseFloat(qixian * mmonery) + parseInt(qixian));
						$("#span2").append(qixian * mmonery);
						$("#span3").append(mmonery);
						/*********收款时间表*********/
						$("#paycontent").append("<tr><td>" + r + "</td><td>" + mmonery + "</td><td>" + parseFloat(money).toFixed(2) + "</td><td>" + parseFloat(m).toFixed(2) + "</td><td>" + (total - m * r - money).toFixed(2) + "</td></tr>");
					} else {
						$("#paycontent").append("<tr><td>" + r + "</td><td>" + parseFloat(m).toFixed(2) + "</td><td>0</td><td>" + parseFloat(m).toFixed(2) + "</td><td>" + parseFloat(total - m * r).toFixed(2) + "</td></tr>");
					}
					r++;
				}

				break;
			case 2:
				var ben = (money / parseInt(qixian)).toFixed(2);

				/************计算结果表***********/
				$("#span1").append(parseFloat(qixian * mmonery) + parseInt(qixian));
				$("#span2").append(qixian * mmonery);
				$("#span3").append(parseFloat(qixian * mmonery) + parseInt(qixian));

				for (var i = 0; i < qixian; i++) {

					var benm = parseFloat(m + ben);
					/*********收款时间表*********/
					$("#paycontent").append("<tr><td>" + (i + 1) + "</td><td>" + parseFloat(m + ben).toFixed(2) + "</td><td>" + parseFloat(ben).toFixed(2) + "</td><td>" + parseFloat(m).toFixed(2) + "</td><td>" + parseFloat(total - benm * (i + 1)).toFixed(2) + "</td></tr>");

				}
				break;
		}


	});
});
/*点击按钮显示/隐藏*/
$("#caluarlate_but").click(function() {
	$(".caluar_box").fadeIn("slow");
});
$(".caluar_close").click(function() {
	$(this).parent().parent().fadeOut("fast");
});
$(".caluar_bg").click(function(){
	$(this).parent().fadeOut("fast");
})
