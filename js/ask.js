
//划过glass i img

//var num=1
$(".glass dd i").mouseenter(function(){
	//alert()
	$(this).css("border","1px solid red")
					.siblings("i")
					.css("border","transparent")
	//console.log($(this).index())
	
	//num++
	//console.log(num)
	$(".glass dt img").eq($(this).index()).css("z-index","1")
						.siblings("img")
						.css("z-index","0")
	$(".glass_none img").eq($(this).index()).css("z-index","1")
						.siblings("img")
						.css("z-index","0")
	
})

$(".glass dt").mouseenter(function(){
	
	//右侧大图显示
	$(".glass_none").css("display","block")
	$(".glass dt p").css("display","block")
	//遮罩层显示
	
	
	$(".glass dt").mousemove(function(e){
		
		
		var e=e||event
	//e.css("cursor","pointer")
	
	//console.log(e.pageX-$(".glass dt p").width()/3)
	//遮罩层
	
	var x=e.pageX-$(".glass dt p").width()/3-$(".glass dt").offset().left  //这个是鼠标坐标减p的一半
	//console.log(x)
	var y=e.pageY-$(".glass dt p").height()/3-$(".glass dt").offset().top
	
	//$(".glass dt p").offset({left:x,top:y})   //设置移动
	
	
	//console.log($(".glass dt p").css("left"))
	
	
		//边界判断
	//var parX=parseInt($(".glass dt p").css("left"))
	
	//var parY=parseInt($(".glass dt p").css("top"))
	
//	$(".glass dt p").css("left")<0?$(".glass dt p").css("left")==0:($(".glass dt p").css("left")>117?$(".glass dt p").css("left")==117:$(".glass dt p").css("left"))

//console.log(parX)
	//x<0?x==0:(x>117?x==117:x)
//	x=x<0?x=0:(x>0?x=117:x)
//	y=y<0?y=0:(y>0?y=117:y)
	
	//y<0?y==0:(y>117?y==117:y)
	
	x = Math.min( 117 , Math.max(0,x) ) ;
 		y = Math.min( 117 , Math.max(0,y) ) ;
	
	$(".glass dt p").css({"left":x,"top":y})
	//$(".glass dt p").css("top",y)

	$(".glass_none img").css({"left":-x*3.22,"top":-y*2.22})
	
	//console.log(e.pageX-$(".glass dt p").width()/2)
	
	})
	
	
	//移出事件
	
	$(".glass dt").mouseleave(function(){
		
		$(".glass_none").css("display","none")
	$(".glass dt p").css("display","none")
	})
	
})


//购物车上面的加减按钮

$(".purchase_top_left").click(function(){
	//console.log($(".leteer").val())
	
	$(this).mousedown(function(){
		return false
	})
	var num=$(".leteer").val()
	--num
	num<0?num=0:num
	$(".leteer").val(num)
	
	window.getSelection().removeAllRanges()
	//document.selection.empty()
})


$(".purchase_top_right").click(function(){
	
	//点击是页面不允许被选中
	$(this).mousedown(function(){
		return false
	})
	//console.log($(".leteer").val())
	var num=$(".leteer").val()
	++num
	//num<0?num=0:num
	$(".leteer").val(num)
	window.getSelection().removeAllRanges()
	//document.selection.empty()
})



//页面不允许选中
//document.onmousedown = function (event){
//      if(event.target.tagName!="INPUT"){
//          return false;
//      }
//  }      


//吸顶效果
//$(document).scroll(function(){
//	
//	//console.log($(".details_right_top").offset().top)
//	//console.log($(document).scrollTop())
//	if($(document).scrollTop()>$(".details_right_top").offset().top){
////			$(".details_right_top").css({"position":"fixed","top":0,"background":"#fff","width":"960px"})
//		$(".details_right_top").css({"position":"fixed","top":0})
//		
////		$(".details_left .details_left_top h2").css({"position":"fixed","top":0,"width":218,"height":60,"background":"#fff","border":"2px solid #ddd","text-align":"center","line-height":"60px"}).empty().html("shipin")
//}else{
//	$(".details_right_top").css("position","static")
//}
//	
//})
$(document).scroll(function(){
	if($(document).scrollTop()>760){
		$(".details_right_top").css({"position":"fixed","top":0})
		$(".details_right_none").css("display","block")
	}else{
		$(".details_right_top").css("position","static")
		$(".details_right_none").css("display","none")
	}
	
	$(".name").html($(".leteer").val())
	$(".names").html(($(".leteer").val()*42).toFixed(2))
})
//console.log($(".details_right_top").offset().top)



//下方评论区的分页
$(".details_right_top").find("a").click(function(){
	//console.log($(this).index())
	//$(this).css("color","#000000").sibling().css("color","#008000")
	$(this).css("color","orangered").siblings().css("color","#000")
	
	if($(this).index()==0){
		$(".details_right_init").css("display","block")
		$(".details_right_bottom").css("display","block")
	}else{
		$(".details_right_init").css("display","none")
		$(".details_right_bottom").css("display","none")
	}
	
	//分页第二页
	if($(this).index()==1){
		$(".details_right_bottom_1").css("display","block")
	}else{
		$(".details_right_bottom_1").css("display","none")
	}
	
	//分页第三页
	
	if($(this).index()==2){
		$(".details_right_bottom_2").css("display","block")
	}else{
		$(".details_right_bottom_2").css("display","none")
	}
	
	//分页第四页
	
	if($(this).index()==3){
		$(".details_right_bottom_3").css("display","block")
	}else{
		$(".details_right_bottom_3").css("display","none")
	}
	
})


//留言功能

$(".pub").click(function(){
	var num=$(".import").html()//获取输入的东西
	//$(".import_bottom").append(num)
	
	//一个六位的随机字母
 function Num(){
	this.aa= Math.round(Math.random()*(122-65)+65)
}

	
	var str=""
	for (var i=0;i<6;i++) {
		var s=new Num()
		str+=String.fromCharCode(s.aa)
	}
	//console.log(str)
	
	var d=new Date().toLocaleString()
	
	$(".import_bottom").prepend(`${d}<p><em>${str}:</em>${num}</p><br/>`)
	$(".import").empty()
})




//console.log(s.aa)  //String.fromCharCode(num)
