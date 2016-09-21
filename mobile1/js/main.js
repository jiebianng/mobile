/**
 * Created by Administrator on 2015/9/26 0026.
 */
remAuto();//字体自适应
$(function(){
    swiper();//轮播
    choType();//选择切换
    returnTop();//返回顶部
    valCheck();//表单验证
    sendCode();//发送验证码
    OrderConFun();//我的订单滑动事件
});
//轮播
function swiper(){
    var le = $('.swiper-container').length;
    if(le>0){
        //一般轮播效果1
        new Swiper('.swiper-style1', {
            pagination: '.swiper-style1 .swiper-pagination',
            autoplay : 3000,
            loop:true,
            paginationClickable: true
        });
        //左右交换轮播效果2
        new Swiper('.swiper-style2',{
            slidesPerView: 3,
            paginationClickable: true,
            spaceBetween: 1,
            freeMode: true
        });
        //左右交换轮播效果3
        new Swiper('.swiper-style3',{
            slidesPerView: 4,
            paginationClickable: true,
            spaceBetween: 10,
            freeMode: true
        });
        //左右交换轮播效果4列表
        $('.swiper-style4 .swiper-container').each(function(){
            var _this = $(this);
            new Swiper(_this,{
                slidesPerView: 3,
                paginationClickable: true,
                spaceBetween: 10,
                freeMode: true
            });
        });
    }
}
//rem字体自适应
function remAuto(){
    (function (doc, win) {
        var docEl = doc.documentElement,
            resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
            recalc = function () {
                var clientWidth = docEl.clientWidth;
                if (!clientWidth) return;
                if(clientWidth>=750){
                    docEl.style.fontSize = '20px';
                }else{
                    docEl.style.fontSize = 10 * (clientWidth / 375) + 'px';
                }
            };
        if (!doc.addEventListener) return;
        win.addEventListener(resizeEvt, recalc, false);
        doc.addEventListener('DOMContentLoaded', recalc, false);
    })(document, window);
}
//选择切换
function choType(){
    //单选
    $('.OneChoose li').click(function(){
        var _this = $(this);
        var _has = $(this).hasClass('active');
        if(!_has){
            _this.addClass('active').siblings().removeClass('active');
        }
    });
    //多选
    $('.AllChoose li').click(function(){
        var _this = $(this);
        var _has = $(this).hasClass('active');
        if(!_has){
            _this.addClass('active');
        }else{
            _this.removeClass('active');
        }
    });
    //星星选择
    $('.StarColClick li').click(function(){
        var _this = $(this);
        var _has = $(this).hasClass('active');
        if(!_has){
            _this.addClass('active').prevAll().addClass('active');
        }else{
            _this.addClass('active').nextAll().removeClass('active');
        }
    });
}
//返回顶部
function returnTop(){
    $(window).scroll(function() {
        if ($(window).scrollTop() > 100) {
            $(".allReturnTop").fadeIn(1000);
        } else {
            $(".allReturnTop").fadeOut(1000);
        }
    });
    //当点击跳转链接后，回到页面顶部位置
    $(".allReturnTop").click(function() {
        $('body,html').animate({
                scrollTop: 0
            },600);
        return false;
    });
}
//表单验证
function valCheck(){
    var veForm = $(".registerform");
    if(veForm.length>0){
        veForm.Validform({
            datatype:{
                "nl": /^.{1,30}$/,//不能为空且为30字符
                "n": /^.{1,500}$/,//不能为空
                "address": /^.{2,100}$/,//地址不能为空且为2-100字符
                "name": /^.{6,20}$/,//不能为空且6到20位字符
                "phone":/^[1][0-9]{10}/,//手机号
                "code":/^(^\d{15}$|^\d{18}$|^\d{17}(\d|X|x))$///身份证
            },
            beforeSubmit:function(){
//                window.location.href=veForm.attr("dataUrl");
//                return false;
            }
        });
        veForm.find('textarea,input').each(function(){
            var _this = $(this);
            var check =_this.attr('datatype');
            if(check){
                FormEach();
                _this.on('keyup paste', function() {
                    FormEach();
                });
                function FormEach(){
                    var i = 0;
                    veForm.find('textarea,input').each(function(){
                        var _this = $(this);
                        var check =_this.attr('datatype');
                        if(check){
                            var val = _this.val();
                            if(val=='') {
                                i++;
                            }
                            if(i>0){
                                $("[type='submit']").addClass('body-back-6');
                            }else{
                                $("[type='submit']").removeClass('body-back-6');
                            }
                        }
                    });
                }
            }
        });
        $('#Validform_msg .iframe').html('<a class="Validform_close" href="javascript:void(0);">确定</a>');
        $('.Validform_close').click(function(){
            $('#Validform_msg').fadeOut(100);
        });
    }
}

