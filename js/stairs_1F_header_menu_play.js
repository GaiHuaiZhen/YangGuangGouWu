//选项卡


//1F






function stairs_1F_header_menu_plays(){
	
	
	
	
		$(".stairs_1F_header_menu li:eq(1)").attr("ulist","list1")
		$(".stairs_1F_header_menu li:eq(2)").attr("ulist","list2")
		$(".stairs_1F_header_menu li:eq(3)").attr("ulist","list3")
		$(".stairs_1F_header_menu li:eq(4)").attr("ulist","list4")
	
	$(".stairs_1F_header_menu").find("li").mouseenter(function(){
	

		
		//console.log($(this).index())
		//alert()
		if($(this).index()==0){
			$(".stairs_1F_header_play").css("display","none")
			//return
		}else{
			
			
			if($(this).index()>0){
				
				
//				$(".stairs_1F_header_menu").find("li").eq(2)attr("uname","list2")
//				$(".stairs_1F_header_menu").find("li").eq(3)attr("uname","list3")
//				$(".stairs_1F_header_menu").find("li").eq(4)attr("uname","list4")
				
				$(".stairs_1F_header_play").css("display","block")
				
				var that=$(this)
				
				
				$.ajax({
					type:"get",
					url:"js/menu_play.json",
					//dataType:"json",
					success:function(res){
						//console.log(res)
						//alert(1)
//						
//console.log(aster)

//						switch(aster){
//							
//							//崩了崩了，这是根本读不到的。。。。用c3写出来用js动态切换吧

							//添加attr属性，读attr来找json文件16行
//						
//							
//						}
						
						var str=""
						
						
							
							//console.log(attr)
							//$(".stairs_1F_header_menu").find("li").
						
						/////疯了疯了疯了
						for (var i=0;i<res[that.attr('ulist')].name.length;i++) {
							
							str+="<li><a href='javascript:'><img src='img/"+res[that.attr('ulist')].src[i]+".jpg'><p>"+res[that.attr('ulist')].name[i]+"</p><b>"+res[that.attr('ulist')].price[i]+"</b></a></li>"
						}
						
						
						
					$(".stairs_1F_header_play_ul").empty().html(str)
						
						
//						
						
						//里面划过
						
						$(".stairs_1F_header_play_ul li").mouseenter(function(){
							//alert()
							$(this).fadeTo(0,1)
									.siblings()
							 		.fadeTo(100,.5)					
						
						})
						
						
					}
				})
				
				
				
				
				
			}
			
			
		}
		
		
		
		
		
		
		
		
		
		
		
	})
	
	
	
}
