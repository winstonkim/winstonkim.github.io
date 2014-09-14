$(document).ready(function() {

$('#background, #projects').on('click', function(e){
    e.preventDefault();
    var target= $(this).get(0).id == 'up' ? $('#projects') : $('#background');
    $('html, body').stop().animate({
       scrollTop: target.offset().top
    }, 1000);
});
}