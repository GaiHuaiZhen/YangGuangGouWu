//这个是菜单上面的小动画

function live_top_left_dh(){
	var live=document.getElementsByClassName("live_top_left_dh")[0]
	var x=0
		var y=0
	var timer=setInterval(function(){
		
		if(x>=-200){
			
			if(x==-200){
				x=0
			}
			x=x-10
		live.style.left=x +"px"
	
		}
		if(y>=-200){
			if(y==-200){
				y=0
			}
			
			y=y-10
			live.style.top=y +"px"
			
		}
		
		//console.log(x)
	},100)
	
	
	

	
	
}
