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
		page1 = $('.page_2');


	imgLoad(imgArr);
	function imgLoad(imgArrs){
		var imgL = imgArrs.length;
		for(var i=0;i<imgL;i++){
			$('<img />').load(function(){
					// logo.addClass('show');
					page1.addClass('show');
			}).attr('src',imgArrs[i]);
		}
	}




})