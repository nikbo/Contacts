$(function(){
    $.fn.scrollToTop = function(){
        $(this).hide().removeAttr("href");
        if($(window).scrollTop()!="0")
            $(this).animate({opacity: "show"}, 1000);
        var scrollDiv = $(this);
        $(window).scroll(function(){
            if($(window).scrollTop()=="0")
                $(scrollDiv).animate({opacity: "hide"}, 1000);
            else
                $(scrollDiv).animate({opacity: "show"}, 1000);});
        $(this).click(function(){
            $("html, body").animate({scrollTop:0},"slow")})}});