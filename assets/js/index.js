$(document).ready(function() {

var t = $("#container").offset().top;

$(document).scroll(function(){
    if($(this).scrollTop() > t){   
        $('#container').css({"position":"fixed", "top":"0%"});
    }
    if($(this).scrollTop() <= t){   
        $('#container').css({"position":"absolute", "top":"50%"});
    }
});

$('#background, #projects').on('click', function(e){
    e.preventDefault();
    var target= $(this).get(0).id == 'up' ? $('#projects') : $('#background');
    $('html, body').stop().animate({
       scrollTop: target.offset().top
    }, 1000);
});

});