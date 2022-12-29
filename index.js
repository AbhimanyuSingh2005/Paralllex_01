$(document).scroll(function(){
    var value = window.scrollY;
    $(".stars").css("left",value*0.25+"px");
    $(".moon").css("top",value*1+"px");
    $(".mountains_back").css("top",value*0.5+"px");
    $(".text").css("opacity",100-value/2.5+"%");
    $(".text").css("top",315+value*1+"px");
    $(".btn").css("margin-top",value*1.5+"px");
})