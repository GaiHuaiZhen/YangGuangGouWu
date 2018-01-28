
//1F的轮播图开始了，啊啊啊啊啊啊啊啊啊啊啊啊


function stairs_1F_inner_play(){
	
	var index=0
	var timer=setInterval(autoplay,2000)
	function autoplay(){
		
		
		
	$(".stairs_1F_inner_play_bottom").find("i").eq(index)
									.css("background","red")
									.siblings()
									.css("background","#777777")
								
								
								//console.log(index)
	$(".stairs_1F_inner_play").find("ul").eq(index)	.animate({"left":0},1000,function(){
		
		$(this).css("z-index",0).siblings("ul").css({"z-index":1,"left":333})
	})
								
								
		index++
		index==5?index=0:index						
								
							
}
	
	
	//划入div轮播停止
	
	$(".stairs_1F_inner_play").mouseenter(function(){
		
		clearInterval(timer)
		
		//显示按钮
		$(".stairs_1F_inner_play_left").css("display","block")
		$(".stairs_1F_inner_play_right").css("display","block")
		
		//alert($(this))
	})
	$(".stairs_1F_inner_play").mouseleave(function(){
		
		clearInterval(timer)
		timer=setInterval(autoplay,2000)
		//隐藏按钮
		
		$(".stairs_1F_inner_play_left").css("display","none")
		$(".stairs_1F_inner_play_right").css("display","none")
		
	})
	
	
	
	//划过下方
	$(".stairs_1F_inner_play_bottom").find("i").mouseenter(function(){
		
		clearInterval(timer)
		var index=$(this).index()
		//alert(index)
		$(".stairs_1F_inner_play_bottom").find("i").eq(index)
									.css("background","red")
									.siblings()
									.css("background","#777777")
		
		$(".stairs_1F_inner_play").find("ul").eq(index)	.animate({"left":0},1000,function(){
		
		$(this).css("z-index",0).siblings("ul").css({"z-index":1,"left":333})
	})
		
		
	})
	
	
	
	//点击两侧按钮
	
	$(".stairs_1F_inner_play_left").click(function(){
		
		clearInterval(timer)
		
		//var index=index
		index--
		index<1?index=1:index
		
		//console.log(index)
		
		//alert(index)
		$(".stairs_1F_inner_play_bottom").find("i").eq(index-1)
									.css("background","red")
									.siblings()
									.css("background","#777777")
		
		$(".stairs_1F_inner_play").find("ul").eq(index-1)	.animate({"left":0},1000,function(){
		
		$(this).css("z-index",0).siblings("ul").css({"z-index":1,"left":333})
	})
	}.bind(this))
	
	
	//右侧的按钮
	$(".stairs_1F_inner_play_right").click(function(){
		
		clearInterval(timer)
		
		//var index=index
		index++
		index>5?index=5:index
		
		console.log(index)
		
		//alert(index)
		$(".stairs_1F_inner_play_bottom").find("i").eq(index-1)
									.css("background","red")
									.siblings()
									.css("background","#777777")
		
		$(".stairs_1F_inner_play").find("ul").eq(index-1)	.animate({"left":0},1000,function(){
		
		$(this).css("z-index",0).siblings("ul").css({"z-index":1,"left":333})
	})
	}.bind(this))
	
	
}








	

