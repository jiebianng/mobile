/**
 * Created by Administrator on 15-8-17.
 */
define(['zep'],function(require, exports, module) {
//    遍历数据
    function ErgodicData(){
        $.ajax({
            url:"public/templates/json/json.json",
            type:"get",
            dataType:"json",
            success:function(data){
                var choiceDate = data['DeliciousFood'];
                var choiceHtml='';
                $.each(choiceDate,function(i){
                    choiceHtml+='<li>'+
                    '<img src="public/images/tj_All_Store_Li_cont_back.jpg" alt="" width="100%"/>'+
                    '<div class="b_con">'+
                    '       <div class="b_le">'+
                    '           <a href="cx_zxdc.html" class="_a">'+
                    '               <img src="public/images/tj_All_Store_Li_contb_le.png" alt="" width="88%"  class="chan"/>'+
                    '             <div  class="ImgShow">'+
                    '                 <img src="'+choiceDate[i]['cont8']+'" alt="" height="100%"/>'+
                    '             </div>'+
                    '        </a>'+
                    '    </div>'+
                    '     <div class="b_ri"><a href="cx_zxdc.html">'+
                    '         <h3>'+choiceDate[i]['cont2']+'</h3>'+
                    '         <p class="_p">描述：'+choiceDate[i]['cont6']+'</p>'+
                    '        <div class="clearfix">'+
                    '             <div class="iconLe"><img src="public/images/tj_all_icon_Location.png" alt="" height="20"/>&numsp;'+choiceDate[i]['cont4']+'</div>'+
                    '            <div class="iconRi"><img src="public/images/tj_all_iconIndividual_.png" alt="" height="20"/>&numsp;'+choiceDate[i]['cont5']+'人消费</div>'+
                    '        </div>'+
                    '        <div class="clearfix">'+
                    '            <div class="iconLe"><span class="f_size_2">人均'+choiceDate[i]['cont7']+'</span></div>'+
                    '            <div class="iconRi"><img src="public/images/TravelNotes_h3Logo3.png" alt="" height="20"/><span class="f_size_2_Col">&numsp;&numsp;...</span></div>'+
                    '        </div>'+
                    '    </div></a>'+
                    ' </div>'+
                    '  </li>'
                });
                $('.tj_All_Store_Li_cont').html(choiceHtml);
            }
        });
    }
    exports.ErgodicData =ErgodicData;
});