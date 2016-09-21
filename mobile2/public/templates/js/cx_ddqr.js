/**
 * Created by Administrator on 2015/8/13.
 */
// 所有模块都通过 define 来定义
define(['zep'],function(require, exports, module) {

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
    var laststart = $(".cx_ddnav div").eq(0);

    function cx1(){

        var shuzu=["cx_d11.png","cx_d22.png","cx_d33.png","cx_d44.png"];
        var shuzu1=["cx_d1.png","cx_d2.png","cx_d3.png","cx_d4.png"];
        $(".cx_ddnav div img").eq(0).attr("src","public/images/cx_d11.png");
        $(".cx_ddnav div p").eq(0).addClass("cx_active2");
        $(".cx_qh").eq(0).show();
        $(".cx_ddnav div").on("click",function(){
            if(laststart!=null){
                var lastindex  = $(laststart).index();
                console.log(lastindex);
                $(laststart).find('img').attr("src","public/images/"+shuzu1[lastindex]);
            }
            laststart = this;

            console.log(laststart);
            var xb  = $(this).index();
            $(".cx_ddnav div p").removeClass("cx_active2");
            $(this).find('img').attr("src","public/images/"+shuzu[xb]);
            $(this).find('p').addClass("cx_active2");
            $(".cx_qh").hide();
            $(".cx_qh").eq(xb).show()
        });



    }
    function cx3(){
        $(".zuihou_right").eq(0).show();
        $(".zuihou_left li").eq(0).addClass("cx_active3");

        $(".zuihou_left li").on("click",function(){
            $(".zuihou_right").hide();
            $(".zuihou_left li").removeClass("cx_active3");
            $(this).addClass("cx_active3");
             var nm = $(this).index();
            $(".zuihou_right").eq(nm).show()
        })
    }


    // 通过 exports 对外提供接口
    exports.fontcolor2 =cx2;
    exports.fontcolor1 =cx1;
    exports.fontcolor3 =cx3;

});