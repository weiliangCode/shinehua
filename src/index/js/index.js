$(function(){
  $(".Menubar").css("display","none");
  $(".menu").click(function() {
    $(".Menubar").slideToggle(500);
  })


   var unslider04 = $('.in_banner').unslider({
        dots: true,
        delay:5000
    });
    // data04 = unslider04.data('unslider');
     
    // $('.unslider-arrow04').click(function() {
    //     var fn = this.className.split(' ')[1];
    //     data04[fn]();
    // });

  //回到顶部
  $(".scrollTop").click(function () {
    isMoving = true; //正要开始动画运动
    $("html,body").stop().animate({ "scrollTop": 0 }, 500, function () {
      isMoving = false; //动画运动结束
    });
  })
})