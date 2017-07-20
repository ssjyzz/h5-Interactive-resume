var myswiper=new Swiper(".swiper-container",{
			direction:"vertical",
			loop:true,
			keyboardControl:true,
			onInt:function(swiper){
				swiperAnimateCache(swiper);//隐藏动画元素
				swiperAnimate(swiper);//初始化完成开始动画

			},
			onSlideChangeEnd:function(swiper){
				swiperAnimate(swiper);
				if (swiper.activeIndex==4) {
					document.getElementById("line").style.animation="line 4s 1s linear forwards";
				}else{
					document.getElementById("line").style.animation="";
				};
			},
			
			

		});
var audio=document.getElementById("audio");
var music=document.getElementById("music");
audio.loop=true;
var n=0;
function control(){
	n++;
	if(n%2 != 0){
		audio.pause();
		console.log(n);
		music.style.animationPlayState="paused";
	}else{
		audio.play();
		console.log(n);
		music.style.animationPlayState="running";
	}
			// this.style.animationPlayState=""
}
