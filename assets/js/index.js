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
});

$("#box1").click(function() {
  $("#code").fadeTo(1000,0.30, function() {
      $("#code").attr('src','assets/images/home.png');
  }).fadeTo(1000,1);
  return false;
});

$("#box2").click(function() {
  $("#camera").fadeTo(1000,0.30, function() {
      $("#camera").attr('src','assets/images/home.png');
  }).fadeTo(500,1);
  return false;
});

$("#box3").click(function() {
  $("#design").fadeTo(1000,0.30, function() {
      $("#design").attr('src','assets/images/home.png');
  }).fadeTo(500,1);
  return false;
});

$('#background, #projects').on('click', function(e){
    e.preventDefault();
    var target= $(this).get(0).id == 'up' ? $('#projects') : $('#background');
    $('html, body').stop().animate({
       scrollTop: target.offset().top
    }, 1000);
});
});