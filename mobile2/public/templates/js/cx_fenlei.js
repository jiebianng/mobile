/**
 * Created by Administrator on 2015/8/10.
 */


// 所有模块都通过 define 来定义
define(['zep','jq'],function(require, exports, module) {
    require.async("../../../public/css/swiper3.1.0.min.css");

    function cx(){
        var shuzu=["cx_fl1.jpg","cx_fl2.jpg","cx_fl3.jpg","cx_fl4.png"];
        var tempurl = "";
        $.each($(".cx_left li"),function(i,obj){
            tempurl = "url('public/images/"+shuzu[i]+"')no-repeat";
            $(obj).css({
                background: tempurl
            })
        });
    }
    function cx1(){
        require.async("swiper",function(){
            var mySwiper = new Swiper ('.swiper-container', {
                //direction: 'vertical',
                pagination: '.swiper-pagination',
                loop: true
            });
        });

    }
    function cx2(){

            $(".caption p").each(function(){
                var yc = $(this).text().length;
                if(yc>15){
                    var ss =  $(this).text().substring(0,15);
                    $(this).text(ss+'...');
                }
            });


    }

    var laststart = $(".nav_ul li").eq(0);
    function cx3(){
        var shuzu=["cx_dpsy.png","nav2.png","nav3.png"];
        var shuzu1=["nav1.png","cx_qbbb.png","cx_xpsj.png"];
        $(".nav_ul li").eq(0).attr("src","public/images/nav1.png");
        $(".cx_news").eq(0).show();
        $(".nav_ul li").on("click",function(){
            if(laststart!=null){
                var lastindex  = $(laststart).index();
                console.log(lastindex);
                $(laststart).find("img").attr("src","public/images/"+shuzu[lastindex]);
                console.log($(laststart))
            }
            laststart = this;
            var xb  = $(this).index();
            $(this).find("img").attr("src","public/images/"+shuzu1[xb]);
            $(".cx_news").hide();
            $(".cx_news").eq(xb).show()
        });



    }
    // 通过 exports 对外提供接口
    exports.fontcolor =cx;
    exports.fontcolor1 =cx1;
    exports.fontcolor2 =cx2;
    exports.fontcolor3 =cx3;
});




