
//banner
function banner(){
	var oW = 0;
	var oBanner = document.getElementById("banner");
	var oUl = oBanner.getElementsByTagName('ul')[0];
	var alis= oUl.children;
	
	oW = document.documentElement.clientWidth;
	oUl.style.left  = -(alis[0].offsetWidth - oW)/2+'px'
	window.onresize=function(){
		oW = document.documentElement.clientWidth;
		oUl.style.left  = -(alis[0].offsetWidth - oW)/2+'px'
	}
	
	//oBanner.style.width = oW+'px';
};
 //banner()
function pp(){
	var oWrap = document.getElementById("big_box");//box
	var oUl=document.getElementById("content")//ul
	var aLis=oUl.getElementsByTagName("li");
	var oBtnLeft = document.getElementById("left_b");
	var oBtnRight = document.getElementById("right_b");
	var timer=null;
	var Num=3;
	oUl.innerHTML+=oUl.innerHTML;
	oUl.style.width=aLis[0].offsetWidth*aLis.length+'px';
	
	function autoPlay(){
		timer=setInterval(function(){
			if(oUl.offsetLeft==-(oUl.offsetWidth/2)){
				oUl.style.left=0;
			}else if(oUl.offsetLeft>0){
				oUl.style.left=-(oUl.offsetWidth/2)+'px';
			}
			oUl.style.left=oUl.offsetLeft+Num+'px';
		},30)
	};
	autoPlay();
	
	oBtnLeft.onclick=function(){
		Num=-3;	
	};
	
	oBtnRight.onclick=function(){
		Num=3;		
	};
	
	oWrap.onmouseover=function(){
		clearInterval(timer);
	};
	oWrap.onmouseout=function(){
		autoPlay();
	}
}
	pp();