/*
* Associated Selector
*
* https://github.com/walkerchiu/jQuery-selector-associated
*
*/

(function(factory){
    if (typeof define === 'function' && define.amd) {   /* RequireJS */
        define(['jquery'], factory);
    } else if (typeof exports === 'object') {           /* Backbone.js */
        factory(require('jquery'));
    } else {                                            /* Jquery plugin */
        factory(jQuery);
    }
}(function($){
    'use strict';

    let DefaultSettings = {
        "level": 3,
        "data": [
            {
                "value": "OptionA", "text": "",
                "data": [
                    {
                        "value": "OptionAA", "text": "",
                        "data": [
                            {
                                "value": "OptionAA1", "text": "",
                                "data": []
                            },
                            {
                                "value": "OptionAA2", "text": "",
                                "data": []
                            }
                        ]
                    },
                    {
                        "value": "OptionAB", "text": "",
                        "data": []
                    }
                ]
            }
        ]
    };

    $.fn.WKS_cal = function (settings) {
        return this.each( function (key,value) {
            $(this).on("change", function () {
                let block  = $(this).find("option:selected").data("block");
                if (typeof block === 'undefined') return false;
                let blocks = block.split("_");
                let count  = blocks.length-1;

                if (count < settings.level) {
                    let selector = $(this).parent().find("select[data-type='WKS']").eq(count);
                    for (let index=count;index<settings.level;index++)
                        $(this).parent().find("select[data-type='WKS']").eq(index).empty();
                    let obj = settings.data[blocks[0]];
                    for (let index=1; index<count; index++) {
                        obj = obj.data[blocks[index]];
                    }
                    if (obj.data.length) {
                        $.each(obj.data, function (i, item) {
                            selector.append($('<option></option>').data('block', block+i+'_').val(item.value).text(item.text));
                        });
                        selector.show();
                    } else {
                        selector.hide();
                    }
                    selector.eq(0).trigger("change");
                }
            });
        });
    };
    $.fn.WKS = function (options) {
        let settings = $.extend(DefaultSettings, options);

        let selector = $(this).find("select[data-type='WKS']");
        selector.WKS_cal(settings);

        $.each(settings.data, function (i, item) {
            selector.eq(0).append($('<option></option>').data('block', i+'_').val(item.value).text(item.text));
        });
        selector.eq(0).trigger("change");
    };
    $.fn.WKS_init = function (options) {
        let settings = $.extend(DefaultSettings, options);

        $(this).find("[data-type='WKS_show']").each( function () {
            $(this).WKS(settings);
        });
    };
}));
