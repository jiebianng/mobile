/**
 * 配置js别名
 */
seajs.config({
    alias: {
        'jq': 'jquery-1.9.1.min.js',
        'se_t': 'sea-text.js',
        'se_c': 'seajs-css.js',
        'angular':'angular-1.3.0.min.js',
        'bootstrap':'bootstrap.min.js',
        'jq_sou':'jquery.SuperSlide.2.1.1.source.js',
        'swiper':'swiper.min.js',
        'validform':'validform.js',
        'zep':'zepto.min.js',
        "main":'../static/js/main.js'
    }
});
/**
 * 加载css
 */
seajs.use(['se_c'],define(function(require,exports,module){
    require('../css/bootstrap.min.css');
    require('../css/animate.css');
    require('../css/style.css');
}));

//加载顶部展示界面
/**
 * 加载全局模块
 */
seajs.use(['init.js']);