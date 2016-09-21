/**
 * Created by Administrator on 15-8-12.
 */
define(["zep"],function(require,exports,module){
    function Query(){
        var _mi=  $('.Traffic_Train_traffic_mi');
        _mi.find('._a1').click(function(){
          var span1 = _mi.find('._span1').html();
          var span2 = _mi.find('._span2').html();
            _mi.find('._span1').html(span2);
            _mi.find('._span2').html(span1);
        });
    }
    exports.Query =Query;
    function Traffic_Result(){
        var _mi=  $('.Traffic_Train_traffic_mi');
        _mi.find('._a1').click(function(){
          var span1 = _mi.find('._span1').html();
          var span2 = _mi.find('._span2').html();
            _mi.find('._span1').html(span2);
            _mi.find('._span2').html(span1);
        });
    }
    exports.Traffic_Result =Traffic_Result;
});