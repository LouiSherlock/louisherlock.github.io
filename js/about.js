window.onload=function(){
	 var otext=document.getElementsByClassName('text');
	 var oimg=document.getElementsByClassName('img');
	 
	 var omenu_list=document.getElementsByClassName('menu_list');
	 
	 var oimg_item=document.getElementsByClassName('img_item');
	 
	 for (var i = 0; i < otext.length; i++) {
	 	otext[i].style.opacity=1;
	 	otext[i].style.transform='translateX(0px)';
	 }
	 for (var i = 0; i < oimg.length; i++) {
	 	oimg[i].style.opacity=1;
	 	oimg[i].style.transform='translateX(0px)';
	 }
	 
	
	
	 
	function fun_ani(){
		var winHeight=document.documentElement.clientHeight;
		
		var pageHeight=document.body.offsetHeight;
		var scrollHeight=document.documentElement.scrollTop||document.body.scrollTop;
		 
		if(scrollHeight>=(pageHeight-winHeight)*0.45){
			 for (var i = 0; i < omenu_list.length; i++) {
	 			omenu_list[i].style.opacity=1;
	 			omenu_list[i].style.transform='rotateX(0deg) rotateY(0deg) rotateZ(0deg)';
	 		}
		}else{
			for (var i = 0; i < omenu_list.length; i++) {
	 			omenu_list[i].style.opacity=0;
	 			omenu_list[i].style.transform='rotateX(90deg) rotateY(10deg) rotateZ(30deg)';
	 		}
		}
		
		if(scrollHeight>=(pageHeight-winHeight)*0.8){
			 for (var i = 0; i < omenu_list.length; i++) {
	 			oimg_item[i].style.opacity=1;
	 			oimg_item[i].style.transform='translateY(0px) rotateZ(0deg)';
	 		}
		}else{
			for (var i = 0; i < omenu_list.length; i++) {
	 			oimg_item[i].style.opacity=0;
	 			oimg_item[i].style.transform='translateY(100px) rotateZ(90deg)';
	 		}
		}
		 
		
	};
	
	 
	fun_ani();
	
	
	//返回顶部
	var Obtn=document.getElementsByClassName('back_top');
	
	var Interval=null;
	var isTop=true;
	
	function fun_backTop(){
		var osTop=document.documentElement.scrollTop||document.body.scrollTop;
		var pageHeight=document.documentElement.clientHeight;
		if(osTop>=pageHeight){
			Obtn[0].style.display='block';
		Obtn[0].style.opacity=1;
		}else{
			Obtn[0].style.display='none';
		}
		
		if(!isTop){
			clearInterval(Interval);
		}
		
		isTop=false;
	};
	
	fun_backTop();
	
	window.onscroll=function(){
		fun_backTop();
		fun_ani();
	};
	
	Obtn[0].onclick=function(){ 
		Interval=setInterval(function(){
			var osTop=document.documentElement.scrollTop||document.body.scrollTop;
			var isSpeed=Math.floor(-osTop/10)
			
			document.documentElement.scrollTop=document.body.scrollTop=osTop+isSpeed;
			
			isTop=true;
			if(osTop==0){
				clearInterval(Interval);
			}
			
		},30);
	};
	
	
	
	 
};


