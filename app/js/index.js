require(["config"], function(){
	require(["jquery", "tools", "template", "header", "footer","lunbo", "cookie"], function($,tools,template,header,footer,lunbo,cookie){

		//promise
		new Promise(function(resolve, reject){
			$("header").load("/html/component/header.html", function(){
				resolve();
			});
			$("footer").load("/html/component/footer.html", function(){	
			});
			$(".banner").load("/html/component/lunbo.html", function(){
				lunbo.nav();
			});
		}).then(function(){
			$.ajax({
				method: "get",
				url:"http://rap2api.taobao.org/app/mock/117264/projects",
				success: function(res){
					var html = template("pro-template",{products: res.products});
					$("#proList").html(html);
				}
			})
		}).then(function(){
			header.llo();
		})
	})
})