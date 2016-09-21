/**
 * Created by Administrator on 15-8-17.
 */
define(['zep'],function(require, exports, module) {
//    遍历数据
    function ErgodicData(){
        $.ajax({
            url:"public/templates/json/json.json",
            type:"get",
            dataType:"json",
            success:function(data){
                var choiceDate = data['LiCommunity'];
                var choiceHtml='';
                $.each(choiceDate,function(i){
                    choiceHtml+='<li>'+
                        '<img src="public/images/tj_All_Store_Li_cont_back.jpg" alt="" width="100%">'+
                        ' <div class="b_con">'+
                        '   <div class="b_le">'+
                        '       <a href="javascript:void (0)" class="_a">'+
                        '           <img src="public/images/tj_All_Store_Li_contb_le.png" alt="" width="88%" class="chan">'+
                        '               <div class="ImgShow">'+
                        '                   <img src="'+choiceDate[i]['cont1']+'" alt="" height="100%">'+
                        '                   </div>'+
                        '               </a>'+
                        '           </div>'+
                        '           <div class="b_ri">'+
                        '               <div class="clearfix">'+
                        '                   <div class="iconLe">'+
                        '                       <h3>'+choiceDate[i]['cont2']+'</h3>'+
                        '                   </div>'+
                        '                   <div class="iconRi">'+choiceDate[i]['cont5']+'</div>'+
                        '                   </div>'+
                        '               <div class="clearfix">'+
                        '                    <div class="iconLe iconItm2">'+
                        '                   <p class="_p"><img src="public/images/tj_all_icon_time.png" alt="" height="16">'+choiceDate[i]['cont3']+'</p>'+
                        '                       <p class="_p"><img src="public/images/tj_all_icon_Location.png" alt="" height="20">'+choiceDate[i]['cont4']+'</p>'+
                        '                       </div>'+
                        '                       <div class="iconRi iconItm2">'+
                        '                           <img src="public/images/tj_all_icon_Into.png" alt="" height="30">'+
                        '                           </div>'+
                        '                       </div>'+
                        '                       <div class="tj_fl">'+
                        '                           <span class="tj_All_btn_nc color3">藏羌文化</span>'+
                        '                           <span class="tj_All_btn_nc color1">藏羌文化</span>'+
                        '                       </div>'+
                        '                       <p class="_peopleLength"><img src="public/images/tj_all_iconIndividual_.png" alt="" height="20">'+choiceDate[i]['cont6']+'</p>'+
                        '                       </div>'+
                                                '   </div>'+
                                            '</li>';
                });
                $('.tj_All_Store_Li_cont').html(choiceHtml);
            }
        });
    }
    exports.ErgodicData =ErgodicData;
    function ErgodicData2(){
        $.ajax({
            url:"public/templates/json/json.json",
            type:"get",
            dataType:"json",
            success:function(data){
                var choiceDate = data['LiCommunity'];
                var choiceHtml='';
                $.each(choiceDate,function(i){
                    choiceHtml+='<li>'+
                    ' <img src="public/images/tj_All_Store_Li_contb_le.png" alt="" width="90%">'+
                    '   <div class="contLi">'+
                    '       <img src="'+choiceDate[i]['cont1']+'" alt="" height="100%">'+
                    '       </div>'+
                    '       <img src="public/images/tj_All_timeShow_b_h3.png" alt="" width="80%" class="tj_All_timeShow_b_h3_img">'+
                    '           <h3 class="tj_All_timeShow_b_h3">'+choiceDate[i]['cont2']+'</h3>'+
                    '       </li>';
                });
                $('.tj_all_videoListShow').eq(1).html(choiceHtml);
            }
        });
    }
    exports.ErgodicData2 =ErgodicData2;
});