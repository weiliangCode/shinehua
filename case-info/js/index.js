$(function(){function a(a,s){var e='<div class="container">';e+='<h3 class="title">'+s+"</h3>";for(var i=0;i<a.length;i++)e+='<img class="mB20" src="'+a[i]+'" alt="'+s+'" width="100%">';return e+="</div>"}var s=location.search;s=s.split("=")[1];var e="";switch(s){case"001":e=a(["images/oa.png","images/oa01.png"],"支付运营管理平台");break;case"002":e=a(["images/case_pay.png"],"支付接口对接");break;case"003":e=function(){var a=' <div class="fresh-banner">';return a+='<img src="images/case-banner12.jpg" alt="案例药众界面的斑斓图" width="100%">',a+="</div>",a+='<div class="container case-Main">',a+='<div class="case-msg">',a+="<h1>药众</h1>",a+="<p>医药行业首选的移动门户交流平台，全面面向医药圈，让医药人拥有一个严谨的、专业的、全面的、及时的行业信息获取渠道，并且广度整合医药工业、医药商业等医药链相关市场信息资源，汇集知名医药媒体人、行业专家，以满足广大医药人对行业信息多元化需求，努力让平台发挥其巨大的社会作用，在行业内产生影响力.</p>",a+="</div>",a+='<img src="images/YZ-round2.jpg" class="center-block Main-pic" alt="" width="33%">',a+='<img src="images/YZ-round1.jpg" class="center-block Main-pic" alt="" width="33%">',a+='<img src="images/YZ-round3.jpg" class="center-block Main-pic" alt="" width="33%">',a+="</div>"}();break;case"005":e=a(["images/case_04_a.png","images/case_04_b.png","images/case_04_c.png","images/case_04_d.png","images/case_04_e.png"],"移动支付营销平台-PC收银");break;case"006":e=a(["images/case_06_a.png","images/case_06_b.png","images/case_06_c.png","images/case_06_d.png","images/case_06_e.png"],"生鲜APP");break;default:e=function(){var a=' <div class="fresh-banner">';return a+='<img src="images/case-banner4.jpg" alt="案例乐东界面的斑斓图" width="100%">',a+="</div>",a+='<div class="container case-Main">',a+='<div class="case-msg">',a+="<h1>乐东平台</h1>",a+="<p>建设基于地理信息系统的社会网格化管理平台，将网格融入到社区信息平台中，实施精细化、信息化、动态化的社会服务管理，实现社会管理由粗放向精细、静态到动态、分散到集中、局部到全面的转变。</p>",a+="</div>",a+='<img src="images/Main-pic4.jpg" class="center-block Main-pic" alt="" width="100%">',a+="</div>"}()}$("#cota").append(e)});