$(function(){
	var imgArr = ['image/page1/page1-img1.png','image/page1/page1-img2.png','image/page2/page2-img1.png',
					'image/page2/page2-img2.png','image/page2/page2-img8.png','image/page2/page2-img9.png',
					'image/page2/page2-img10.png','image/page2/page2-img4.png','image/page2/page2-img5.png',
					'image/page2/page2-img6.png','image/page2/page2-img7.png','image/page2/page2-img3.png',
					'image/page3/page3-img1.png','image/page3/page3-img2.png','image/page3/page3-img3.png',
					'image/page3/page3-img4.png','image/page3/page3-img5.png','image/page3/page3-img6.png',
					'image/page3/page3-img7.png','image/page3/page3-img8.png','image/page3/page3-img9.png',
					'image/page3/page3-img10.png','image/page3/page3-img11.png','image/page4/page4-img1.png',
					'image/page4/page4-img2.png','image/page4/page4-img3.png','image/page4/page4-img4.png',
					'image/page4/page4-img5.png','image/page4/page4-img6.png','image/page4/page4-img7.png',
					'image/page5/page5-img2.png','image/page5/page5-img1.png','image/page5/page5-img3.png',
					'image/page5/page5-img4.png','image/page5/page5-img5.png','image/page5/page5-img6.png',
					'image/page5/page5-img7.png','image/page5/page5-img8.png','image/page6/page6-img1.png',
					'image/page6/page6-img2.png','image/page6/page6-img3.png','image/page6/page6-img4.png',
					'image/page6/page6-img5.png','image/page6/page6-img6.png','image/page6/page6-img7.png',
					'image/page6/page6-img8.png','image/page7/page7-img1.png','image/page7/page7-img2.png',
					'image/page7/page7-img3.png','image/page7/page7-img4.png','image/page7/page7-img5.png',
					'image/page8/page8-img1.png','image/page8/page8-img2.png','image/page8/page8-img3.png',
					'image/page8/page8-img4.png','image/page8/page8-img5.png','image/page8/page8-img6.png',
					'image/page8/page8-img7.png','image/page10/page10-img1.png','image/page10/page10-img2.png',
					'image/page10/page10-img3.png','image/page10/page10-img4.png','image/page10/page10-img5.png',
					'image/page10/page10-img6.png','image/page10/page10-img8.png','image/page11/page11-img1.png',
					'image/page11/page11-img2.png','image/page11/page11-img3.png','image/page11/page11-img4.png',
					'image/page11/page11-img5.png','image/page11/page11-img6.png','image/page11/page11-img7.png',
					'image/page11/page11-img8.png','image/page11/page11-img9.png',"image/page12/page12-img1.png",
					"image/page12/page12-img2.png","image/page12/page12-img3.png","image/page12/page12-img4.png",
					"image/page12/page12-img5.png","image/page12/page12-img6.png","image/page12/page12-img8.png",
					"image/page13/page13-img1.png","image/page13/page13-img2.png","image/page13/page13-img3.png",
					"image/page13/page13-img4.png","image/page13/page13-img5.png","image/page13/page13-img6.png",
					"image/page13/page13-img7.png","image/page13/page13-img8.png","image/page14/page14-img2.png",
					"image/page14/page14-img3.png","image/page14/page14-img4.png","image/page14/page14-img6.png",
					"image/page14/page14-img7.png","image/page14/page14-img8.png","image/page14/page14-img9.png",
					"image/page14/page14-img10.png","image/page14/page14-img11.png","image/page14/page14-img12.png",
					"image/page14/page14-img13.png","image/page15/page15-img1.png","image/page15/page15-img2.png",
					"image/page15/page15-img3.png","image/page15/page15-img4.png"];

	var logo = $('.logo'),
		page = $('.page'),
		page1_img2 = $('.page1-img2');

	imgLoad(imgArr);
	function imgLoad(imgArrs){
		var step = 0;
		var step_num = $('.step_num');
		var imgL = imgArrs.length;
		for(var i=0;i<imgL;i++){
			$('<img />').load(function(){
				step++;
				var long = Math.round(step/imgL*100);
				$('.loading-img').css('width',long*1.7 + 'px');
				step_num.text(long);
				if(step == imgL){
					$('.loading').hide();
					logo.addClass('show');
					page1_img2.addClass('show');
					page.eq(1).addClass('show');
				}
			}).attr('src',imgArrs[i]);
		}
	}

	var main = $('.main').get(0),
		start_x = 0,
		start_y = 0,
		end_x = 0,
		end_y = 0,
		prev_page = 0,
		next_page = 1;
		touch = false;

	main.addEventListener('touchstart',function(e){		
		start_x = e.touches[0].clientX;
		start_y = e.touches[0].clientY;
		end_x = e.touches[0].clientX;
		end_y = e.touches[0].clientY;
		touch = false;
		// console.log(start_x,start_y,end_x,end_y);
	},false)

	main.addEventListener('touchmove',function(e){
		end_x = e.touches[0].clientX;
		end_y = e.touches[0].clientY;
		e.preventDefault();
	},false)

	main.addEventListener('touchend',function(e){
		touch = true;
		var _y = end_y - start_y;
		if(_y<=-50){
			// 向上滑动
			next_page++;
			page.eq(next_page - 1).removeClass('show');
			if(next_page > page.length-1){
				next_page = 1;
			}
			pageMove(next_page);
		}else if(_y>=50){
			next_page --;
			page.eq(next_page + 1).removeClass('show');
			if(0 > next_page){
				next_page = page.length-1
			}
			pageMove(next_page);
		}
		console.log(_y);
	})

	function pageMove(index){
		if(!touch){
			return;
		}	
		page.eq(index).addClass('show');
		page1_img2.removeClass('show');
		logo.removeClass('show');
		if(index == 1 || index == 12){
			page1_img2.addClass('show');
			logo.addClass('show');			
		}
	}

})
