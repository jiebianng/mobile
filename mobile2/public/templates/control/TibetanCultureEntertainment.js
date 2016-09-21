/**
 * Created by Administrator on 15-8-17.
 */
define(['zep'],function(require, exports, module) {
//    遍历数据
    function ErgodicData(){
        //        藏羌体验
        $.ajax({
            url:"public/templates/json/json.json",
            type:"get",
            dataType:"json",
            success:function(data){
                var choiceDate = data['TibetanCultureEntertainment_mid'];
                var choiceHtml='';
                choiceHtml+='<ul class="swiper-wrapper clearfix">';
                $.each(choiceDate,function(i){
                    choiceHtml+='<li><a href="cx_jdxqgmxz_ktv.html"><img src="'+choiceDate[i]['cont1']+'" alt="" width="94%"/><h3 class="_h3">'+choiceDate[i]['cont2']+'</h3></a></li>';
                });
                choiceHtml+='</ul>';
                choiceHtml+='<div class="swiper-pagination clearfix"></div>';
                $('.View_intro_List_imgShowBack .TopCon').html(choiceHtml);
            }
        });
    }
    exports.ErgodicData =ErgodicData;
});