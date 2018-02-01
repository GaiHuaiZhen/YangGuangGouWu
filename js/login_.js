$("#btn").click(function(){
	
	if(getCookie("uname")==$("#uname").val()&&getCookie("upwd")==$("#upwd").val()){
		location.href="../index.html"
	}else{
		alert("无效的账户或密码")
	}
	
})


//获取cookie
function getCookie(key){
	//判断是否有cookie
	if( document.cookie ){
		var str = document.cookie;
		var arr = str.split("; ");
		for( var i = 0 ; i < arr.length ; i++ ){
			var item = arr[i].split("=");
			if( item[0] == key ){
				return item[1];//返回key对应的value值 是一个字符串
			}
		}
		//循环结束后   没有对应的key   就返回一个""
		return ""; //说明有cookie  但是没有key
	}
	
	//如果没有cookie  返回一个""
	return "";// 说明没有cookie
}
