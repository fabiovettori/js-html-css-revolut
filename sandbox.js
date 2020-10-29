$(document).ready(function(){

    $('.menù').mouseenter(function(){
        $(this).children('.dropdown').addClass('active');
    })

    $('.menù').mouseleave(function(){
        $(this).children('.dropdown').removeClass('active');
    })
})
