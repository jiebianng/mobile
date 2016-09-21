/**
 * Created by Administrator on 15-8-11.
 */
define(["zep"],function(require,exports,module){
//    切换动画
    function tj_All_Video(){
//          播放的具体时间(秒)
        var _video = $("#video");
        setInterval(function(){
            var jsonItem ='';
            var currentTime =  parseInt(_video[0].currentTime);
            var duration =  parseInt(_video[0].duration);
//             播放的进度条
            var lenB = parseInt((currentTime/duration)*100);
            $(".tj_All_timeShow_dian").css({"width":lenB+'%'});
            var _hour='';
            var _min='';
            var _s='';
            if((currentTime>59)&&(currentTime<60*60)){
                var min = parseInt(currentTime/60);
                var s = parseInt(currentTime%60);
                if(min<10){
                    _min='0'+min+''
                }else{
                    _min=min;
                }
                if(s<10){
                    _s='0'+s+''
                }else{
                    _s=s;
                }
                jsonItem='00:'+_min+':'+_s;
            }
            else if(currentTime>60*60){
                var hour = parseInt(currentTime/(60*60));
                var min = parseInt((currentTime%(60*60))/60);
                var s = parseInt(currentTime%60);
                if(hour<10){
                    _hour='0'+hour+''
                }else{
                    _hour=hour;
                }
                if(min<10){
                    _min='0'+min+''
                }else{
                    _min=min;
                }
                if(s<10){
                    _s='0'+s+''
                }else{
                    _s=s;
                }
                jsonItem=_hour+':'+_min+':'+_s;
            }else{
                if(currentTime<10){
                    jsonItem='00:00:0'+currentTime+'';
                }else{
                    jsonItem='00:00:'+currentTime+'';
                }
            }
            $(".tj_All_timeShow .currentTime").html(jsonItem);
        },1000);
//          播放总秒数
        var duration =  parseInt(_video[0].duration);
        var dur_hour = parseInt(duration/(60*60));
        var dur_min = parseInt((duration%(60*60))/60);
        var dur_s = parseInt(duration%60);
        var _dur_hour='';
        var _dur_min='';
        var _dur_s='';
        var _duration='';
        if(dur_hour<10){
            _dur_hour='0'+dur_hour+''
        }else{
            _dur_hour=dur_hour;
        }
        if(dur_min<10){
            _dur_min='0'+dur_min+''
        }else{
            _dur_min=dur_min;
        }
        if(dur_s<10){
            _dur_s='0'+dur_s+''
        }else{
            _dur_s=dur_s;
        }
        _duration=_dur_hour+':'+_dur_min+':'+_dur_s;
        $(".tj_All_timeShow .duration").html(_duration);
//        暂停/播放切换
        var tj_All_timeShow_play = $(".tj_All_timeShow_play");
        var tj_All_timeShow_btl = $(".tj_All_timeShow_btl");
        var tj_All_timeShow_btr = $(".tj_All_timeShow_btr");
        tj_All_timeShow_play.each(function(){
            var has =  $(this).hasClass("playCur");
            if(!has){
                _video[0].pause();
                _video[0].controls=false;
            }else{
                _video[0].play();
                _video[0].controls=false;
            }
        });
        tj_All_timeShow_play.click(function(){
            var _this = $(this);
            var has =  _this.hasClass("playCur");
            if(!has){
                _video[0].play();
                _this.addClass("playCur");
            }else{
                _video[0].pause();
                _this.removeClass("playCur");
            }
        });
        tj_All_timeShow_btl.click(function(){
            ajaxShow(1);
        });
        tj_All_timeShow_btr.click(function(){
            ajaxShow(2);
        });
        function ajaxShow(prevLeng){
            $.ajax({
                url:"public/templates/json/json.json",
                type:"get",
                dataType:"json",
                success:function(data){
                    var choiceDate = data['View_Video'];
                    var item =[];
                    var j=0;
                    $.each(choiceDate,function(i){
                        var linkc = choiceDate[i]['cont3'];
                        item.push(linkc);
                        if(linkc==(_video.attr("src"))){
                           j=i;
                        }
                    });
                    var prev = item[j-1];
                    var nex = item[j+1];
                    _video.attr("src",nex);
                    if(prevLeng==1&&prev!=null){
                        _video.attr("src",prev);
                    }else if(prevLeng==2&&nex!=null){
                        _video.attr("src",nex);
                    }
                }
            });
        }
    }
    exports.tj_All_Video =tj_All_Video;
//    视频展示
    function tj_All_Check(){
        $.ajax({
            url:"public/templates/json/json.json",
            type:"get",
            dataType:"json",
            success:function(data){
                var choiceDate = data['View_Video'];
                var choiceHtml='';
                $.each(choiceDate,function(i){
                    choiceHtml+='<li data-link="'+choiceDate[i]['cont3']+'">'+
                    '<img src="public/images/tj_All_Store_Li_contb_le.png" alt="" width="90%">'+
                    '   <div class="contLi">'+
                    '       <img src="'+choiceDate[i]['cont1']+'" alt="" height="100%">'+
                    '       </div>'+
                    '       <img src="public/images/tj_All_timeShow_b_h3.png" alt="" width="80%" class="tj_All_timeShow_b_h3_img">'+
                    '           <h3 class="tj_All_timeShow_b_h3">'+choiceDate[i]['cont2']+'</h3>'+
                    '       </li>';
                });
                var _videoList = $('.tj_all_videoListShow');
                _videoList.html(choiceHtml);
                var nn_src = $('.tj_all_videoListShow li').eq(0).attr("data-link");
                $("#video").attr({"src":nn_src});
                _videoList.find("li").click(function(){
                    var link = $(this).attr("data-link");
                    $("#video").attr({src:link});
                });
            }
        });
    }
    exports.tj_All_Check =tj_All_Check;
});
