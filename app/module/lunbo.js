define(["jquery"],function($){
	function Lunbo(){}
	Lunbo.prototype.nav = function(){
		$(function(){
		
		var $imgs = $("#div1 ul li"),
			$btns = $("#div1 ol li");
		var index = 0; 
		var flag = false; 
		var timer = null;
		
		$btns.click(function(){
			if(!flag){
				flag = true;
				$(this).addClass("ac").siblings().removeClass("ac");
				$imgs.eq(index).fadeOut();
				index = $(this).index();
				$imgs.eq(index).fadeIn(function(){
					flag = false;
				});
			}	
		})
		
		$("#goPrev").click(function(){
			if(!flag){
				flag = true;
				$imgs.eq(index).fadeOut();
				if(--index < 0){
					index = $imgs.length-1;
				}
				$btns.eq(index).addClass("ac").siblings().removeClass("ac");
				$imgs.eq(index).fadeIn(function(){
					flag = false;
				});
			}
		})
		
		$("#goNext").click(function(){
			if(!flag){
				flag = true;
				$imgs.eq(index).fadeOut();
				if(++index >= $imgs.length){
					index = 0;
				}
				$btns.eq(index).addClass("ac").siblings().removeClass("ac");
				$imgs.eq(index).fadeIn(function(){
					flag = false;
				});
			}
		})
		
		$("#div1").hover(function(){
			clearInterval(timer);
		},(function autoPlay(){
			timer = setInterval(function(){
				$("#goNext").trigger("click");
			},2000);
			return autoPlay;
		})());
		})
		
	}

	return new Lunbo();
})
