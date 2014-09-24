$(document).ready(function() {

  var navi_start = $("#container").offset().top -8;
  var proj = $("#projects").offset().top;
  var photo = $("#photos").offset().top;
  var changed1 = false;
  var changed2 = false;
  var changed3 = false;

  $(document).scroll(function(){
    if($(this).scrollTop() > navi_start){   
      $('#container').css({"position":"fixed", "top":"4px"});
    }
    if($(this).scrollTop() <= navi_start){   
      $('#container').css({"position":"absolute", "top":"50%"});
    }
  });

  $("#box1").click(function() {
    if (!changed1 && changed3){
      changed1 = true;
      changed3 = false;
      $("#design").fadeTo(500,0.30, function() {
        $("#design").attr('src','assets/images/design.png');
        $("#text3").text('DESIGNS');
        $("#design_link").attr("href","#designs");
      }).fadeTo(500,1);
      $("#code").fadeTo(500,0.30, function() {
        $("#code").attr('src','assets/images/home.png');
        $("#text1").text('HOME');
        $("#project_link").attr("href","#background");
      }).fadeTo(500,1);
    }
    else if (!changed1 && changed2){
      changed1 = true;
      changed2 = false;
      $("#camera").fadeTo(500,0.30, function() {
        $("#camera").attr('src','assets/images/camera.png');
        $("#text2").text('PHOTOS');
        $("#photo_link").attr("href","#photos");
      }).fadeTo(500,1);
      $("#code").fadeTo(500,0.30, function() {
        $("#code").attr('src','assets/images/home.png');
        $("#text1").text('HOME');
        $("#project_link").attr("href","#background");
      }).fadeTo(500,1);
    }
    else if (!changed1){
      changed1 = true;
      $("#code").fadeTo(500,0.30, function() {
        $("#code").attr('src','assets/images/home.png');
        $("#text1").text('HOME');
        $("#project_link").attr("href","#background");
      }).fadeTo(1000,1);
    }
    else{
      changed1 = false;
      $("#code").fadeTo(500,0.30, function() {
        $("#code").attr('src','assets/images/code.png');
        $("#text1").text('PROJECTS');
        $("#project_link").attr("href","#projects");
      }).fadeTo(1000,1);
    }
  });

$("#box2").click(function() {
  if (changed3 && !changed2){
    changed3 = false;
    changed2 = true;
    $("#camera").fadeTo(500,0.30, function() {
      $("#camera").attr('src','assets/images/home.png');
      $("#text2").text('HOME');
      $("#photo_link").attr("href","#background");
    }).fadeTo(500,1);
    $("#design").fadeTo(500,0.30, function() {
      $("#design").attr('src','assets/images/design.png');
      $("#text3").text('DESIGNS');
      $("#design_link").attr("href","#designs");
    }).fadeTo(500,1);
  }
  else if (changed1 && !changed2){
    changed1 = false;
    changed2 = true;
    $("#camera").fadeTo(500,0.30, function() {
      $("#camera").attr('src','assets/images/home.png');
      $("#text2").text('HOME');
      $("#photo_link").attr("href","#background");
    }).fadeTo(500,1);
    $("#code").fadeTo(500,0.30, function() {
      $("#code").attr('src','assets/images/code.png');
      $("#text1").text('PROJECTS');
      $("#project_link").attr("href","#projects");
    }).fadeTo(500,1);
  }
  else if (!changed2){
    changed2 = true;
    $("#camera").fadeTo(500,0.30, function() {
      $("#camera").attr('src','assets/images/home.png');
      $("#text2").text('HOME');
      $("#photo_link").attr("href","#background");
    }).fadeTo(500,1);
  }
  else{
    changed2 = false;
    $("#camera").fadeTo(500,0.30, function() {
      $("#camera").attr('src','assets/images/camera.png');
      $("#text2").text('PHOTOS');
      $("#photo_link").attr("href","#photos");
    }).fadeTo(500,1);
  }
});

$("#box3").click(function() {

 if (changed2 && !changed3){
  changed2 = false;
  changed3 = true;
  $("#design").fadeTo(500,0.30, function() {
    $("#design").attr('src','assets/images/home.png');
    $("#text3").text('HOME');
    $("#design_link").attr("href","#background");
  }).fadeTo(500,1);
  $("#camera").fadeTo(500,0.30, function() {
    $("#camera").attr('src','assets/images/camera.png');
    $("#text2").text('PHOTOS');
    $("#photo_link").attr("href","#photos");
  }).fadeTo(500,1);
}
else if (changed1 && !changed3){
  changed1 = false;
  changed3 = true;
  $("#design").fadeTo(500,0.30, function() {
    $("#design").attr('src','assets/images/home.png');
    $("#text3").text('HOME');
    $("#design_link").attr("href","#background");
  }).fadeTo(500,1);
  $("#code").fadeTo(500,0.30, function() {
    $("#code").attr('src','assets/images/code.png');
    $("#text1").text('PROJECTS');
    $("#project_link").attr("href","#projects");
  }).fadeTo(500,1);
}
else if (!changed3){
  changed3 = true;
  $("#design").fadeTo(600,0.30, function() {
    $("#design").attr('src','assets/images/home.png');
    $("#text3").text('HOME');
    $("#design_link").attr("href","#background");
  }).fadeTo(500,1);
}
else {
  changed3 = false;
  $("#design").fadeTo(600,0.30, function() {
    $("#design").attr('src','assets/images/design.png');
    $("#text3").text('DESIGNS');
    $("#design_link").attr("href","#designs");
  }).fadeTo(500,1);
}
});

// $('#background, #projects').on('click', function(e){
//     e.preventDefault();
//     var target= $(this).get(0).id == 'up' ? $('#projects') : $('#background');
//     $('html, body').stop().animate({
//        scrollTop: target.offset().top
//     }, 1000);
// });

});