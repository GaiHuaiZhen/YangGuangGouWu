//选项卡


//1F



function stairs_1F_header_menu_plays(){
	
	$.ajax({
					type:"get",
					url:"js/menu_play.json",
					//dataType:"json",
					success:function(res){
						console.log(res)
						alert(1)
						
						
					}
				})
	
	
	
	
	$(".stairs_1F_header_menu").find("li").mouseenter(function(){
	
	
		
		//console.log($(this).index())
		//alert()
		if($(this).index()==0){
			$(".stairs_1F_header_play").css("display","none")
			return
		}else{
			
			
			if($(this).index()>0){
				
				$(".stairs_1F_header_play").css("display","block")
				
				
				
				
				
			}
			
			
		}
		
		
		
		
		
		
		
		
		
		
		
	})
	
	
	
}
