/**
 * Created by Administrator on 15-8-13.
 */
define(['zep'],function(require, exports, module) {
//    处理选中状态与金额计算
    function SelectChange(){
//        初始化
        ShoppingCartEach();
//        未选中
        var imgNur ='public/images/ShoppingCart_checkNur.png';
//        已选中
        var imgCur ='public/images/ShoppingCart_checkCur.png';
        //   单个全选
        $('.SPImgCur').attr('src',imgCur);
        $('.ShoppingCart_head .check').click(function(){
            var _this = $(this);
            var _parentS=_this.parents(".ShoppingCart");
            var _has = _this.hasClass("SPImgCur");
            if(!_has){
                _this.addClass('SPImgCur').attr('src',imgCur);
                _parentS.find('.CartUl .check').addClass('SPImgCur').attr('src',imgCur);
            }else{
                _this.removeClass('SPImgCur').attr('src',imgNur);
                _parentS.find('.CartUl .check').removeClass('SPImgCur').attr('src',imgNur);
            }
            ShoppingCartEach();
        });
        $('.ShoppingCart .CartUl .check').click(function(){
            var _this = $(this);
            var _has = _this.hasClass("SPImgCur");
            if(!_has){
                _this.addClass('SPImgCur').attr('src',imgCur);
            }else{
                _this.removeClass('SPImgCur').attr('src',imgNur);
            }
            ShoppingCartEach();
        });
        function ShoppingCartEach(){
            var allMoney = 0;
            $('.ShoppingCart').each(function(){
//              处理选中
                var _this1 = $(this).find('.ShoppingCart_head .check');
                var _this2 = $(this).find('.CartUl .check');
                var _SPImgCur2 = $(this).find('.CartUl .SPImgCur');
                var _length2 = _this2.length;
                if(_length2==_SPImgCur2.length){
                    _this1.addClass('SPImgCur').attr('src',imgCur);
                }else{
                    _this1.removeClass('SPImgCur').attr('src',imgNur);
                }
//              处理金钱
                var moneyLi = $(this).find('.CartUl li');
                var money =0;
                moneyLi.each(function(){
                    var _this = $(this);
                    var choice = _this.find('.CartUl .check').hasClass('SPImgCur');
                    var coll = parseFloat(_this.find('.tj_all_sP_addLength .col1Data').html());
                    var collLength = parseInt(_this.find('.tj_all_sP_addLength .collLengthData').html());
                    if(choice){
                        money += parseFloat(coll*collLength);
                    }
                });
                $(this).find('.ShoppingCart_all_price .span1').html('￥'+money.toFixed(2));
                allMoney+=money;
            });
//          处理全选事件包括计算金额
            var headSp = $('.ShoppingCart_head .SPImgCur').length;
            var headLength = $('.ShoppingCart_head .check').length;
            var _linkImg = $('.ShoppingCarts_all_control ._linkImg');
            if(headLength==headSp){
                _linkImg.addClass('SPImgCur').attr('src',imgCur);
            }else{
                _linkImg.removeClass('SPImgCur').attr('src',imgNur);
            }
            $('.ShoppingCarts_all_control .col1').html('￥'+allMoney.toFixed(2));
        }
//        多个全选
        $('.ShoppingCarts_all_control .click').click(function(){
            var linkImg = $(this).find('._linkImg');
            var hasLink = linkImg.hasClass('SPImgCur');
            if(!hasLink){
                linkImg.addClass('SPImgCur').attr('src',imgCur);
                $('.ShoppingCart .CartUl .check').addClass('SPImgCur').attr('src',imgCur);
            }else{
                linkImg.removeClass('SPImgCur').attr('src',imgNur);
                $('.ShoppingCart .CartUl .check').removeClass('SPImgCur').attr('src',imgNur);
            }
            ShoppingCartEach();
        });
//      处理添加商品个数
        $('.tj_all_sP_addControl').each(function(){
            var _this = $(this);
            var le = _this.find('.le');
            var ri = _this.find('.ri');
            var mi = _this.find('.mi');
            var _li =_this.parents('.N_Con');
            var collLengthDate = _li.find('.tj_all_sP_addLength .collLengthData');
            var length = parseInt(mi.html());
            le.click(function(){
                if(length>1){
                    length--;
                    mi.html(length);
                    collLengthDate.html(length);
                }
                else if(length=1){
                    mi.html(length);
                    collLengthDate.html(length);
                }
                ShoppingCartEach();
            });
            ri.click(function(){
                if(length>0){
                    length++;
                    mi.html(length);
                    collLengthDate.html(length);
                }
                ShoppingCartEach();
            });
        });
    }
    exports.SelectChange =SelectChange;
});
