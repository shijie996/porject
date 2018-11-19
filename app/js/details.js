require(["config"], function(){
	require(["jquery", "tools","header", "footer","fdj"], function($,tools,header,footer,fdj){

		//promise
		new Promise(function(resolve, reject){
			$("header").load("/html/component/header.html", function(){
				resolve();
			});
			$("footer").load("/html/component/footer.html", function(){
			});
		
		}).then(function(){
			$(".boxx").fdj("4");
		})
	})
})