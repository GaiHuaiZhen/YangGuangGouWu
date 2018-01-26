//头部引入

requirejs.config({
	paths:{
		jquery:"jquery-1.11.1.min",
		nav_top:"nav_top"
	}
})


//发起请求
require(["jquery","nav_top"],function(jquery,nav_top){
	
	
	
	//调用一个函数，nav_top里面的
live_top_left_dh()


//banner图

var timer=setInterval(autoPlay,2000)
var index=0
function autoPlay(){
	index++
	
	
	
	if(index==$("#navs_banner ul li").size()){
		index=0
	}
	$("#navs_banner i b").eq(index)
						.css("background-color","red")
						//.prev()
						.siblings()
						.css("background","white")
						
	
	
$("#navs_banner ul li").eq(index).find("img")
						
						.fadeIn(3000)
						.parent()
						.siblings("li")
						.find("img")
						.fadeOut(1000)
						//console.log(index)
	
		//console.log($("#navs_banner i b").css("background-color"))					
	

$("#navs_banner ul li").mouseenter(function(){
	clearInterval(timer)
	$("#navs_banner ul li").mouseleave(function(){
		clearInterval(timer)
		timer=setInterval(autoPlay,2000)
	})
})




//被我none的事件
$("#banner_left").click(function(){
	clearInterval(timer)
	
	index--
	index<0?index=2:index
//	console.log(index)
	$("#navs_banner i b").eq(index)
						.css("background-color","red")
						//.prev()
						.siblings()
						.css("background","white")
						
	
	
$("#navs_banner ul li").eq(index).find("img")
						
						.fadeIn()
						.parent()
						.siblings("li")
						.find("img")
						.fadeOut()
						
						
						
	
})
//
//$("#banner_right").click(function(){
//	index=++index
//})
//	


	}



//============banner的左侧菜单

	


$(".navs_left ul li").mouseenter(function(){
	//alert($(this).index())
	index=$(this).index()
	$(".navs_left_menu").eq(index).css({"display":"block"})
								.siblings(".navs_left_menu")
								.css("display","none")
	console.log(index)
	
	
	
	
})


$("#navs").mouseleave(function(){
	$(".navs_left_menu").css("display","none")
})




//1F的轮播图开始了，啊啊啊啊啊啊啊啊啊啊啊啊





	
})
