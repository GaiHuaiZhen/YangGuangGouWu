//头部引入

requirejs.config({
	paths:{
		jquery:"jquery-1.11.1.min",
		nav_top:"nav_top",
		F1play:"F1play",
		stairs_1F_header_menu_play:"stairs_1F_header_menu_play"
	}
})


//发起请求
require(["jquery","nav_top","F1play","stairs_1F_header_menu_play"],function(jquery,nav_top,F1play,stairs_1F_header_menu_play){
	
	
	
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
	
	
	
	
	
})


$("#navs").mouseleave(function(){
	$(".navs_left_menu").css("display","none")
})



//1Fplay调用

stairs_1F_inner_play()


//调用选项卡

stairs_1F_header_menu_plays()
//老子记住了，json文件里一定别加备注，加了就boom
//window.onload=function(){
//	$.ajax({
//					type:"get",
//					url:"js/menu_play.json",
//					//dataType:"json",
//					success:function(res){
//						console.log(res)
//						
//						
//						
//					}
//				})
//}



//楼梯效果


$(document).scroll(function(){
	//alert()
	if(
		$(document).scrollTop()>150
	){
		$(".fixed_ul").css("display","block")
		
		
		
	}else{
		$(".fixed_ul").css("display","none")
	}
	
	//console.log($(".stairs_1F").eq(0).offset().top-$(document).scrollTop())
	
	//要记住jq没有offsetTop,有的是offset().top, 因为jq出来的值是一个json，是个对象。可以直接offset（）全部出来，然后选
	
		for( var i = 0 ; i < $(".stairs_1F").length ; i++ ){
			if( Math.abs( $(".stairs_1F").eq(i).offset().top-$(document).scrollTop() ) < $(".stairs_1F").eq(i).height()/2 ){
				$(".fixed_ul li").eq(i).css("background","red");
			}else{
				$(".fixed_ul li").eq(i).css("background","white");
			}
		}
		
		//上面那个是楼层，下面这个是会员专享活动
		
		if( Math.abs( $(".member").eq(0).offset().top-$(document).scrollTop() ) < $(".member").eq(0).height()/2 ){
				$(".fixed_ul li").eq(1).css("background","red");
			}else{
				$(".fixed_ul li").eq(1).css("background","white");
			}
	
	
})

//点击楼层号


$(".fixed_ul li").click(function(){
	//alert($(this).index())
	$(this).css("background","red")
			.siblings()
			.css("background","white")
	//这个是$(".stairs_1F")楼层的点击
	if($(this).index()==0){
		$("html,body").scrollTop( $(".stairs_1F").eq($(this).index()).offset().top )
	}
	
	
	//这个是$(".member")会员专享活动的点击
	if($(this).index()==1){
		$("html,body").scrollTop( $(".member").eq(0).offset().top )
	}
	
	if($(this).index()==2){
		$("html,body").scrollTop(0)
	}
	
})

$(".sousuo").click(function(){
	location.href="html/ask.html"
})

})