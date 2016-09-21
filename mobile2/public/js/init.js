/**
 * Created by Administrator on 15-8-10.
 */

//加载顶部展示界面
/**
 * 加载全局模块
 */
define(function(require,exports,module){
    require('zep');
//        加载顶部页面
    var _head = $(".templates_Head");
    var _head_tem = _head.attr("data-template");
    if(_head_tem=='tj_all_index_head'){
        var templates_Head = require('../templates/tj_all_index_head.html');
        _head.html(templates_Head);
    }
    if(_head_tem=='tj_all_index_headSearch'){
        var tj_all_index_headSearch = require('../templates/tj_all_index_headSearch.html');
        _head.html(tj_all_index_headSearch);
    }
//        加载底部页面
    var _footer = $(".templates_Footer");
    var _footer_tem = _footer.attr("data-template");
    if(_footer_tem=='tj_All_footer'){
        var templates_Footer = require('../templates/tj_All_footer.html');
        _footer.html(templates_Footer);
    }
    if(_footer_tem=='tj_All_footerDetails'){
        var tj_All_footerDetails = require('../templates/tj_All_footerDetails.html');
        _footer.html(tj_All_footerDetails);
    }
//    遍历星星自动打分
    exports.tj_all_xin_each = function(){
        $(".tj_all_xin_each").each(function(){
            var textFloat = parseFloat($(this).find('._span').html());
            var textInt = parseInt($(this).find('._span').html());
            $(this).find('.tj_all_xin li').each(function(i){
                if(textFloat>textInt){
                    if(textInt>i){
                        $(this).addClass("cur");
                    }
                    else if(textInt==i){
                        $(this).addClass("ban");
                    }
                }else{
                    if(textInt>i){
                        $(this).addClass("cur");
                    }
                }
            });
        });
    };
    //    店铺点击查询效果切换
    $('.tj_All_Store_middle .cont li').click(function(){
        var _this = $(this);
        var _has = _this.hasClass("current");
        if(!_has){
            _this.addClass("current");
        }else{
            _this.removeClass("current");
        }
    });

});