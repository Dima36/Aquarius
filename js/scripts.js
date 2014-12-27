$(document).ready(function(){

	var hwSlideSpeed = 300;
	var hwTimeOut = 9000;
	var slideItem = $('.slider .item');

	//slider
	    slideItem.hide().eq(0).show();
	    var slideNum = 0;
	    var slideTime;
	    slideCount = slideItem.size();
	    var animSlide = function(arrow){
	        clearTimeout(slideTime);
	        slideItem.eq(slideNum).fadeOut(0);
	        if(arrow == "next"){
	            if(slideNum == (slideCount-1)){slideNum=0;}
	            else{slideNum++}
	            }
	        else if(arrow == "prev")
	        {
	            if(slideNum == 0){slideNum=slideCount-1;}
	            else{slideNum-=1}
	        }
	        else{
	            slideNum = arrow;
	            }
	        slideItem.eq(slideNum).fadeIn(hwSlideSpeed, rotator);
	        }

	    $('.next-slide').click(function(){
	        animSlide("next");
	        })
	    $('.prev-slide').click(function(){
	        animSlide("prev");
	        })

	    var pause = false;
	    var rotator = function(){
	    if(!pause){slideTime = setTimeout(function(){animSlide('next')}, hwTimeOut);}
	            }
	    $('.slider').hover(
	        function(){clearTimeout(slideTime); pause = true;},
	        function(){pause = false; rotator();
	        });
	    rotator();

	// menu
	$('nav a').live('click', function () {
		$('nav a').removeClass("active");
		$(this).addClass("active");
    });

	//slider resize
	$('.slider .item').live('click', function () {
		var newHeight = $(this).find(".right").height();
		if (newHeight > 245)
		{
			$(this).addClass("resized").css('height', newHeight + 10);
		}
    });

    $('.slider .item.resized').live('click', function () {
		$(this).removeClass("resized").css('height', 245);
    });

    // RadioButton
	$('.radioblock').find('.radio').each(function(){
		$(this).click(function(){
			// Заносим текст из нажатого дива в переменную
			var valueRadio = $(this).html();
			// Находим любой активный переключатель и убираем активность
			$(this).parent().find('.radio').removeClass('active');
			// Нажатому диву добавляем активность
			$(this).addClass('active');
			// Заносим значение объявленной переменной в атрибут скрытого инпута
			$(this).parent().find('input').val(valueRadio);
		});
	});

	// hide-show rules
	var rulesOpen = 400;

	$('.rules-wrap .title').live('click', function () {
		$(this).text("Закрыть правила игры").parent('.rules-wrap').addClass("open");
    });

    $('.rules-wrap.open .title').live('click', function () {
		$(this).text("Правила игры").parent('.rules-wrap').removeClass("open");
    });

	// time line
		var slidesNum = 0;
		var flagItem = $(".wrapper .flag");

		// add wrap width
		var slideWidth = $(".timeline .item").width();
		var slides = $(".timeline .item").size();
		var wrapWidth = slides * slideWidth;
		$(".timeline").css({"width": wrapWidth + "px", "left": 0});

		// add scale width
		var itemWidth = $(".scale .item").width();
		var scaleNumb = $(".scale .item").size();
		var scaleWidth = scaleNumb * itemWidth;
		var timelineScale = $(".timeline-scale .wrapper").css({"left": 0});
		$(".timeline-scale .wrapper .scale").css({"width": scaleWidth + "px"});

		//hide-show arrows
		var showArrows = function () {
			var as = slides - 1;
			if (slidesNum === 0) {
				$('#prev').hide();
			} else {
				$('#prev').show();
			}
			if (slidesNum == as) {
				$('#next').hide();
			} else {
				$('#next').show();
			}
		}
		showArrows();

		// click events
		$("#next").click(function () {
            slidesNum++;
        })
        $("#prev").click(function () {
            slidesNum--;
        })

		flagItem.click(function () {
            slidesNum = flagItem.index(this) +1;
        });

        $(".scale .item .year").click(function () {
            slidesNum = $(this).siblings().children().first().index('.event') + 1;
        });

		$("#next, #prev, .flag, .scale .item .year").click(function () {
			if (slidesNum == 0) {
				$(".scale .item").removeClass("active");
				$(".flag").removeClass("active");
				$(".event").removeClass("active");
			} else {
				$(".scale .item").removeClass("active");
				$(".event").removeClass("active")
						   .eq(slidesNum - 1)
						   .addClass("active")
						   .parent(".top")
						   .parent(".item")
						   .addClass("active");
				$(".flag").removeClass("active")
						  .eq(slidesNum - 1)
						  .addClass("active");
			}
			var eddStep = 47;
			showArrows();
			var positon = $(".timeline");
			if (slidesNum == 0) {
				positon.css({"left": -slideWidth * slidesNum + "px"});
				timelineScale.animate({left: 0}, 700);
			} else if (slidesNum == 1) {
				positon.css({"left": -slideWidth * slidesNum + "px"});
				timelineScale.animate({left: -(eddStep) + "px"}, 700);
			} else if (slidesNum == 2) {
				positon.css({"left": -slideWidth * slidesNum + "px"});
				timelineScale.animate({left: -(itemWidth * (slidesNum - 1) + eddStep) + "px"}, 700);
			} else if (slidesNum == 3) {
				positon.css({"left": -slideWidth * slidesNum + "px"});
				timelineScale.animate({left: -(itemWidth * (slidesNum - 1) + eddStep) + "px"}, 700);
			} else if (slidesNum == 4) {
				positon.css({"left": -slideWidth * slidesNum + "px"});
				timelineScale.animate({left: -(itemWidth * (slidesNum - 1) + eddStep) + "px"}, 700);
			} else if (slidesNum == 5) {
				positon.css({"left": -slideWidth * slidesNum + "px"});
				timelineScale.animate({left: -(itemWidth * (slidesNum - 1) + eddStep) + "px"}, 700);
			} else if (slidesNum == 6) {
				positon.css({"left": -slideWidth * slidesNum + "px"});
				timelineScale.animate({left: -(itemWidth * (slidesNum - 1) + eddStep) + "px"}, 700);
			} else if (slidesNum == 7) {
				positon.css({"left": -slideWidth * slidesNum + "px"});
				timelineScale.animate({left: -(itemWidth * (slidesNum - 1) + eddStep) + "px"}, 700);
			} else if (slidesNum == 8) {
				positon.css({"left": -slideWidth * slidesNum + "px"});
				timelineScale.animate({left: -(itemWidth * (slidesNum - 1) + eddStep) + "px"}, 700);
			} else if (slidesNum == 9) {
				positon.css({"left": -slideWidth * slidesNum + "px"});
				timelineScale.animate({left: -(itemWidth * (slidesNum - 1) + eddStep) + "px"}, 700);
			} else if (slidesNum == 10) {
				positon.css({"left": -slideWidth * slidesNum + "px"});
				timelineScale.animate({left: "-1847px"}, 700);
			} else if (slidesNum == 11) {
				positon.css({"left": -slideWidth * slidesNum + "px"});
				timelineScale.animate({left: "-1890px"}, 700);
			} else if (slidesNum == 12) {
				positon.css({"left": -slideWidth * slidesNum + "px"});
				timelineScale.animate({left: "-1934px"}, 700);
			} else if (slidesNum == 13) {
				positon.css({"left": -slideWidth * slidesNum + "px"});
				timelineScale.animate({left: "-1977px"}, 700);
			}
			// 1999
			else if (slidesNum == 14) {
				positon.css({"left": -slideWidth * slidesNum + "px"});
				timelineScale.animate({left: "-2115px"}, 700);
			}
			// 2000
			else if (slidesNum == 15) {
				positon.css({"left": -slideWidth * slidesNum + "px"});
				timelineScale.animate({left: "-2289px"}, 700);
			} else if (slidesNum == 16) {
				positon.css({"left": -slideWidth * slidesNum + "px"});
				timelineScale.animate({left: "-2358px"}, 700);
			}

			 else if (slidesNum == 17) {
				positon.css({"left": -slideWidth * slidesNum + "px"});
				timelineScale.animate({left: "-2496px"}, 700);
			} else if (slidesNum == 18) {
				positon.css({"left": -slideWidth * slidesNum + "px"});
				timelineScale.animate({left: "-2565px"}, 700);
			} else if (slidesNum == 19) {
				positon.css({"left": -slideWidth * slidesNum + "px"});
				timelineScale.animate({left: "-2738px"}, 700);
			} else if (slidesNum == 20) {
				positon.css({"left": -slideWidth * slidesNum + "px"});
				timelineScale.animate({left: "-2895px"}, 700);
			} else if (slidesNum == 21) {
				positon.css({"left": -slideWidth * slidesNum + "px"});
				timelineScale.animate({left: "-2950px"}, 700);
			} else if (slidesNum == 22) {
				positon.css({"left": -slideWidth * slidesNum + "px"});
				timelineScale.animate({left: "-3004px"}, 700);
			} else if (slidesNum == 23) {
				positon.css({"left": -slideWidth * slidesNum + "px"});
				timelineScale.animate({left: "-3101px"}, 700);
			} else if (slidesNum == 24) {
				positon.css({"left": -slideWidth * slidesNum + "px"});
				timelineScale.animate({left: "-3157px"}, 700);
			} else if (slidesNum == 25) {
				positon.css({"left": -slideWidth * slidesNum + "px"});
				timelineScale.animate({left: "-3211px"}, 700);
			} else if (slidesNum == 26) {
				positon.css({"left": -slideWidth * slidesNum + "px"});
				timelineScale.animate({left: "-3297px"}, 700);
			} else if (slidesNum == 27) {
				positon.css({"left": -slideWidth * slidesNum + "px"});
				timelineScale.animate({left: "-3340px"}, 700);
			} else if (slidesNum == 28) {
				positon.css({"left": -slideWidth * slidesNum + "px"});
				timelineScale.animate({left: "-3383px"}, 700);
			} else if (slidesNum == 29) {
				positon.css({"left": -slideWidth * slidesNum + "px"});
				timelineScale.animate({left: "-3425px"}, 700);
			} else if (slidesNum == 30) {
				positon.css({"left": -slideWidth * slidesNum + "px"});
				timelineScale.animate({left: "-3504px"}, 700);
			} else if (slidesNum == 31) {
				positon.css({"left": -slideWidth * slidesNum + "px"});
				timelineScale.animate({left: "-3547px"}, 700);
			} else if (slidesNum == 32) {
				positon.css({"left": -slideWidth * slidesNum + "px"});
				timelineScale.animate({left: "-3590px"}, 700);
			} else if (slidesNum == 33) {
				positon.css({"left": -slideWidth * slidesNum + "px"});
				timelineScale.animate({left: "-3632px"}, 700);
			}

			// 2007
			else if (slidesNum == 34) {
				positon.css({"left": -slideWidth * slidesNum + "px"});
				timelineScale.animate({left: "-3737px"}, 700);
			} else if (slidesNum == 35) {
				positon.css({"left": -slideWidth * slidesNum + "px"});
				timelineScale.animate({left: "-3808px"}, 700);
			}

			// 2008
			else if (slidesNum == 36) {
				positon.css({"left": -slideWidth * slidesNum + "px"});
				timelineScale.animate({left: "-3917px"}, 700);
			} else if (slidesNum == 37) {
				positon.css({"left": -slideWidth * slidesNum + "px"});
				timelineScale.animate({left: "-3960px"}, 700);
			} else if (slidesNum == 38) {
				positon.css({"left": -slideWidth * slidesNum + "px"});
				timelineScale.animate({left: "-4003px"}, 700);
			} else if (slidesNum == 39) {
				positon.css({"left": -slideWidth * slidesNum + "px"});
				timelineScale.animate({left: "-4046px"}, 700);
			}

			// 2009
			else if (slidesNum == 40) {
				positon.css({"left": -slideWidth * slidesNum + "px"});
				timelineScale.animate({left: "-4125px"}, 700);
			} else if (slidesNum == 41) {
				positon.css({"left": -slideWidth * slidesNum + "px"});
				timelineScale.animate({left: "-4168px"}, 700);
			} else if (slidesNum == 42) {
				positon.css({"left": -slideWidth * slidesNum + "px"});
				timelineScale.animate({left: "-4211px"}, 700);
			} else if (slidesNum == 43) {
				positon.css({"left": -slideWidth * slidesNum + "px"});
				timelineScale.animate({left: "-4254px"}, 700);
			} else if (slidesNum == 44) {
				positon.css({"left": -slideWidth * slidesNum + "px"});
				timelineScale.animate({left: "-4343px"}, 700);
			} else if (slidesNum == 45) {
				positon.css({"left": -slideWidth * slidesNum + "px"});
				timelineScale.animate({left: "-4399px"}, 700);
			} else if (slidesNum == 46) {
				positon.css({"left": -slideWidth * slidesNum + "px"});
				timelineScale.animate({left: "-4454px"}, 700);
			} else if (slidesNum == 47) {
				positon.css({"left": -slideWidth * slidesNum + "px"});
				timelineScale.animate({left: "-4601px"}, 700);
			} else if (slidesNum == 48) {
				positon.css({"left": -slideWidth * slidesNum + "px"});
				timelineScale.animate({left: "-4758px"}, 700);
			} else if (slidesNum == 49) {
				positon.css({"left": -slideWidth * slidesNum + "px"});
				timelineScale.animate({left: "-4812px"}, 700);
			} else if (slidesNum == 50) {
				positon.css({"left": -slideWidth * slidesNum + "px"});
				timelineScale.animate({left: "-4867px"}, 700);
			} else if (slidesNum == 51) {
				positon.css({"left": -slideWidth * slidesNum + "px"});
				timelineScale.animate({left: "-4939px"}, 700);
			} else if (slidesNum == 52) {
				positon.css({"left": -slideWidth * slidesNum + "px"});
				timelineScale.animate({left: "-4969px"}, 700);
			} else if (slidesNum == 53) {
				positon.css({"left": -slideWidth * slidesNum + "px"});
				timelineScale.animate({left: "-4999px"}, 700);
			} else if (slidesNum == 54) {
				positon.css({"left": -slideWidth * slidesNum + "px"});
				timelineScale.animate({left: "-5030px"}, 700);
			} else if (slidesNum == 55) {
				positon.css({"left": -slideWidth * slidesNum + "px"});
				timelineScale.animate({left: "-5060px"}, 700);
			} else if (slidesNum == 56) {
				positon.css({"left": -slideWidth * slidesNum + "px"});
				timelineScale.animate({left: "-5090px"}, 700);
			}
            // 2014
            else if (slidesNum == 57) {
				positon.css({"left": -slideWidth * slidesNum + "px"});
				timelineScale.animate({left: "-5143px"}, 700);
			} else if (slidesNum == 58) {
				positon.css({"left": -slideWidth * slidesNum + "px"});
				timelineScale.animate({left: "-5169px"}, 700);
			} else if (slidesNum == 59) {
				positon.css({"left": -slideWidth * slidesNum + "px"});
				timelineScale.animate({left: "-5195px"}, 700);
			} else if (slidesNum == 60) {
				positon.css({"left": -slideWidth * slidesNum + "px"});
				timelineScale.animate({left: "-5221px"}, 700);
			} else if (slidesNum == 61) {
				positon.css({"left": -slideWidth * slidesNum + "px"});
				timelineScale.animate({left: "-5247px"}, 700);
			} else if (slidesNum == 62) {
				positon.css({"left": -slideWidth * slidesNum + "px"});
				timelineScale.animate({left: "-5273px"}, 700);
			} else if (slidesNum == 63) {
				positon.css({"left": -slideWidth * slidesNum + "px"});
				timelineScale.animate({left: "-5299px"}, 700);
			}
        });


	$( ".timeline-scale .wrapper").draggable({ axis: "x" });
});
