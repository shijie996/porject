require(["config"], function(){
	require(["jquery", "header", "footer","cookie"], function($,header,footer,cookie){

		//promise
		new Promise(function(resolve, reject){
			$("header").load("/html/component/header.html", function(){
				resolve();
			});
			$("footer").load("/html/component/footer.html", function(){				
			});			
		}).then(function(){
			$("form").submit(function(e){
							var username = $("#username").val(),
								password = $("#password").val(),
								_password = $("#_password").val();
								
							var usernameReg = /^1[345789]\d{9}$/,		
								passwordReg = /^\d{6,10}$/;							
							
							var flag1,flag2,flag3;
							
							if(usernameReg.test(username)){
								flag1=true;								
							}else{
								alert("请输入正确的手机号");
							}
							if(passwordReg.test(password)){
								flag2=true;								
							}else{
								alert("密码格式错误");
							}							
							if(password === _password){
								flag3=true;								
							}else{
								alert("密码输入不一致")
							}																		
							if(flag1&&flag2&&flag3){								
								var data = {
									username: $("#username").val(),
									password: $("#password").val()
								};							
								$.ajax({								
									method:"post",
									data: data,
									dataType:"json",
									url:"http://localhost/wamp/www/projectserver/api/register.php",
									success: function(res){
										console.log("11111");
										if(res.code == 1){
											alert("恭喜您注册成功，即将为您跳转至登录页面")
											location.href = "http://localhost:2333/html/login.html";
										}else{
											alert("手机号已被注册")
										}
									}
								})
							}							
							e.preventDefault();
						})
		}).then(function(){
			header.llo();
		})
			
		
	})
})