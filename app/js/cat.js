require(["config"], function(){
	require(["jquery", "header", "footer", "cookie"], function($,header,footer,cookie){

		//promise
		new Promise(function(resolve, reject){
			$("header").load("/html/component/header.html", function(){
				resolve();
			});
			$("footer").load("/html/component/footer.html", function(){
			});			
		})		
	})
})