window.onload=function(){
	var open=document.getElementById('open_nav');
	var close=document.getElementById('close_nav');
 
	var pic_cart=document.getElementById('pic1');
	
	var onation=document.getElementsByClassName('nation');
	
	var lipinghe=document.getElementById('lipinghe');
	var fuli=document.getElementById('fuli');
	var fuli_text=document.getElementById('fuli_text');
	
	 
	function fun_ani(){
		var winHeight=document.documentElement.clientHeight;
		var pageHeight=document.body.offsetHeight;
		var scrollHeight=document.documentElement.scrollTop||document.body.scrollTop;
		 
		if(scrollHeight>=(pageHeight-winHeight)*0.2){
			pic_cart.style.transform='translateX(0px)';
			pic_cart.style.opacity=1;
		}else{
			pic_cart.style.opacity=0;
			pic_cart.style.transform='translateX(-900px)';
		}
		
		if(scrollHeight>=(pageHeight-winHeight)*0.55){

			for (var i = 0; i < onation.length; i++) {
				onation[i].style.transform='translateY(0px)';
				onation[i].style.opacity=1;
			}
		}else{
			for (var i = 0; i < onation.length; i++) {
				onation[i].style.opacity=0;
			}
			onation[0].style.transform='translateY(200px)';
			onation[1].style.transform='translateY(-200px)';
			onation[2].style.transform='translateY(200px)';
		}
		
		
		if(scrollHeight>=(pageHeight-winHeight)*0.8){
			 lipinghe.style.transform='translateX(0px)';
			 lipinghe.style.opacity=1;
			 
			 fuli.style.transform='translateY(0px)';
			 fuli.style.opacity=1;
			 
			 fuli_text.style.transform='translateY(0px)';
			 fuli_text.style.opacity=1;
		}else{
			 lipinghe.style.transform='translateX(-600px)';
			 lipinghe.style.opacity=0;
			 
			 fuli.style.transform='translateY(-200px)';
			 fuli.style.opacity=0;
			 
			 fuli_text.style.transform='translateY(200px)';
			 fuli_text.style.opacity=0;
		 	 
		}
		 
		
	};
	 
	 
	fun_ani();
	
	window.onscroll=function(){
		fun_ani();
	};
	
	open.onclick=function(){
		nav.className="move_down";
	};
	
	close.onclick=function(){
		nav.className="move_up";
	};
};


