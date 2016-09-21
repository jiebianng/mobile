/**
 * Created by Administrator on 15-8-12.
 */
define(['zep'],function(require, exports, module) {
//    切换效果
    function StopHotelChange(){
        $('.ViewSpotDetails_BotC .Control li').click(function(){
            var _this = $(this);
            var _has = _this.hasClass("cur");
            if(!_has){
                _this.addClass("cur").siblings().removeClass("cur");
            }
            var i =_this.index();
            var cont = _this.parents('.ViewSpotDetails_BotC').find('.ContBast');
            cont.hide();
            cont.eq(i).addClass("cont_active").show();
        });
    }
    exports.StopHotelChange =StopHotelChange;
});
