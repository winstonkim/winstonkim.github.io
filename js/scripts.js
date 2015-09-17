$(document).ready(function() {
	// array holding experience displayed on webpage
	var experience = ['calcentral', 'rescomp', 'koinrides', 'ets'];
	// current experience page number
	var currentNum;
	// boolean if on experience display pages
	var onExperience = false;

	// activate keydown functionality on experience display pages
	$('body').keydown(function(e) {
		if (onExperience) {
			// right arrow
			if (e.keyCode == 39) {
				nextPage();
			}
			// left arrow
			else if (e.keyCode == 37) {
				previousPage();
			}
			// esc button
			else if (e.keyCode == 27) {
				closePage();
			}
		}
	});

	// find better way to highlight navbar buttons rather than clicks
	$('.links a').click(function(event){
		if ($(this).attr('id') === 'resume'){
			return;
		}
		$('.links a').removeClass('active');
		$(this).addClass('active');
	});

	var currentID, className;

	// fades other images and adds description on hover
	var imageOnHover = function() {
		currentID = $(that).attr('id');
		className = $(that).attr('class');
		$('.' + className).addClass('fade');
		$('#' + currentID).removeClass('fade');
		$('#' + currentID + '-desc').removeClass('invisible');
	}

	// removes fade and description off hover
	var imageOffHover = function() {
		currentID = $(that).attr('id');
		className = $(that).attr('class');
		$('.' + className).removeClass('fade');
		$('#' + currentID + '-desc').addClass('invisible');
	}

	// activate hover effect on logos
	$('.logo').hover(
		function() {
			that = this;
			imageOnHover();
		},
		function(){
			imageOffHover();
		}
	);

	// activate hover effects on icons
	$('.icon').hover(
		function() {
			that = this;
			imageOnHover();
		},
		function(){
			imageOffHover();
		}
	);

	// reset next & previous on experience page
	var resetNextPrev = function() {
		$('#previous').removeClass('inactive').addClass('pointer');
		$('#next').removeClass('inactive').addClass('pointer');

		if (currentNum == 0){
			$('#previous').addClass('inactive').removeClass('pointer');
		}
		else if (currentNum == 3){
			$('#next').addClass('inactive').removeClass('pointer');
		}
	}

	var hidePages = function() {
		for (var i = 0; i < experience.length; i++) {
			$('#' + experience[i] + '-page').addClass('gone');
		}
	}

	var nextPage = function() {
		if (currentNum == 3){
			return;
		}
		hidePages();
		currentNum+=1;
		$('#'+experience[currentNum]+'-left').addClass('push-right');
		$('#'+experience[currentNum]+'-page').removeClass('gone');
		resetNextPrev();
	}

	var previousPage = function() {
		if (currentNum == 0){
			return;
		}
		hidePages();
		$('#'+experience[currentNum]+'-left').removeClass('push-right');
		$('#'+experience[currentNum-1]+'-left').removeClass('gone');
		currentNum-=1;
		$('#'+experience[currentNum]+'-page').removeClass('gone');
		resetNextPrev();
	}

	var closePage = function() {
		onExperience = false;
		hidePages();
		$('.left-ex').removeClass('push-right gone');
		$('.right').removeClass('gone');
	}

	$('.logo').click(
		function() {
			onExperience = true;
			currentID = $(this).attr('id');
			currentNum = experience.indexOf(currentID);
			for (var i = 0; i < currentNum; i++){
				revealID = experience[i] + '-left';
				$('#' + revealID).addClass('gone push-right');
			}
			revealID = currentID + '-left';
			$('#' + currentID + '-page').removeClass('gone');
			$('#' + revealID).addClass('push-right');
			$('.right').addClass('gone');
			resetNextPrev();
		}
	);

	$('#x').click(closePage);
	$('#next').click(nextPage);
	$('#previous').click(previousPage);

	var top;
	$('#experience-mobile').click(function(e) {
	    e.preventDefault();
	    top = $("#calcentral-left").offset().top;
	    $('html, body').stop().animate({scrollTop: top }, 1500);
	});

	$('#contact-mobile').click(function(e) {
	    e.preventDefault();
	    top = $("#contact").offset().top;
	    $('html, body').stop().animate({scrollTop: top }, 1500);
	});
});