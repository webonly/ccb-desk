/*!
 * HRG-  v1.1.1 
 * Date: 2016-12-7 
 *
 * 调用说明：
 * openNav(item,step)
 */



/*
 * 栏目编号
 * 1-链接wif  步骤数-3
 * 2-存款  步骤数-3
 * 3-云闪付  步骤数-4
 * 4-理财产品1  步骤数-1
 * 5-理财产品2  步骤数-1
 *
 */

var itemData=[3,3,4,1,1];
var speakCont={
  "item1":["我们这里有免费的无线网提供，跟着小龙人来操作吧。请在手机设置中打开无线网开关，点击选择China Unicom，连接完成后，请对我说下一步。",
           "我们这里有两种认证方式：排队机认证和手机短信认证，请语音或手动选择认证方式。",
           "看在小龙人这么辛苦的份上，您帮忙关注一下我们建行的微信公众号吧。"],
  "item2":["您好，存款五万以下请到自动存款机，五万以上请取号后到柜台办理。",
           "您可以语音或手动选择业务类型",
           "您好，存款五万以下请到自动存款机，五万以上请取号后到柜台办理。以下是我行最新的存款利率表，请您参考。"],
  "item3":["好的，跟着小龙人来操作吧。请问您是苹果手机还是安卓手机呢？",
           "好的，请在手机桌面上打开wallet或在设置里选择wallet与Apple Pay，操作完成后，请对我说下一步",
           "点击右上角的添加按钮，或点击添加信用卡或借记卡来添加卡片，操作完成后，请对我说下一步。",
           "打开随芯用APP后，点击【申请闪付】，选择申请“龙卡云闪付”，进入“申请开立云闪付卡”页面。操作完成后，请对我说下一步。"],
  "item4":["您好！我航的各种理财产品请参考下图，您可以点击图标查看详情。也可以语音选择进行购买。",
           "",
           ""],
  "item5":["您可以取号到柜台办理，使用手机银行办理或者呼叫客户经理办理。请语音或手动选择办理方式。",
           "",
           ""],
  "item6":["","",""]
};


var currentNav={"item":1,"step":0};
function openNav(item,step){
//初始化栏目
  $(".cont,.contlist,.dirbtn,.answer-cont").css("display","none");
  currentNav.item=item;
  currentNav.step=step;
   console.log(speakCont["item"+item][step]);
   cmdTTSspeak(speakCont["item"+item][step]);
 
   $(".homecont"+item+",.homecont"+item+"-list"+step).show();
   if (itemData[item-1]>1) {
     if (step==0) {
    $(".homecont-next").show();
   }else if(0<step&&step<itemData[item-1]-1){
     $(".homecont-next,.homecont-pre").show(); 
   }else if(step==itemData[item-1]-1){
    $(".homecont-pre").show();
   }
   }
}
function closeNav(){
  $(".cont,.contlist,.dirbtn").css("display","none");
  $(".answer-con").css("display","block");
}

$(".homecont-next").click(function(e) {
  openNav(currentNav.item,currentNav.step+1);
});
$(".homecont-pre").click(function(e) {
  openNav(currentNav.item,currentNav.step-1);

});
$(".home-button").click(function(){
   closeNav();
});
//openNav(5,0);











