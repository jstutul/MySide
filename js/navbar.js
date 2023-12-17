$(document).ready(function(){
    $(document).on('click','#nav-search',function(){
        $("#top-search").addClass("show-top-search");
    });
    $(document).on('click','#top-cnc-icon',function(){
        $("#top-search").removeClass("show-top-search");
    });

    $(document).on('click','#nav-btn',function(){
        $("#menu").toggleClass("menu-res-show");
    });

    $(document).on('click','#menu li',function(){
        $(this).find(".sub-menu").toggleClass("show-sub-menu");
    });
});

var crossSearch=document.getElementById("top-cnc-icon");

crossSearch.addEventListener('click',function(){
    document.getElementById("top-search").classList.remove("show-top-search");
});