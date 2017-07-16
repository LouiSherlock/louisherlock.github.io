window.onload=function(){
	var oflag=document.getElementById('flag');
	var flag=parseInt(oflag.innerHTML);
	//导航栏
	window.scrollTo(0,0);
	var ohead=document.getElementById('head');
	var otemp=document.getElementById('temp');
	window.onscroll=function(){
		var osTop=document.documentElement.scrollTop||document.body.scrollTop;
		if(osTop>10){
			ohead.style.width=100+'%';
			ohead.style.marginTop=0;
			ohead.style.backgroundColor="rgba(10,10,10,0.6)";
			otemp.style.width=1180+'px';
			otemp.style.margin='auto';
		}
		else{
			ohead.style.width=947+'px';
			ohead.style.marginTop=20+'px';
			switch(flag){
				case 1:
					ohead.style.backgroundColor="#83d34a";
					break;
				case 2:
					ohead.style.backgroundColor="#ff8f40";
					break;
				case 3:
					ohead.style.backgroundColor="#ff6068";
					break;
				case 4:
					ohead.style.backgroundColor="#bd5bc6";
					break;
			}
//			if(flag==1){
//				ohead.style.backgroundColor="#83d34a";
//			}else if(){
//				
//			}
//			ohead.style.backgroundColor="#E45C5F";
			otemp.style.width=940+'px';
		}
	};
	
	//滑动门
	
	var box=document.getElementById('view_more_box');
	
	var imgs=box.getElementsByTagName('div');
	
	var imgWidth=imgs[0].offsetWidth;
	
	var exposeWidth=160;
	
	var boxWidth=imgWidth+exposeWidth*(imgs.length-1); 
	
	box.style.width=boxWidth+'px';
	
	function initImgsPosition(){
			for(var  i=1; i<imgs.length;i++){
			imgs[i].style.left=imgWidth+exposeWidth*(i-1)+'px';
		}
	}
	initImgsPosition();
	
	var moveWidth=imgWidth-exposeWidth;
	
	for(var i=0;i<imgs.length;i++){
		
		imgs[i].index=i;
		
		imgs[i].onmouseover=function(){
			
			initImgsPosition();
			
			for(var j=1;j<=this.index;j++){
				
				imgs[j].style.left=parseInt(imgs[j].style.left)-moveWidth+'px';
			}
			
		};
	}
	
	
	
	
	
	
	
};
