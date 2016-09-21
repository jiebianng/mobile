/**
 * Created by Administrator on 15-8-12.
 */
define(['zep'],function(require, exports, module) {
//    切换效果
    function HeightChange(){
        var he = $(".tj_all_Map ._bImg").height();
        console.log(he);
        $('.tj_all_Map_heightAuto').css("height",he+"px");
    }
    exports.HeightChange =HeightChange;
});
