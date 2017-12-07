var num = 0;
//预加载函数
function preload(imgarr,obj,callback){
	var count = 0;
	for (var i=0;i<imgarr.length;i++) {
		var img = new Image();
		img.onload = function(){
			//图片记载完成后执行
			count++;
			num = Math.floor(count/imgarr.length*100);
//			console.log(num);
			schedule.innerText = num + "%";
			obj.style.backgroundPositionY = -num + 10 + "px";
			if(count == imgarr.length){
				callback && callback();
			}
		}
		//图片链接赋值一定要放在后面
		//因为放在前面，有可能不触发onload事件
		img.src = imgarr[i];
	}
}
//preload(imgsrc,function(){
//	var load = document.getElementById("load");
//	load.remove();
//	indexAnimate();
//})


function loadimg(imgarr,callback){
	var count = 0;
	for (var i=0;i<imgarr.length;i++) {
		var img = new Image();
		img.onload = function(){
			count++;
			if(count == imgarr.length){
				callback && callback();
			}
		}
		img.src = imgarr[i];
	}
}


//音乐播放按钮
var mSrc1 = $("#music").attr("src");
var on_off = true; 
$("#music").get(0).addEventListener("touchstart",function(){
	var mSrc2 = $(this).attr("data-src");
	if(on_off == true){
		$("#music").attr("src",mSrc2);
		$("#music").css({
			animationPlayState: "paused",
		});
		$("audio").get(0).pause();
		on_off = false;
	}else{
		$("#music").attr("src",mSrc1);
		$("#music").css({
			animationPlayState: "running",
		});
		$("audio").get(0).play();
		on_off = true;
	}
})









