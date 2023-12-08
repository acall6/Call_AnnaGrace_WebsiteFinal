$(document).ready(function(){
    $('#hamburger-menu').click(function(){
        $('#mobile-nav').fadeIn();
    });

    $('#X').click(function(){
        $('#mobile-nav').fadeOut();
    });
});