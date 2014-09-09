
$(document).ready(function() {
    var flag = true;
    var mflag = true;
    var aflag = true;

    $(function(){
    $(".small a").click(function(e){
        var href = $(this).attr("href");
        $("#subcontain2 img").attr("src", href);
        e.preventDefault();
        return false;
    });
});

    $('#waypoint').waypoint(function(direction){
        if (direction == 'down') {
            $('#bubble-container').addClass('scrolled');
            $('#bubble-container').animate({height: '60px'}, 600);
            $('#arrow-container').css('display', 'none');
            $('#bubble-container').css('opacity', '0.8');
        }else{
            $('#bubble-container.scrolled').removeClass('scrolled');
        }
    });

    $('#page15').waypoint(function(direction){
        if (direction == 'up') {
           $('#bubble-container').animate({height: '60px'}, 600);
           $('#arrow-container').css('display', 'inline');
           $('#arrow').css('display', 'inline');
           $('#bubble-container').css('opacity', '1');
       } 
   }, {offset: 50});

    $('#page15').waypoint(function(direction) {
        $.each($('.contain'), function() {
            $(this).removeClass('clicked');
        });
        if (direction == 'down') {
            $('#photo-container').addClass('clicked');
            flag = true;
            aflag = false;
            mflag = true;
        }  
        if (direction == 'up') {
            $('#photo-container').removeClass('clicked');
            flag = true;
            aflag = true;
            mflag = true;
        } 
    }, {offset: 50});
    $('#page2').waypoint(function(direction) {
        if (direction == "down") {
            $('#design-container').addClass('clicked');
            $('#about-container').removeClass('clicked');
            $('#photo-container').removeClass('clicked');
            flag = false;
            mflag = true;
            aflag = true;
        } else {
            $('#design-container').removeClass('clicked');
            $('#about-container').removeClass('clicked');
            $('#photo-container').addClass('clicked');
            flag = true;
            mflag = true;
            aflag = false;
        }
        
    }, {offset: 50});

    $('#page25').waypoint(function(direction) {
        if (direction == "down") {
            $('#about-container').addClass('clicked');
            $('#design-container').removeClass('clicked');
            $('#photo-container').removeClass('clicked');
            mflag = false;
            flag = true;
            aflag = true;
        } else {
            $('#about-container').removeClass('clicked');
            $('#design-container').addClass('clicked');
            $('#photo-container').removeClass('clicked');
            mflag = true;
            flag = false;
            aflag = true;
        }
        
    }, {offset: 50});

    $('#design').on({
        mouseover: function() {
            if (flag) {
                $('#design').css("color", "#4e5e62");
                $('#design-container').addClass('clicked');
            }
        }, 
        mouseleave: function() {
            if (flag) {
                $('#design-container').removeClass('clicked');
                $('#design').css("color", "black");
            }   
        },
        click: function() {
            flag = false;
            mflag = true;
            aflag = true;
            $('html, body').animate({ scrollTop: $("#page2").offset().top +1}, 600);
            $.each($('.contain'), function() {
                $(this).removeClass('clicked');
            });
            navbold($('#design-container'));
        }
    });
    $('#about').on({
        mouseover: function() {
            if (mflag) {
                $('#about').css("color", "4e5e62");
                $('#about-container').addClass('clicked');
            }
        }, 
        mouseleave: function() {
            if (mflag) {
                $('#about-container').removeClass('clicked');
                $('#about').css("color", "black");
            }
        },
        click: function() {
            mflag = false;
            flag = true;
            aflag = true;
            $('html, body').animate({ scrollTop: $("#page25").offset().top +1 }, 600);
            $.each($('.contain'), function() {
                $(this).removeClass('clicked');
            });
            navbold($('#about-container'));
        }
    });

    $('#photo').on({
        mouseover: function() {
            if (aflag) {
                $('#photo').css("color", "4e5e62");
                $('#photo-container').addClass('clicked');
            }
        }, 
        mouseleave: function() {
            if (aflag) {
                $('#photo-container').removeClass('clicked');
                $('#photo').css("color", "black");
            }
        },
        click: function() {
            mflag = true;
            flag = true;
            aflag = false;
            $('html, body').animate({ scrollTop: $("#page15").offset().top +1}, 600);
            $.each($('.contain'), function() {
                $(this).removeClass('clicked');
            });
            navbold($('#photo-container'));
        }
    });

      $('#logo').on({
        click: function() {
            mflag = true;
            flag = true;
            aflag = false;
            $('html, body').animate({ scrollTop: "0px"}, 600);
            $.each($('.contain'), function() {
                $(this).removeClass('clicked');
            });
        }
    });

    $('#contact').hover(
        function() {
            $('#contact').css("color", "4e5e62");
            $('#contact-container').addClass('clicked');
        }, function() {
            $('#contact-container').removeClass('clicked');
            $('#contact').css("color", "black");
        }
    );

    $("#contact").on('click', function() {
        $.each($('.contain'), function() {
            $(this).removeClass('clicked');
        });
        navbold($('#contact-container'));
    });

    $("#arrow").on('click', function() {
        $('html, body').animate({ scrollTop: "690px" }, 600);
    })
    
    function navbold(param) {
        param.addClass('clicked');
        param.children().first().css("color", "black");
    }

    $("#contact").click(function(){
        $("#modal-container").show();
    });

    $("#modal-overlay").click(function(){
        $("#modal-container").hide();
    });

    $("#submit-contain").click(function(){
        $("#modal-container").hide();
    });

    $("#cancel").click(function(){
        $("#modal-container").hide();
    });

   

    var clicked = true;
    $('#menu-icon').on({      
        click: function() {
            if(clicked == true) { 
                $('#dropdownc').css('display', 'inline');
            } else {
                $('#dropdownc').css('display', 'none'); 
            }  
            clicked = !clicked;         
        }

    });
    var dclicked = true;
    $('.ti').on({
        click: function() {
            if (dclicked == true) {
                $(this).siblings().css('display', 'inline');
            } else {
                $(this).siblings().css('display', 'none');
            }
            dclicked = !dclicked;
        }
    });


});
