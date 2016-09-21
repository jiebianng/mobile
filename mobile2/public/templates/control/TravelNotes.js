/**
 * Created by Administrator on 15-8-17.
 */
define(['zep'],function(require, exports, module) {
//    遍历数据
    function ErgodicData1(){
        //        热门攻略样式1
        $.ajax({
            url:"public/templates/json/json.json",
            type:"get",
            dataType:"json",
            success:function(data){
                var choiceDate = data['TravelNotes'];
                var choiceHtml='';
                $.each(choiceDate,function(i){
                    choiceHtml+='<li>'+
                    '<img src="public/images/tj_All_Store_Li_cont_back.jpg" alt="" width="100%">'+
                    '<div class="b_con">'+
                    '     <div class="b_le">'+
                    '        <a href="cx_lygn.html" class="_a">'+
                    '               <img src="public/images/tj_All_Store_Li_contb_le.png" alt="" width="88%" class="chan">'+
                    '                   <div class="ImgShow">'+
                    '                       <img src="'+choiceDate[i]['cont1']+'" alt="" height="100%">'+
                    '                       </div>'+
                    '                   </a>'+
                    '               </div>'+
                    '               <div class="b_ri"><a href="cx_lygn.html">'+
                    '                   <div class="TravelNotes">'+
                    '                       <div class="top">'+
                    '                           <img src="public/images/TravelNotes_h3Logo1.png" alt="" height="20">&nbsp;<span>'+choiceDate[i]['cont9']+'</span>'+
                    '                           </div>'+
                    '                           <div class="bot">'+
                    '                               <div class="BoL">'+
                    '                                   <p>'+choiceDate[i]['cont10']+'</p>'+
                    '                                   <p class="_np">'+choiceDate[i]['cont11']+'</p>'+
                    '                                   <p class="_vp">'+
                    '                                       <span><img src="public/images/tj_all_icon_duanxin.png" alt="" height="9">&nbsp;'+choiceDate[i]['cont5']+'</span>'+
                    '                                           <span><img src="public/images/tj_all_icon_year.png" alt="" height="9">&nbsp;'+choiceDate[i]['cont6']+'</span>'+
                    '                                               <span><img src="public/images/tj_all_icon_xin3.png" alt="" height="9">&nbsp;'+choiceDate[i]['cont7']+'</span>'+
                    '                                               </p>'+
                    '                                           </div>'+
                    '                                           <div class="Bor">'+
                    '                                               <div class="imgLo"><img src="'+choiceDate[i]['cont12']+'" alt="" height="40" width="40"></div>'+
                    '                                                   <p class="Bo_p">'+choiceDate[i]['cont13']+'</p>'+
                    '                                               </div>'+
                    '                                           </div>'+
                    '                                       </div>'+
                    '                                   </div>'+
                    '                               </div></a>'+
                    '                           </li>';
                });
                $('.tj_All_Store_Li_cont').html(choiceHtml);
            }
        });
    }
    exports.ErgodicData1 =ErgodicData1;
    function ErgodicData2(){
        //        热门攻略样式2
        $.ajax({
            url:"public/templates/json/json.json",
            type:"get",
            dataType:"json",
            success:function(data){
                var choiceDate = data['TravelNotes'];
                var choiceHtml='';
                $.each(choiceDate,function(i){
                    choiceHtml+='<li><a href="ViewSpotDetails.html">'+
                    '<img src="'+choiceDate[i]['cont8']+'" alt="" width="94%">'+
                    ' <div class="_h3">'+
                    '       <p>'+choiceDate[i]['cont2']+'</p>'+
                    '       <p>'+
                    '           <img src="public/images/tj_all_icon_year.png" alt="" height="10"> <span>'+choiceDate[i]['cont6']+'</span>'+
                    '           </p>'+
                    '           <p>'+
                    '               <img src="public/images/tj_all_icon_duanxin.png" alt="" height="10"> <span>'+choiceDate[i]['cont5']+'</span>'+
                    '               </p>'+
                    '           </div></a>'+
                    '       </li>';
                });
                $('.View_intro_List_imgShowBack').eq(1).find('.TopCon').html(choiceHtml);
            }
        });
    }
    exports.ErgodicData2 =ErgodicData2;
    function ErgodicData3(){
        //        热门攻略样式3
        $.ajax({
            url:"public/templates/json/json.json",
            type:"get",
            dataType:"json",
            success:function(data){
                var choiceDate = data['TravelNotes'];
                var choiceHtml='';
                $.each(choiceDate,function(i){
                    choiceHtml+='<li><a href="ViewSpotDetails.html">'+
                        ' <img src="public/images/tj_All_Store_Li_contb_le.png" alt="" width="90%">'+
                        '   <div class="contLi">'+
                        '       <img src="'+choiceDate[i]['cont1']+'" alt="" height="100%">'+
                        '       </div>'+
                        '       <img src="public/images/tj_All_timeShow_b_h3.png" alt="" width="80%" class="tj_All_timeShow_b_h3_img">'+
                        '           <h3 class="tj_All_timeShow_b_h3">'+choiceDate[i]['cont2']+'</h3>'+
                        '       </a></li>';
                });
                $('.tj_all_videoListShow').eq(0).html(choiceHtml);
            }
        });
    }
    exports.ErgodicData3 =ErgodicData3;
});