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
                var choiceDate = data['StopHotel'];
                var choiceHtml='';
                $.each(choiceDate,function(i){
                    choiceHtml+='<li>'+
                    '<img src="public/images/tj_All_Store_Li_cont_back.jpg" alt="" width="100%">'+
                    ' <div class="b_con">'+
                    '       <div class="b_le">'+
                    '           <a href="cx_jdxqgmxz.html" class="_a">'+
                    '               <img src="public/images/tj_All_Store_Li_contb_le.png" alt="" width="88%" class="chan">'+
                    '                   <div class="ImgShow">'+
                    '                       <img src="'+choiceDate[i]['cont8']+'" alt="" height="100%">'+
                    '                       </div>'+
                    '                   </a>'+
                    '               </div>'+
                    '               <div class="b_ri"><a href="cx_jdxqgmxz.html">'+
                    '                   <h3>'+choiceDate[i]['cont2']+'</h3>'+
                    '                   <div class="tj_all_xin_each">'+
                    '                       <ul class="tj_all_xin clearfix">'+
                    '                           <li></li>'+
                    '                           <li></li>'+
                    '                           <li></li>'+
                    '                           <li></li>'+
                    '                           <li></li>'+
                    '                       </ul>'+
                    '                       <span class="_span">'+choiceDate[i]['cont3']+'分</span>'+
                    '                   </div>'+
                    '                   <div class="clearfix">'+
                    '                       <div class="iconLe"><span class="f_size_2">'+choiceDate[i]['cont4']+'</span><span class="f_size_2N">元起</span></div>'+
                    '                       <div class="iconRi"><img src="public/images/tj_all_iconIndividual_.png" alt="" height="20">'+choiceDate[i]['cont5']+'人消费</div>'+
                    '                       </div>'+
                    '                       <div class="clearfix">'+
                    '                           <div class="iconLe"><img src="public/images/tj_all_icon_Location.png" alt="" height="20">'+choiceDate[i]['cont6']+'</div>'+
                    '                               <div class="iconRi">'+
                    '                                   <div class="tj_fr">'+
                    '                                       <a href="javascript:void(0)" class="tj_All_btn_nc color3">多优惠+</a>'+
                    '                                   </div>'+
                    '                               </div>'+
                    '                           </div>'+
                    '                       </div></a>'+
                    '                   </div>'+
                    '               </li>'
                });
                $('.tj_All_Store_Li_cont').html(choiceHtml);
                require.async(['init'],function(temp){
                    temp.tj_all_xin_each();
                });
            }
        });
    }
    exports.ErgodicData =ErgodicData;
    //    酒店住宿js效果
    function StopHotelChange(){
        $('.StopHotelControl .A_le').click(function(){
            $('.StopHotelClickLe').show();
            $('.StopHotelClickRi').hide();
        });
        $('.StopHotelControl .A_ri').click(function(){
            $('.StopHotelClickLe').hide();
            $('.StopHotelClickRi').show();
        });
    }
    exports.StopHotelChange =StopHotelChange;
});