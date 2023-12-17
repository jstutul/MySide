$(document).ready(function(){
    $(document).on('click','#nav-search',function(){
        $("#top-search").addClass("show-top-search");
    });
    $(document).on('click touchstart','#top-cnc-icon',function(){
        console.log(1);
        $("#top-search").removeClass("show-top-search");
    });

    $(document).on('click','#nav-btn',function(){
        $("#menu").toggleClass("menu-res-show");
    });

    $(document).on('click','#menu li',function(){
        $(this).find(".sub-menu").toggleClass("show-sub-menu");
    });
});

