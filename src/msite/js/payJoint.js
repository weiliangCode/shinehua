$(function() {
  console.log( $('.J_stair'))

  $('.J_stair').on('click','li', function() {
    $(this).addClass('active').siblings().removeClass('active');
    var num  = parseInt($(this).attr("data")); 
    $('.J_sub ul').eq(num).css("display","block").siblings().css("display","none");
  })
})