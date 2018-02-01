function rdrm(min,max){
		return Math.round(Math.random()*(max-min)+min)
	}//随机数区间
	
	
	//数字和字母在ASGl 48到122之间
	function getarr(){
		var arr=[]
		
		for(var i=0;i<4;i++){
			var num=rdrm(48,122);
			if(num>=58&&num<=64||num>=91&&num<=96){
				//console.log(num)
				i--
			}
			else{arr[i]=String.fromCharCode(num)
			//console.log(num)}
			
		}
			
	}
		var str=arr.join("")
		return str
		}
	
$(".verify").html(getarr())
$(".verify").mouseenter(function(){
	
	$(".verify_none").css("display","block")
	
	$(".verify_none").click(function(){
		$(".verify").html(getarr())
	})
	
	$(".verify_menu").mouseleave(function(){
		
		$(".verify_none").css("display","none")
		
	})
})


//注册验证
var flag1=true
var flag2=true
var flag3=true

$("#uname").blur(function(){
	
	var reg=/^[13,15,17,18,19]+\d{9}$/;
	var uname=$("#uname").val()
	
	
	//console.log(uname)
	if(reg.test(uname)){
		$(".uname_judge").css("display","none")
	}else{
		//$("#uname").css("position","relative").before(`<p>请输入正确的手机号</p>`)
		
		$(".uname_judge").css("display","block")
		flag1=false
	}
	
	
	
})

$("#veri").blur(function(){
	var reg=$(".verify").html().toLowerCase()//转字母大小写
	if($("#veri").val()==reg){
		$(".veri_judge").css("display","none")
	}else{
		$(".veri_judge").css("display","block")
		flag2=false
	}
	

})

$("#upwd").blur(function(){
	
	var reg=/\w{6,}/;
	var upwd=$("#upwd").val()
	if(reg.test(upwd)){
		$(".upwd_judge").css("display","none")
	}else{
		$(".upwd_judge").css("display","block")
		flag3=false
	}
	
	
})




//console.log($(":checked").prop("checked"))
//验证checked为true

$("#btn").click(function(){
	if(flag1&&flag2&&flag3&&$("#check").prop("checked")){
		
		//var uname=$("#uname").val()
		//alert()
		//存入cookie
		alert("注册成功")
  		setCookie("uname",$("#uname").val())
  		setCookie("upwd",$("#upwd").val())
  		location.href="login_.html"
  		//console.log(document.cookie)
  		
//		document.cookie="uname="+usename
//		console.log(document.cookie)
		
		//alert()
		//location.href="../index.html"
	}
	
})



//函数设置cookie
//设置cookie
function setCookie(key,value,day){
	if( day ){
		var d = new Date();
		d.setDate( d.getDate() + day );
		document.cookie = key + "=" + value + ";expires=" + d;
	}else{
		document.cookie = key + "=" + value;
	}
}


