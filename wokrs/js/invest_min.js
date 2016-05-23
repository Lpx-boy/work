

$(".title_border").mouseover(function(){
						$(".title_border").removeClass("title_first_dd")
						$(this).addClass("title_first_dd");
					var int=$(".title_border").index(this);
						$(".matter_centre").stop(true,true).fadeOut("fast");
						$(".matter_centre").stop(true,true).eq(int).slideDown("slow");
					});
					$(".top_right .imm_inv").click(function(){
					$(".int_butt").slideDown("slow");
					});
					$(".butt_int_box .box_top_close").click(function(){
						$(this).parent().parent().parent().hide("slow")
					});
					$(".butt_int_box .int_but_left").click(function(){
						$(this).parent().parent().parent().parent().fadeOut()
					});
					$(".butt_int_box .int_but_right").click(function(){
						$(this).parent().parent().parent().parent().slideUp("slow")
					});
					$(".black_opacity").click(function(){
						$(this).parent().slideUp("slow");
					})