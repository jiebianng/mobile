/**
 * Created by Administrator on 15-8-10.
 */
define(['jq'],function(require,exports,module){
//    切换动画
    function tj_All_Carousel(page){
//        轮播
        $.ajax({
            url:"public/templates/json/json.json",
            type:"get",
            dataType:"json",
            success:function(data){
                var choiceDate = data[page];
                if(page!=undefined){
                    var choiceHtml='';
                    choiceHtml+='<ul class="swiper-wrapper clearfix">';
                    $.each(choiceDate,function(i){
                        choiceHtml+='<li class="swiper-slide"><a href="'+choiceDate[i]['cont2']+'"><img src="'+choiceDate[i]['cont1']+'" alt="" width="100%"/></a></li>';
                    });
                    choiceHtml+='</ul>';
                    choiceHtml+='<div class="swiper-pagination clearfix"></div>';
                    $('.tj_All_Carousel').html(choiceHtml);
                    require.async(['swiper'],function(){
                        var swiper = new Swiper('.tj_All_Carousel', {
                            pagination: '.swiper-pagination',
                            paginationClickable: true
                        });
                    });
                }else{
                    $('.tj_All_Carousel').html('');
                }
            }
        });

    }
    exports.tj_All_Carousel =tj_All_Carousel;
});