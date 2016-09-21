/**
 * Created by Administrator on 15-8-15.
 */
define(['zep','http://int.dpool.sina.com.cn/iplookup/iplookup.php?format=js'],function(require, exports, module) {
//    天气计算
    function indexWeather(){
        $.ajax({
            url:"./public/templates/json/tianqi.json",
            type:"get",
            dataType:"json",
            success:function(data){
                var province=remote_ip_info.city;
                var city_id = data[province];
                $.ajax({
                    url:"http://weather.123.duba.net/static/weather_info/"+city_id+".html",
                    type:"get",
                    dataType:"jsonp",
                    success:function(data){
                         var weatherinfo = data['weatherinfo'];
                        $('.index_weatherAll').each(function(){
                            if(weatherinfo['dt']<10){
                                $(this).find('._weather1').attr("src",'http://s0.hao123img.com/res/weather/b/0'+(weatherinfo['dt']+1)+'.png');
                            }else{
                                $(this).find('._weather1').attr("src",'http://s0.hao123img.com/res/weather/b/'+(weatherinfo['dt']+1)+'.png');
                            }
                            $(this).find('._weather2').html(weatherinfo['temp']+'℃');
                            $(this).find('._weather3').html(weatherinfo['weather1']);
                            $(this).find('._weather4').click(function(){
                                location.reload();
                            });
                            $(this).find('._weather5 span').html(weatherinfo['city']);
                            $(this).find('._weather6').html(weatherinfo['date_y']+'&nbsp;'+weatherinfo['week']);
                        });
                    }
                });
            }
        });
    }
    exports.indexWeather =indexWeather;
});
