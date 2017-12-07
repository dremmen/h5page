//计时器
var s = 19;//定义时间
var ms = 100;
function timeStart(){
	timer = setInterval(function(){
		ms -= 5;
		if(ms < 0){
			ms = 95;
			s--;
		}
		if(s == 14 && ms == 95){
			$(".icon").attr("src","img/step3/icon2.png");
			$(".text").attr("src","img/step3/text1.png");
		}
		if(s == 9 && ms == 95){
			$(".icon").attr("src","img/step3/icon3.png");
			$(".text").attr("src","img/step3/text2.png");
		}
		if(s == 4 && ms == 95){
			$(".icon").attr("src","img/step3/icon4.png");
			$(".text").attr("src","img/step3/text3.png");
		}
		if((s == 0 && ms == 0) || s < 0){
			s=0;
			ms = 0;
			clearInterval(timer);
			$(".score").text(score);
			$(".top-text").text(nameArr[a-1]+"的青春补水的值为");
			scoreFn();
			$(".con").css({
				display: "none",
			})
			$(".end").css({
				display: "block",
			})
		}
		$(".time").text(s+"\""+((ms<10)?("0"+ms):ms));
	},50)
}
//手势动画
handTimer = setInterval(function(){
	$(".hand").animate({
		top: "50%",
		opacity: "1",
	},1000).animate({
		top: "49%",
		opacity: "0",
	},400).animate({
		top: "55%",
	})
},2200)
//点击事件
$(".click").one("mousedown",function(){
	timeStart();
	$(".hand").remove();
	clearInterval(handTimer);
})
$(".click").get(0).addEventListener("touchstart",function(){
	score += 1;
	var origin;
	var a1 = "50% 80%";
	var a2 = "50% 70%";
	var a3 = "50% 80%";
	if(a==1||a==5||a==6||a==10){
		origin = a1;
		$(".head").css({
			transformOrigin: a1,
		});
	}
	shake();
	return false;
})
//摇头效果
function shake(){
	setTimeout(function(){
		$(".head").css({
			transform:"rotate(-5deg)",
		})
	},60)
	setTimeout(function(){
		$(".head").css({
			transform:"rotate(-6deg)",
		})
	},90)
	setTimeout(function(){
		$(".head").css({
			transform:"rotate(-0deg)",
		})
	},150)
}
$(".endbtn").mousedown(function(){
	$(".end").css({
		display: "none",
	})
	$(".luck").css({
		display: "block",
	})
})
$("#submit").click(function(){
	var phoneNum = $("#phone").val();
	if(!/^(13[0-9]|14[0-9]|15[0-9]|18[0-9])\d{8}$/i.test(phoneNum))
	{
  		alert('请输入正确的手机号码');
	}else{
		$(".luck").css({
			display: "none",
		})
		$(".share").css({
			display: "block",
		})
	}
})
$(".rule-btn").click(function(){
	$(".luck").css({
		display: "none",
	})
	$(".luck-rule").css({
		display: "block",
	})
})
$(".close").click(function(){
	$(".luck-rule").css({
		display: "none",
	})
	$(".luck").css({
		display: "block",
	})
})

$(document).mousemove(function(){
	return false;
})
//文本框在获取焦点时被输入法撑开错误BUG处理
var wHigh = $("body").height();
$("#phone").on("focus",".text-input",function(){
	setTimeout(function(){
		$("#phone").height(wHigh);
	},20)
})
$("#phone").on("blur",".text-input",function(){
	setTimeout(function(){
		$("#phone").css("height","");
	},20)
})
//分数判断
function scoreFn(){
	if(score < 150){
		$(".endimg").attr("src","img/step3/end1.png");
	}else if(score <=200){
		$(".endimg").attr("src","img/step3/end2.png");
	}else{
		$(".endimg").attr("src","img/step3/end3.png");
	}
}