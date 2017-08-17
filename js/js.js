$(function(){

	var smal_pic_i=0;//轮播图图片下标
	var news_pic_i=0;//轮播新闻图片下标
	var self_i=0;//个人中心
	var timer=null;//定时器
	var timer_news=null;

	// 收藏隐藏内容动画
	$('.collect,.hidder_box').hover(function(){
		$('.hidder_box').show();
		$('.arrow_box_c').show();
		$('.arrow_box_r').hide();
		$('.hidder_span_c_r').text("请登录，查看收藏内容");
		
	},function(){
		$('.hidder_box').hide();
	})
	
	
	// 记录隐藏内容动画
	$('.record,.hidder_box').hover(function(){
		$('.hidder_box').show();
		$('.arrow_box_c').hide();
		$('.arrow_box_r').show();
		$('.hidder_span_c_r').text("请登录，查看播放记录");
	},function(){
		$('.hidder_box').hide();
	})

	// APP下载内容动画
	$('.downloadAPP,.hidder_download').hover(function(){
		$('.hidder_download').show();
		$(".hidder_download").animate({
		    top:'64px'
		  });
	},function(){
		$('.hidder_download').hide();
	})

	//定时器播放轮播图
	$('.smal_pic li').mouseover(function(){
		clearInterval(timer);
		var backImg=$(this).find('img').attr('backImg');
		var backColor=$(this).find('img').attr('backColor');
		var background='url('+backImg+')'+'no-repeat center '+backColor;
		$('#focus_background').css({background:background});
		$(this).addClass('hover').siblings().removeClass('hover');
		smal_pic_i=$(this).index();
	})

	$('.smal_pic li').mouseout(function(){
		timer=setInterval(move,2000);
	})
	
	timer=setInterval(move,2000);

	//轮播图动画
	function move(){
		if (smal_pic_i>=8){
			smal_pic_i=0;
		}
		var backImg=$('.smal_pic li').eq(smal_pic_i).find('img').attr('backImg');
		var backColor=$('.smal_pic li').eq(smal_pic_i).find('img').attr('backColor');
		var background='url('+backImg+')'+'no-repeat center '+backColor;
		$('#focus_background').css({background:background});
		$('.smal_pic li').eq(smal_pic_i).addClass('hover').siblings().removeClass('hover');
		smal_pic_i++;
		console.log(smal_pic_i+'  ');
	}

	$('.dot li').mouseover(function(){
		clearInterval(timer_news);
		$(this).addClass('hover').siblings().removeClass('hover');
		news_pic_i=$(this).index();
		$('.news_box_left div .news_box_mini').eq(news_pic_i).show().siblings().hide();
	})
	$('.dot li').mouseover(function(){
		timer_news=setInterval(newsMove,2000);
	})
	timer_news=setInterval(newsMove,2000);
	//轮播新闻动画
	function newsMove(){
		if (news_pic_i>=3) {
			news_pic_i=0;
		}
		$('.dot li').eq(news_pic_i).addClass('hover').siblings().removeClass('hover');
		$('.news_box_left div .news_box_mini').eq(news_pic_i).show().siblings().hide();
		news_pic_i++;
	}

	//个人中心切换
	$('#self_box .news_sort_box .sortting a').mouseover(function(){
		self_i=$(this).index();
		$('#self_box .self_area div').eq(self_i).show().siblings().hide();
	})
})