/**
 * Created by Administrator on 2015/8/13.
 */
// 所有模块都通过 define 来定义
define(['zep'],function(require, exports, module) {
    require.async("../../../public/css/swiper3.1.0.min.css");

    function cx(){
        $(".cx_dj").on("click",function(){
            console.log(111);
            $(".cx_ys").toggle();
        });
        $(".cx_ml button").on("click",function(){
            $(this).parent().children().removeClass("cx_active");
            $(this).addClass("cx_active")
        });
    }
    function cx1(){
        $(".cx_swiper span").eq(0).css({opacity: "1"});
        $(".cx_swiper h3").eq(0).css({color:"#e76f16"});
        require.async("swiper",function(){
            var mySwiper = new Swiper ('.swiper-container', {
                pagination: '.swiper-pagination',
                onSlideChangeEnd: function(swiper){
                    var xb=swiper.activeIndex;
                    $(".cx_swiper span").css({opacity: "0"});
                    $(".cx_swiper span").eq(xb).css({opacity: "1"});
                    $(".cx_swiper h3").css({color:""});
                    $(".cx_swiper h3").eq(xb).css({color:"#e76f16"});
                    console.log(xb)
                }
            });

        });
    }
    function cx2(){
        var sz = $(".cx_sz").text();
        $(".cx_jia").on("click",function(){
                sz++;
                $(".cx_sz").text(sz);
        });
        $(".cx_jian").on("click",function(){
            if(sz>1){
            sz--;
            $(".cx_sz").text(sz);
            }
            else if(sz==1){
                $(".cx_sz").text(sz);
            }
        })


    }
    // 通过 exports 对外提供接口
    exports.fontcolor =cx;
    exports.fontcolor1 =cx1;
    exports.fontcolor2 =cx2;

});