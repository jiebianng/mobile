$(function(){
    zj_height();
});


function zj_height(){
    var he =  document.documentElement.clientHeight//高
    $(".zjGm_hide").css({
        height: he +"px"
    });
}