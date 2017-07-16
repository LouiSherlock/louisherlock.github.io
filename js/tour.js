window.onload=function(){
	var open=document.getElementById('open_nav');
	var close=document.getElementById('close_nav');
 
	var bar1=document.getElementById('bar1');
	var bar2=document.getElementById('bar2');
	var bar3=document.getElementById('bar3');
	
	var onation=document.getElementsByClassName('nation');
	
	var book2=document.getElementById('book2');
	var fuli=document.getElementById('fuli');
	var fuli_text=document.getElementById('fuli_text');
	 
	function fun_ani(){
		
		var winHeight=document.documentElement.clientHeight;
		var pageHeight=document.body.offsetHeight;
		var scrollHeight=document.documentElement.scrollTop||document.body.scrollTop;
		
		if(scrollHeight>=(pageHeight-winHeight)*0.9){
			 bar1.className="bar1_ani";
			 bar2.className="bar2_ani";
			 bar3.className="bar3_ani";
		}
		else{
			 bar1.className="";
			 bar2.className="";
			 bar3.className="";
		}
		
		if(scrollHeight>=(pageHeight-winHeight)*0.4){

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
		
		
		if(scrollHeight>=(pageHeight-winHeight)*0.75){
			 book2.style.transform='translateX(0px)';
			 book2.style.opacity=1;
			 
			 fuli.style.transform='translateY(0px)';
			 fuli.style.opacity=1;
			 
			 fuli_text.style.transform='translateY(0px)';
			 fuli_text.style.opacity=1;
		}else{
			 book2.style.transform='translateX(-600px)';
			 book2.style.opacity=0;
			 
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


