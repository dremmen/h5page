$(function(){

	var oPage = $('.page');
	var circular = $('.circular');
	// 给百分比一个默认的高度
	var winHeight = $(window).height();
	if(winHeight<832){
		winHeight = 832;
	}
	$('.wrap').css('padding-top',(winHeight-832)/2);

	// 给图片预加载
	var imgArr = ['img/circular1.png','img/circular2.png','img/circular3.png','img/circular4.png','img/circular5.png','img/circular6.png','img/cir_text.png','img/cir_logo.png','img/arrow.png','img/bg1.png','img/body_bg.png','img/logo.png','img/music_btn.png','img/p1_text0.png','img/p1_text1.png','img/p1_text2.png','img/p2_bg1.png','img/p2_bg2.png','img/p2_border_text1.png','img/p2_border_text2.png','img/p2_border1.png','img/p2_border2.png','img/p2_border3.png','img/p2_text.png','img/p2_title1.png','img/p2_title2.png','img/p2_title3.png','img/p3_box1.png','img/p3_box2.png','img/p3_box3.png','img/p3_circular_border1.png','img/p3_circular_border2.png','img/p3_circular_border3.png','img/p3_circular_border4.png','img/p3_circular_text1.png','img/p3_circular_text2.png','img/p3_line.png','img/p3_text1.png','img/p3_text2.png','img/p4_glass1.png','img/p4_glass2.png','img/p4_text1.png','img/p4_text2.png','img/p4_title1.png','img/p4_title2.png','img/p5_text1.png','img/p5_text2.png','img/p5_text3.png','img/p5_text4.png','img/p6_img1.png','img/p6_img2.png','img/p6_img3.png','img/p6_title.png'];
	function preloadImg(imgArr){
		var step = 0;
		var length = imgArr.length;
		var step_num = $('.step_num');
		for(var i=0; i<length; i++){
			$('<img />').
				load(function(){
					step++;
					step_num.text(Math.round(step/length*100));
					if(step == length){
						$('.loading').hide();
						circular.eq(0).css({
							top: '14%',
							transform: 'scale(1)'
						});
						$('.cir_logo').fadeOut(600);
						$('.cir_text').delay(300).fadeIn(600);
						$('.logo').addClass('show');
						oPage.eq(1).addClass('show');
					}
				})
				.attr('src',imgArr[i]);
		}
	}
	preloadImg(imgArr);
	
	// 手触摸屏幕的时候触发事件
	var start_x = 0,
		start_y = 0,
		end_x = 0,
		end_y = 0,
		isTouchEnd = true,
		isOneTouch = true,
		prev_index = 0,
		page_index = 1;
		oMain = $('.main').get(0);

	oMain.addEventListener('touchstart',function(e){
		start_x = e.touches[0].clientX;
		start_y = e.touches[0].clientY;
		end_x = e.touches[0].clientX;
		end_y = e.touches[0].clientY;
	},false);

	oMain.addEventListener('touchmove',function(e){
		end_x = e.touches[0].clientX;
		end_y = e.touches[0].clientY;
		e.preventDefault();
	},false);

	oMain.addEventListener('touchend',function(e){	
		console.log(start_x,start_y,end_x,end_y);
		if(isTouchEnd){
			prev_index = page_index;
			if(start_y-end_y>50){
				isOneTouch = false;
				page_index++;
				if(page_index > oPage.length-1){
					page_index = 1;
				}
				otherPage();
			}else if(end_y - start_y > 50){//下滑
				if(isOneTouch){
					return;
				}
				prev_index = page_index;
				page_index--;
				if(page_index < 1){
					page_index = oPage.length-1;
				}
				otherPage();
			}
		}
	},false);

	function otherPage(){
		isTouchEnd = false;
		if(page_index!=1){
			circular.eq(0).animate({
				opacity: 0
			},100);
			$('.p2_bg1,.p2_bg2').addClass('show');
		}else if(page_index===1){	//?
			circular.eq(0).css({
				left: 0,
				top: '14%'			
			}).animate({
				top: '16%',
				opacity: 1,
			},1000);
			$('.cir_text').show();
		}

		oPage.eq(prev_index).removeClass('show').addClass('hide');

		oPage.eq(page_index).addClass('show');

		var timer = setTimeout(function (){
			$(".hide").removeClass("hide");
			isTouchEnd = true;
		},1200);

	}



})