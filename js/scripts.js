// navbar	
$(window).scroll(function() {
	if($(this).scrollTop() > 50)
	{
		$('.navbar').addClass('opaque');
	}else {
		$('.navbar').removeClass('opaque');
	}
});

//smooth scroll

$(document).ready(function() {
	//navigation click actions
	$('.scroll-link').on('click',function(event){
		event.preventDefault();
		var sectionID = $(this).attr("data-id");
		scrollToID('#' + sectionID, 750);
	});
	//scroll to top action
	$('.scroll-top').on('click', function(event) {
		event.preventDefault();
		$('html, body').animate({scrollTop:0}, 'slow');
	});
	//mobile nav toggle
	$('#nav-toggle').on('click', function (event) {
		event.preventDefault();
		$('#main-nav').toggleClass("open");
	});
});

// scroll function
function scrollToID(id,speed){
	var offset = 50;
	var targetOffset = $(id).offset().top - offset;
	var mainNav = $('#main-nav');
	$('html,body').animate({scrollTop:targetOffset}, speed);
	if(mainNav.hasClass("open")) {
		mainNav.css("height", "1px").removeClass("in").addClass("collapse");
		mainNav.removeClass("open");
	}
}

if (typeof console === "undefined") {
	console = {
		log:function() { }
	}
}


$('a.popup-image').magnificPopup({
			type: 'image',
			image: {
				titleSrc: 'title',
				tError: 'The image could not be loaded.',
			}
		});

$('a.gallery').magnificPopup({
			type: 'image',
			gallery: {
				enabled: true,
				navigateByImgClick: true,
				preload: [0,1]
			},
			image: {
				titleSrc: 'title',
				tError: 'The image could not be loaded.',
			}
		});