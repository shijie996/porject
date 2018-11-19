require(["config"], function(){
	require(["jquery", "header", "footer", "cookie"], function($,header,footer,cookie){

		//promise
		new Promise(function(resolve, reject){
			$("header").load("/html/component/header.html", function(){
				resolve();
			});
			$("footer").load("/html/component/footer.html", function(){
			});			
		}).then(function(){
			$("form").submit(function(e){
			var data = {
				username: $("#username").val(),
				password: $("#password").val()
			};
			$.ajax({
				method:"post",
				data: data,
				dataType:"json",
				url:"http://localhost/wamp/www/projectserver/api/login.php",
				success: function(res){	
					if(res.code === 1){
						$.cookie ("username",data.username,{
							path:"/"
						}) 
						alert("登录成功");
						location.href = "http://localhost:2333";
					}else{
						alert("登录失败");
					}
				}
			})
			e.preventDefault();
		})
		}).then(function(){
			header.llo();
		})
	})
})