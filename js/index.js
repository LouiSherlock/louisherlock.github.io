var timer;
var pos = 0;


window.onload=function(){
	

 
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
	
	
//	图片滑动js代码
	
	var tab = document.getElementById('img_box_dm');
    var images = tab.getElementsByTagName('img'); 
    var spans=tab.getElementsByTagName('span');
    
    for (var i = 0; i < spans.length; i++) {
    	spans[i].style.left=1.2+i*1.8+'em';
    	spans[i].index=i;
    	spans[i].onclick=function()
    	{
    		for (var j = 0; j < spans.length; j++)
    		{
    			spans[j].style.background='rgba(255,255,255,1)';
    		}
    		for (var j = 0; j < spans.length; j++) 
    		{
    			images[j].style.opacity=0;
    		}
		    this.style.background='rgba(28,116,206,1)';
    		images[this.index].style.opacity=1;
    		pos=this.index;
        }
	}
        
        
    tab.onmouseover = function() {
        clearInterval(timer);
    }
    tab.onmouseout = function() {
        run(images,spans);
    }
    run(images,spans);
    
    
//  五通
    
    
    var item=document.getElementsByClassName('card_item');
    var itemWidth=item[0].offsetWidth;
    
    var left=document.getElementById('arrow_left');
    var right=document.getElementById('arrow_right');
    
    var itemLength=item.length;
    
    var flag=1;
	
	for (var i = 0; i < item.length; i++) {
		item[i].style.left=i*itemWidth+'px';
	}
	
	left.onclick=function(){
		if(item[0].offsetLeft==0){
			flag=1;
		}else{
			if(flag!=1){
				for (var i = 0; i < item.length; i++) {
					item[i].style.left=(2-flag+i)*itemWidth+'px';
				}
				flag--;
			}
		}
		
	}
	
	right.onclick=function(){
		
		if(item[itemLength-1].offsetLeft<=2*itemWidth){
			for (var i = 0; i < item.length; i++) {
				item[i].style.left=i*itemWidth+'px';
			}
			flag=1;
		}else{
			if(flag!=itemLength-2){
				for (var i = 0; i < item.length; i++) {
					item[i].style.left=(i-flag)*itemWidth+'px';
				}
				flag++;
			}	
			 
		}
		
		
	}
	
    
 
};


function run(images,spans) {
        timer = setInterval(function() {
			images[pos].style.opacity=0;
			spans[pos].style.background='rgba(255,255,255,1)';
			
			pos = ++pos == images.length ? 0 : pos;
		 
			images[pos].style.opacity=1;
			spans[pos].style.background='rgba(28,116,206,1)';
		}, 2300);
};
