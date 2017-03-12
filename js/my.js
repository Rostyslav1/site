$(window).on('load', function () {
    var $preloader = $('#page-preloader'),
        $spinner   = $preloader.find('.spinner');
    $spinner.fadeOut();
    $preloader.delay(350).fadeOut('fast');
    $(".height-block").css("height", "0");
    new WOW().init();
});

$(document).ready(function(){
$("#header a, #to-id").mPageScroll2id();

$("#overlay-2").click(function(){
	$("#overlay-2").css("display", "none");
	$(".map-button").css("display", "none");
});

//Переключателі опису в Our Service

$("#bt_1, #bt_11").click(function(){
	$(".btn-describe").hide();
	$(".btn-row>div:first-child").fadeIn("slow");
});
$("#bt_2, #bt_22").click(function(){
	$(".btn-describe").hide();
	$(".btn-row>div:nth-child(2)").fadeIn("slow");
});
$("#bt_3, #bt_33").click(function(){
	$(".btn-describe").hide();
	$(".btn-row>div:nth-child(3)").fadeIn("slow");
});
$("#bt_4").click(function(){
	$(".btn-describe").hide();
	$(".btn-row>div:last-child").fadeIn("slow");
});

$('.services .bg-ring-href').click(function(){
	$('.services .bg-ring-href').removeClass("active_a");
	$(this).addClass("active_a");
});

$('.details .bg-ring-href').click(function(){
	$('.details .bg-ring-href').removeClass("active_a");
	$(this).addClass("active_a");
});

	//Зміна висоти картинки в header
	function wResize(){
		$("header, .bg-img").css("min-height", $(window).height());
		$(".jb").css("margin-top", $(window).height()/2-80);
		 
			$(".bg-ring-down").css("margin-top",$(window).height()/4);
		
			if($(window).width() < 360)
			{
				$(".bg-ring-down").css("margin-top",$(window).height()/7);
			}
		
		if($(window).width()>767 && $(window).width()<1920)
		{
			$(".img").css("height", $(window).width()/3.8);
		}
		if($(window).width()<768)
		{
			$(".img").css("height", $(window).width()/2.1);
		}
	};
	wResize();
	$(window).resize(function(){
		wResize();
	});
	
	//Переключатель в навігації

	var toggle = false;
	$(".toggle").click(function(){
		if(toggle == false )
		{
			$(".menu").slideDown("slow", function(){
				$("#header").removeClass("default");
				$("#overlay").addClass("overlay-active");
				$(".fafa").hide();
				$(".fafa2").fadeIn("fast");
				toggle = true;
			});
		}
		else
		{
			$(".menu").slideUp("slow", function(){
				$("#overlay").removeClass("overlay-active");
				toggle = false;
				if($(window).scrollTop()>0)
				{
					$("#header").addClass("default");
				}
				$(".fafa2").hide();
				$(".fafa").fadeIn("fast");
			});
		}

	});
		//Фіксація навігації з ефектами при скролі

		$("#header").removeClass("default");
		$(window).scroll(function(){
			if($(this).scrollTop() > 20 && toggle == false)
			{
				$("#header").addClass("default");
			}
			else
			{
				$("#header").removeClass("default");
			}
		});
});
