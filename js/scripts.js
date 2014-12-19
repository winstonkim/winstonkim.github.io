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