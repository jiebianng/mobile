/**
 * Created by Administrator on 15-8-13.
 */
define(["zep"],function(require,exports,module){
//    弹出表现层
    function oPpopup(){
        var he = document.documentElement.clientHeight;//高
        console.log(he);
        $('.tj_All_BastPopup').css({
            "height":he+"px"
        });
        $(".tj_All_BastPopupEsc").click(function(){
            $(this).parents(".tj_All_BastPopup").hide();
        });
        $(".tj_All_BastPopupOpen").click(function(){
            $(".tj_All_BastPopup").show();
        });
    }
    exports.oPpopup =oPpopup;
});