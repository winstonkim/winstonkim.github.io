$(document).ready(function() {

var navi_start = $("#container").offset().top -8;
var proj = $("#projects").offset().top;
var photo = $("#photos").offset().top;

$(document).scroll(function(){
    if($(this).scrollTop() > navi_start){   
        $('#container').css({"position":"fixed", "top":"4px"});
    }
    if($(this).scrollTop() <= navi_start){   
        $('#container').css({"position":"absolute", "top":"50%"});
    }
    if($(this).scrollTop() >= proj){   
        $("#code").attr('src', 'assets/images/home.png');
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