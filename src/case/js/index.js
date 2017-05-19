$(function(){
  $(".Menubar").css("display","none");
  $(".menu").click(function() {
    $(".Menubar").slideToggle(500);
  })

  //回到顶部
  
  $(".scrollTop").click(function () {
    isMoving = true; //正要开始动画运动
    $("html,body").stop().animate({ "scrollTop": 0 }, 500, function () {
      isMoving = false; //动画运动结束
    });
  })

})