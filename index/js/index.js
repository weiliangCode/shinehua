$(function(){$(".Menubar").css("display","none"),$(".menu").click(function(){$(".Menubar").slideToggle(500)});$(".in_banner").unslider({dots:!0,delay:5e3});console.log($(".scrollTop")),$(".scrollTop").click(function(){isMoving=!0,$("html,body").stop().animate({scrollTop:0},500,function(){isMoving=!1})})});