//发送验证码
function sendCode(){
    $('.sendCodeCol').click(function(){
        var _this = $(this);
        var _Has = _this.hasClass("active");
        var con =$('.VerifyCoSeCon')
        if(!_Has){
            var i = 90;
            _this.addClass("active");
            var cle = setInterval(function(){
                i--;
                _this.html('<span class="fo-co-9">'+i+'s</span>后点击获取');
                if(i<=1){
                    _this.removeClass("active");
                    clearInterval(cle);
                    _this.html('点击获取');
                    con.html("请点击获取验证码");
                }else{
                    con.html("短信验证码已发送至手机13312344321");
                }
            },1000);
        }
    });
}
//我的订单滑动事件
function OrderConFun(){
    //我的订单页面滑动事件
    var le = $('.tj_all_swiperContainer').length;
    if(le>0){//跳转到第几页
        var initialSlide = 0;
        var src = window.location.href.split('PTopage=')[1];
        if(src!=undefined){
            initialSlide = src
        }
        new Swiper('.tj_all_swiperContainer', {
            pagination: '.tj_all_pagination',
            paginationClickable: true,
            paginationBulletRender: function (index, className) {
                var indexName = '';
                if(index==0){
                    indexName = '全部订单'
                }else if(index==1){
                    indexName = '待付款'
                }else if(index==2){
                    indexName = '待发货'
                }else if(index==3){
                    indexName = '待收货'
                }else if(index==4){
                    indexName = '待评价'
                }
                return '<li class="' + className + '">' + indexName + '</li>';
            },initialSlide :initialSlide,
            onSlideChangeEnd: function(){
                $('body,html').animate({
                    scrollTop: 0
                },10);
            }
        });
    }
}
//规格展示及操作
function themePopCarFun(){
    //.themePControlIndex 首页点入 .themePControlBuy 点击立即购买 themePControlCar 点击加入购物车
    var themePopCar = $('.themePopCar');//弹出层蒙版
    $('.themePControlIndex').unbind('click').bind('click',function(){
        var _this = $(this);
        themePopCar.find('.btnShow2').show();
        themePopCar.find('.btnShow1').hide();
        ControlFun(_this);
    });
    $('.themePControlBuy').unbind('click').bind('click',function(){
        var _this = $(this);
        themePopCar.find('.btnShow1').show();
        themePopCar.find('.btnShow2').hide();
        ControlFun(_this);
        themePopCar.find('.NextBtn').unbind('click').bind('click',function(e){
            e.stopPropagation();
            toBuyFun();
        });
    });
    $('.themePControlCar').unbind('click').bind('click',function(){
        var _this = $(this);
        themePopCar.find('.btnShow1').show();
        themePopCar.find('.btnShow2').hide();
        ControlFun(_this);
        themePopCar.find('.NextBtn').unbind('click').bind('click',function(e){
            e.stopPropagation();
            goInCarFun();
        });
    });
    //操作弹出层并遍历数据
    function ControlFun(_this){
        var goodsId = _this.attr('data-goodsid');
        themePopCar.show();
        themePopCar.find('.themePopCarCon').slideDown(200);
    }
    //关闭蒙版
    themePopCar.find('.closePop').unbind('click').bind('click',function(){
        themePopCar.fadeOut(100);
        themePopCar.find('.themePopCarCon').fadeOut(100);
    });
    //选择规格遍历
    themePopCar.find('.specShow').each(function(){
        $(this).find('.specList li').each(function(i){
            var _this = $(this);
            if(i==0){
                ChooseNum(_this);
            }
        }).unbind('click').bind('click',function(){
            var _this = $(this);
            ChooseNum(_this);
        });
    });
    function ChooseNum(_this){
        _this.addClass('active').siblings().removeClass('active');
        var qty = _this.attr('data-qty');
        var price = _this.attr('data-price');
        var goodsImageUrl = _this.attr('data-goodsImageUrl');
        themePopCar.find('.numCot').html(qty);
        var ht = '';
        themePopCar.find('.specShow').each(function(){
            ht += $(this).find('.specList .active').html()+'、';
        });
        $(".themePControl").html(ht);
    }
    //操作选择数量
    //减少
    themePopCar.find('.theControlNum .le').unbind('click').bind('click',function(){
        var i = parseInt(themePopCar.find('.theControlNum .input').val());
        if(i>1){
            i--;
            themePopCar.find('.theControlNum .input').val(i);
        }
    });
    //添加
    themePopCar.find('.theControlNum .ri').unbind('click').bind('click',function(){
        var numCot = parseInt(themePopCar.find('.numCot').html());
        var i = parseInt(themePopCar.find('.theControlNum .input').val());
        if(i<numCot){
            i++;
            themePopCar.find('.theControlNum .input').val(i);
        }
    });
    themePopCar.find('.BuyImmediatelyBtn').unbind('click').bind('click', function () {
        toBuyFun();
    });
    themePopCar.find('.GoInCarBtn').unbind('click').bind('click',function(){
        goInCarFun();
    });
    //立即购买操作
    function toBuyFun(){
        //规格id
        var id = themePopCar.find('.specList .active').attr('data-GoodsInventoryId');
        //购买数量
        var num = parseInt(themePopCar.find('.theControlNum .input').val());
        var numCot = parseInt(themePopCar.find('.numCot').html());
        //商品id
        var goodsId = parseInt(themePopCar.find('.specList .active').attr('data-goodsId'));
        if (num > numCot) {
            num = numCot;
        }
        window.location.href = '确认订单.html?goodsId=' + goodsId + '?detailQuantity=' + num + '?detailGoodsInventoryId=' + id;
    }
    //加入购物车操作
    function goInCarFun(){
        //规格id
        var id = parseInt(themePopCar.find('.specList .active').attr('data-GoodsInventoryId'));
        //购买数量
        var num = parseInt(themePopCar.find('.theControlNum .input').val());
        //商家id
        var sellerId = parseInt(themePopCar.find('.specList .active').attr('data-sellerId'));
        //商品id
        var goodsId = parseInt(themePopCar.find('.specList .active').attr('data-goodsId'));
        //库存
        var numCot = parseInt(themePopCar.find('.numCot').html());
        if(num>numCot){
            num = numCot;
        }
        var data = {
            sellerId:sellerId,
            goodsId:goodsId,
            goodsNum:num,
            goodsInventoryId:id
        };
    }
}