$(document).ready(function() {
	var experience = ['calcentral', 'rescomp', 'koinrides', 'ets'];
	var currentNum;
	var onExperience = false;

	$('body').keydown(function(e) {
		if (onExperience){
			if (e.keyCode == 39) {
				nextPage();
			}
			else if (e.keyCode == 37) {
				previousPage();
			}
		}
	});

	$('.links a').click(function(event){
		if ($(this).attr('id') === 'resume'){
			return;
		}
		$('.links a').removeClass('active');
		$(this).addClass('active');
	});

	$('.logo').hover(
		function(){
			var currentID = $(this).attr('id');
			$('.logo').addClass('fade');
			$('#'+currentID).removeClass('fade');
			revealID = currentID + '-desc';
			$('#'+revealID).removeClass('invisible');
		},
		function(){
			$('.logo').removeClass('fade');
			var currentID = $(this).attr('id');
			revealID = currentID + '-desc';
			$('#'+revealID).addClass('invisible');
		}
	);

	$('.icon').hover(
		function(){
			var currentID = $(this).attr('id');
			$('.icon').addClass('fade');
			$('#'+currentID).removeClass('fade');
			revealID = currentID + '-desc';
			$('#'+revealID).removeClass('invisible');
		},
		function(){
			$('.icon').removeClass('fade');
			var currentID = $(this).attr('id');
			revealID = currentID + '-desc';
			$('#'+revealID).addClass('invisible');
		}
	);

	function resetNextPrev(){
		$('#previous').removeClass('inactive');
		$('#next').removeClass('inactive');
		$('#previous').addClass('pointer');
		$('#next').addClass('pointer');

		if (currentNum == 0){
			$('#previous').addClass('inactive');
			$('#previous').removeClass('pointer');
		}
		else if (currentNum == 3){
			$('#next').addClass('inactive');
			$('#next').removeClass('pointer');
		}
	}

	function nextPage(){
		if (currentNum == 3){
			return;
		}
		$('#calcentral-page').addClass('gone');
		$('#rescomp-page').addClass('gone');
		$('#koinrides-page').addClass('gone');
		$('#ets-page').addClass('gone');
		currentNum+=1;
		$('#'+experience[currentNum]+'-left').addClass('push-right');
		$('#'+experience[currentNum]+'-page').removeClass('gone');

		resetNextPrev();
	}

	function previousPage(){
		if (currentNum == 0){
			return;
		}
		$('#calcentral-page').addClass('gone');
		$('#rescomp-page').addClass('gone');
		$('#koinrides-page').addClass('gone');
		$('#ets-page').addClass('gone');
		$('#'+experience[currentNum]+'-left').removeClass('push-right');
		$('#'+experience[currentNum-1]+'-left').removeClass('gone');
		currentNum-=1;
		$('#'+experience[currentNum]+'-page').removeClass('gone');

		resetNextPrev();
	}

	$('.logo').click(
		function(){
			onExperience = true;
			var currentID = $(this).attr('id');
			currentNum = experience.indexOf(currentID);
			for (var i = 0; i < currentNum; i++){
				revealID = experience[i] + '-left';
				$('#'+revealID).addClass('gone');
				$('#'+revealID).addClass('push-right');
			}
			revealID = currentID + '-left';
			$('#'+currentID+'-page').removeClass('gone');
			$('#'+revealID).addClass('push-right');
			$('.right').addClass('gone');
			resetNextPrev();
		}
	);

	$('#x').click(
		function(){
			onExperience = false;
			$('#calcentral-page').addClass('gone');
			$('#rescomp-page').addClass('gone');
			$('#koinrides-page').addClass('gone');
			$('#ets-page').addClass('gone');
			$('.left-ex').removeClass('push-right');
			$('.right').removeClass('gone');
			$('.left-ex').removeClass('gone');
		}
	);

	$('#next').click(nextPage);
	$('#previous').click(previousPage);

	$('#experience-mobile').click(function( e ){  
	    e.preventDefault();
	    var top = $("#calcentral-left").offset().top;
	    $('html, body').stop().animate({scrollTop: top }, 1500);
	});

	$('#contact-mobile').click(function( e ){  
	    e.preventDefault();
	    var top = $("#contact").offset().top;
	    $('html, body').stop().animate({scrollTop: top }, 1500);
	});

});