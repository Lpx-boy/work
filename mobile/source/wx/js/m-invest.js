var invest = $(".invest"),
				_spanInvest = $(".invest > span span"),
				_iInvest = $(".invest i"),
				investPull = $(".invest-pull"),
				_liInvest = $(".invest-pull > ul li"),
				_spanBody = $("body > span"),
				_liNav = $(".invest-nav > li"),
				_liNavLast = $(".invest-nav > li:last-of-type")
				invest.click(function(){
					_iInvest.addClass("item-all-icon");
					investPull.addClass("show");
					_spanBody.addClass("opacity-gray")
				})
				_liInvest.click(function(){
					var _cThis = $(this).html();
					_spanInvest.html(_cThis);
					_iInvest.removeClass("item-all-icon");
					investPull.removeClass("show");
					_spanBody.removeClass("opacity-gray")
				})
				_spanBody.click(function(){
					$(this).removeClass("opacity-gray");
					_iInvest.removeClass("item-all-icon");
					investPull.removeClass("show")
				})
				_liNav.click(function(){  
					$(this).addClass("pitch-on").siblings().removeClass()
				})
				_liNavLast.click(function(){
					$(this).find("i").toggleClass("upward-arrows")
				})