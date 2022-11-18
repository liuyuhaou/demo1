$(function() {								
	let index = 0;	// 当前正在显示的图片
	
	setInterval(function() {
		
		$("#img .content .top img").eq(index).animate({"opacity": 0}, 2000)
		
		index++
		if(index >= $("#img .content .top img").length) {
			index = 0
		}
		
		$("#img .content .top img").eq(index).animate({"opacity": 1}, 2000)
		
	}, 3000)
});