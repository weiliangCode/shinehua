$(function () {

  $(".Menubar").css("display", "none");
  $(".menu").click(function () {
    $(".Menubar").slideToggle(500);
  })


  var goodsId = location.search;
  goodsId = goodsId.split("=")[1];
  var codeStr = '';
  switch (goodsId) {
    case "001": {
      codeStr = creation001(['images/oa.png', 'images/oa01.png'], '金蚕支付运营管理平台');
    } break;

    case "002": {
      codeStr = creation001(['images/case_pay.png'], '支付接口对接');
    } break;
    case "003": {
      codeStr = creation003();
    } break;
    case "005": {
      codeStr = creation001(['images/case_04_a.png', 'images/case_04_b.png', 'images/case_04_c.png', 'images/case_04_d.png', 'images/case_04_e.png'], '移动支付营销平台-PC收银');
    } break;
    case "006": {
      codeStr = creation001(['images/case_06_a.png', 'images/case_06_b.png', 'images/case_06_c.png', 'images/case_06_d.png', 'images/case_06_e.png'], '生鲜APP');
    } break;



    default: {
      codeStr = creation002();
    }
  }
  $("#cota").append(codeStr);


  function creation001(imgArr, title) {
    var str = '<div class="container">';
    str += '<h3 class="title">' + title + '</h3>';
    for (var i = 0; i < imgArr.length; i++) {
      str += '<img class="mB20" src="' + imgArr[i] + '" alt="' + title + '" width="100%">';
    }
    str += '</div>';
    return str;
  }

  function creation002() {
    var str = ' <div class="fresh-banner">';
    str += '<img src="images/case-banner4.jpg" alt="案例乐东界面的斑斓图" width="100%">';
    str += '</div>';
    str += '<div class="container case-Main">';
    str += '<div class="case-msg">';
    str += '<h1>乐东平台</h1>';
    str += '<p>建设基于地理信息系统的社会网格化管理平台，将网格融入到社区信息平台中，实施精细化、信息化、动态化的社会服务管理，实现社会管理由粗放向精细、静态到动态、分散到集中、局部到全面的转变。</p>';
    str += '</div>';
    str += '<img src="images/Main-pic4.jpg" class="center-block Main-pic" alt="" width="100%">';
    str += '</div>';
    return str;
  }

  function creation003() {
    var str = ' <div class="fresh-banner">';
    str += '<img src="images/case-banner12.jpg" alt="案例药众界面的斑斓图" width="100%">';
    str += '</div>';
    str += '<div class="container case-Main">';
    str += '<div class="case-msg">';
    str += '<h1>药众</h1>';
    str += '<p>医药行业首选的移动门户交流平台，全面面向医药圈，让医药人拥有一个严谨的、专业的、全面的、及时的行业信息获取渠道，并且广度整合医药工业、医药商业等医药链相关市场信息资源，汇集知名医药媒体人、行业专家，以满足广大医药人对行业信息多元化需求，努力让平台发挥其巨大的社会作用，在行业内产生影响力.</p>';
    str += '</div>';
    str += '<img src="images/YZ-round2.jpg" class="center-block Main-pic" alt="" width="33%">';
    str += '<img src="images/YZ-round1.jpg" class="center-block Main-pic" alt="" width="33%">';
    str += '<img src="images/YZ-round3.jpg" class="center-block Main-pic" alt="" width="33%">';
    str += '</div>';
    return str;
  }


  //回到顶部
  $(".scrollTop").click(function () {
    isMoving = true; //正要开始动画运动
    $("html,body").stop().animate({ "scrollTop": 0 }, 500, function () {
      isMoving = false; //动画运动结束
    });
  })


})