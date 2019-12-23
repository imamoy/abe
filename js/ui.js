$(document).ready(function() {

	var $window = $(window),
		$this = $(this),
		$headerfixed = $('.header-fixed'),
		$aboutheader = $('.about_headerfix'),
		$goTop = $('.goTop');

	var scrollBottom = $(document).height() - $(window).height() - $(window).scrollTop();


	$goTop.click(function () {
		$("html,body").animate({
				scrollTop: 0
		}, 1300, 'easeInOutCubic');
		return false;
	});

	$('.about_btn1').click(function(){
		$("html,body").animate({
			scrollTop: 968 - 90
		}, 1300, 'easeInOutCubic');
		return false;
	});
	$('.about_btn2').click(function(){
		$("html,body").animate({
			scrollTop: 1838 - 90
		}, 1300, 'easeInOutCubic');
		return false;
	});
	$('.about_btn3').click(function(){
		$("html,body").animate({
			scrollTop: 2706 - 90
		}, 1300, 'easeInOutCubic');
		return false;
	});
	$('.about_btn4').click(function(){
		$("html,body").animate({
			scrollTop: 3576 - 90
		}, 1300, 'easeInOutCubic');
		return false;
	});

	$window.scroll(function(){
		if($this.scrollTop() > 90) {
			$headerfixed.css("top","0");
		} else {
			$headerfixed.css("top","");
		}

		if ($this.scrollTop() > 400) {
            $goTop.fadeIn("fast");
        } else {
            $goTop.stop().fadeOut("fast");
		}
		
		if ($this.scrollTop() > 2240) {
            $('.goTop_v1').css("bottom","424px");
        } else {
			$('.goTop_v1').css("bottom","");
		}
		

		if($this.scrollTop() > 1342) {
			$('.form-nav').addClass('active');
		} else {
			$('.form-nav').removeClass('active');
		}
		
		if($this.scrollTop() < (966 - 90)) {
			$aboutheader.css("top","");
			$aboutheader.removeClass('about_1');
			$aboutheader.removeClass('about_2');
			$aboutheader.removeClass('about_3');
			$aboutheader.removeClass('about_4');
		} else if($this.scrollTop() > (966 - 90) && $this.scrollTop() < (1836 - 90)) {
			$aboutheader.addClass('about_1');
			$aboutheader.removeClass('about_2');
			$aboutheader.removeClass('about_3');
			$aboutheader.removeClass('about_4');
		} else if($this.scrollTop() > (1836 - 90) && $this.scrollTop() < (2704 - 90)) {
			$aboutheader.addClass('about_2');
			$aboutheader.removeClass('about_1');
			$aboutheader.removeClass('about_3');
			$aboutheader.removeClass('about_4');
		} else if($this.scrollTop() > (2704 - 90) && $this.scrollTop() < (3574 - 90)) {
			$aboutheader.addClass('about_3');
			$aboutheader.removeClass('about_1');
			$aboutheader.removeClass('about_2');
			$aboutheader.removeClass('about_4');
		} else if($this.scrollTop() > (3574 - 90)) {
			$aboutheader.addClass('about_4');
			$aboutheader.removeClass('about_1');
			$aboutheader.removeClass('about_2');
			$aboutheader.removeClass('about_3');
		}
	});

	$('.menu-btn').click(function(){
		$('.menu').fadeIn();
	});

	$('.menu .close').click(function(){
		$('.menu').fadeOut();
	});
});
