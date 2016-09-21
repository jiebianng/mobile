/**
 * Created by Administrator on 15-8-17.
 */
define(['zep'],function(require, exports, module) {
//    遍历数据
    function ErgodicData1(){
        //        热门景点样式1
        $.ajax({
            url:"public/templates/json/json.json",
            type:"get",
            dataType:"json",
            success:function(data){
                var choiceDate = data['ViewPresentList'];
                var choiceHtml='';
                $.each(choiceDate,function(i){
                    choiceHtml+='<li>'+
                    '<img src="public/images/tj_All_Store_Li_cont_back.jpg" alt="" width="100%"/>'+
                    ' <div class="b_con">'+
                    '      <div class="b_le">'+
                    '           <a href="ViewSpotDetails.html" class="_a">'+
                    '               <img src="public/images/tj_All_Store_Li_contb_le.png" alt="" width="88%"  class="chan"/>'+
                    '               <div  class="ImgShow">'+
                    '                   <img src="'+choiceDate[i]['cont1']+'" alt="" height="100%"/>'+
                    '               </div>'+
                    '           </a>'+
                    '       </div>'+
                    '       <div class="b_ri">'+
                    '           <a href="ViewSpotDetails.html">'+
                    '               <h3>'+choiceDate[i]['cont2']+'</h3>'+
                    '               <div class="tj_all_xin_each">'+
                    '                   <ul class="tj_all_xin clearfix">'+
                    '                       <li></li>'+
                    '                       <li></li>'+
                    '                       <li></li>'+
                    '                       <li></li>'+
                    '                       <li></li>'+
                    '                   </ul>'+
                    '                   <span class="_span">'+choiceDate[i]['cont3']+'分</span>'+
                    '               </div>'+
                    '               <p>票价：'+choiceDate[i]['cont4']+'</p>'+
                    '               <p class="_p">'+
                    '                   <span><img src="public/images/tj_all_icon_duanxin.png" alt="" height="14">&numsp;'+choiceDate[i]['cont5']+'</span>'+
                    '                       <span><img src="public/images/tj_all_icon_year.png" alt="" height="14">&numsp;'+choiceDate[i]['cont6']+'</span>'+
                    '                           <span><img src="public/images/tj_all_icon_xin3.png" alt="" height="14">&numsp;'+choiceDate[i]['cont7']+'</span>'+
                    '                           </p>'+
                    '                       </a>'+
                    '                   </div>'+
                    '               </div>'+
                    '           </li>';
                });
                $('.tj_All_Store_Li_cont').html(choiceHtml);
                require.async(['init'],function(temp){
                    temp.tj_all_xin_each();
                });
            }
        });
    }
    exports.ErgodicData1 =ErgodicData1;
    function ErgodicData2(){
        //        热门景点样式2
        $.ajax({
            url:"public/templates/json/json.json",
            type:"get",
            dataType:"json",
            success:function(data){
                var choiceDate = data['ViewPresentList'];
                var choiceHtml='';
                $.each(choiceDate,function(i){
                    choiceHtml+='<li><a href="ViewSpotDetails.html"><img src="'+choiceDate[i]['cont8']+'" alt="" width="94%"><h3 class="_h3">'+choiceDate[i]['cont2']+'</h3></a></li>';
                });
                $('.View_intro_List_imgShowBack').eq(0).find('.TopCon').html(choiceHtml);
            }
        });
    }
    exports.ErgodicData2 =ErgodicData2;
});