/**
 * numberkeyboard
 * xisa
 * 0.0.1(2014-2016)
 */
 /*
    底层库使用 Zepto 或者 jQuery
 */
;(function($){
    'use strict';
    // numberkeyboard插件
    $.fn.numberkeyboard = function (options) {
        return new NumberKeyboard(this, options);
    };
    function NumberKeyboard(element, options) {
        this.ele = element;
        // 创建id
        if (!this.ele.attr('id')) {
            this.id = 'numberkeyboard' + Math.random().toString().replace('0.', '');
            this.ele.attr('id', this.id);
        }
        this.init(options);
    }
    NumberKeyboard.prototype = {
        version: '0.0.1',
        // 初始化
        init: function (options) {
            //
            //
        },
        // 渲染
        render: function () {
            //
            //
        },
        // 事件
        event: function () {
            //
            //
        },
        // 显示
        show: function () {
            //
            //
        },
        // 隐藏
        show: function () {
            //
            //
        },
        // 销毁
        destroy: function () {
            //
            //
        }
    }
})(window.Zepto || window.jQuery);