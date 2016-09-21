/**
 * Created by Administrator on 15-8-14.
 */
define(['zep'],function(require, exports, module) {
//    切换效果
    function TibetanCulture(){
        $('.TibetanCulture_topConBack ._GoTo').click(function(){
            $(this).parents(".TibetanCulture_topConBack").addClass('current');
        });
        $('.TibetanCulture_topConBack ._OutTo').click(function(){
            $(this).parents(".TibetanCulture_topConBack").removeClass('current');
        });
    }
    exports.TibetanCulture =TibetanCulture;
//    遍历数据
    function ErgodicData(){
        $.ajax({
            url:"public/templates/json/json.json",
            type:"get",
            dataType:"json",
            success:function(data){
                var choiceDate = data['TibetanCultureKtv'];
//                console.log(choiceDate);
                var choiceHtml='';
                $.each(choiceDate,function(i){
                    choiceHtml+='<li>'+
                    '<img src="public/images/tj_All_Store_Li_cont_back.jpg" alt="" width="100%"/>'+
                    '<div class="b_con">'+
                    '<div class="b_le">'+
                    '   <a href="cx_jdxqgmxz_ktv.html" class="_a">'+
                    '           <img src="public/images/tj_All_Store_Li_contb_le.png" alt="" width="88%"  class="chan"/>'+
                    '          <div  class="ImgShow">'+
                    '             <img src="'+choiceDate[i]['cont8']+'" alt="" height="100%"/>'+
                    '               </div>'+
                    '           </a>'+
                    '       </div>'+
                    '       <div class="b_ri">'+
                    '          <a href="cx_jdxqgmxz_ktv.html" style="display: block;"><div class="clearfix">'+
                    '               <div class="iconLe">'+
                    '                   <h3>'+choiceDate[i]['cont2']+'</h3>'+
                    '               </div>'+
                    '               <div class="iconRi">人均：'+choiceDate[i]['cont7']+'</div>'+
                    '           </div>'+
                    '           <div class="tj_all_xin_each">'+
                    '               <ul class="tj_all_xin clearfix">'+
                    '                   <li></li>'+
                    '                   <li></li>'+
                    '                   <li></li>'+
                    '                   <li></li>'+
                    '                   <li></li>'+
                    '               </ul>'+
                    '               <span class="_span">'+choiceDate[i]['cont3']+'分</span>'+
                    '           </div>'+
                    '           <p class="_p">描述：'+choiceDate[i]['cont6']+'</p>'+
                    '           <div class="clearfix">'+
                    '               <div class="iconLe"><img src="public/images/tj_all_icon_Location.png" alt="" height="20"/>&numsp;'+choiceDate[i]['cont4']+'</div>'+
                    '               <div class="iconRi"><img src="public/images/tj_all_iconIndividual_.png" alt="" height="20"/>&numsp;'+choiceDate[i]['cont5']+'人消费</div>'+
                    '           </div>'+
                    '       </div></a> '+
                    '   </div>'+
                    '   </li>'
                });
                $('.tj_All_Store_Li_cont').html(choiceHtml);
                require.async(['init'],function(temp){
                    temp.tj_all_xin_each();
                });
                }
        });
    }
    exports.ErgodicData =ErgodicData;
});
