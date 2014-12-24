$(document).ready(function(){
	$("#background").fadeIn(800);

	$.fn.toggleNavigation= function() {
		$("#container").toggleClass('container-pushed');
		$("#sidebar").toggleClass('sidebar-open');
		$("#menu").toggleClass("menu-hidden");
		if (document.body.style.overflow == 'hidden') {
			document.body.style.overflow = 'auto';
			$("#fade").css("display", "none");
		} else {
			document.body.style.overflow = 'hidden';
			window.setTimeout($(this).fadeOverlay, 500);
		}
	}

	$.fn.fadeOverlay = function() {
		$("#fade").addClass("fade-pushed");
		$("#fade").fadeIn(200).css("display","inline");
	}

	$.fn.click = function() {
		document.getElementById('fade').onclick = function() {
			$(this).toggleNavigation();
		}
	}

	$(window).on('scroll', function(){
		var curPos = $(window).scrollTop();
		// $('body').css('background-position', '0 -' + curPos * .1 + 'px');
		fadePanels(curPos);
	}).scroll();

	function fadePanels(curPos) {
		var panels = $('.panel');

		for (var i = 0; i < panels.length; i++) {
			var offsetTop = $(panels[i]).offset().top;
    var halfPanel = (($(panels[i]).height() + 80) / 3) // half the panel height + padding
    var offsetHalf = halfPanel + offsetTop;

    $(panels[i]).attr('data-scroll-top' , offsetTop);
    $(panels[i]).attr('data-scroll-half', offsetHalf);
    
    var j = (curPos - offsetHalf) / halfPanel;

    if (curPos > $(panels[i]).data('scroll-half')) {
    	$(panels[i]).css('opacity', 1 - (j));
    } else {
    	$(panels[i]).css('opacity', '1');
    }
}
}
// waypoints
var waypoint1 = $('#section-2').waypoint(function(down) {
	$('#about_title').addClass("animated fadeInDown");
	$('#about_description').addClass("animated fadeInUp");
}, {
  offset: '30%'
})

var waypoint2 = $('#section-2').waypoint(function(down) {
	$('#me').addClass("animated bounceIn");
}, {
})

});

// function toggleNavigation() {
// 	var sidebar = document.getElementById('sidebar');
// 	document.getElementById('container').classList.toggle('container-pushed');
// 	sidebar.classList.toggle('sidebar-open');
// 	document.getElementById('menu').classList.toggle('menu-hidden');
// 	if (document.body.style.overflow == 'hidden') {
// 		document.body.style.overflow = 'auto';
// 		document.getElementById('fade').style.display = 'none';
// 	} else {
// 		document.body.style.overflow = 'hidden';
// 		window.setTimeout(fadeOverlay, 500);
// 	}
// }

// function fadeOverlay() {
// 	document.getElementById('fade').classList.add('fade-pushed');
// 	document.getElementById('fade').style.display = 'inline';
// }

// function click() {
// 	document.getElementById('fade').onclick = function() {
// 		toggleNavigation();
// 	}
// }