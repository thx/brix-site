/* global define, window */
define(
    [
        'jquery',
        'brix/base',
        'css!./imager.css'
    ],
    function(
        $,
        Brix
    ) {
        /*
            ### 数据
                {}
            ### 选项
                TODO
            ### 属性
                TODO
            ### 方法
                TODO
            ### 事件
                TODO
            ===

            ### 公共选项
                data template css
            ### 公共属性
                element relatedElement 
                moduleId clientId parentClientId childClientIds 
                data template css
            ### 公共方法
                .render()
            ### 公共事件
                ready destroyed

        */
        return Brix.extend({
            options: {
                src: '',
                left: 0,
                top: 0,
                width: '',
                height: ''
            },
            init: function() {},
            render: function() {
                var that = this
                var $wrapper = $(this.element).css({
                    overflow: 'hidden'
                }).addClass('imager')
                var imgWidth, imgHeight
                var $img = $('<img>')
                    .attr('src', this.options.src)
                    .on('load', function(event) {
                        var maxWidth = $wrapper.width()
                        var maxHeight = $wrapper.height()
                        var img = event.target
                        if (!imgWidth) {
                            imgWidth = img.width
                            imgHeight = img.height
                            that.options.width = that.options.width || imgWidth
                            that.options.height = that.options.height || imgHeight
                        }
                        var width, height, left, top, rate

                        if (maxWidth >= imgWidth) return

                        $wrapper.height(maxWidth / (imgWidth / imgHeight))
                        // 小于核心区域
                        if (maxWidth < that.options.width) {
                            rate = maxWidth / that.options.width
                            width = imgWidth * rate
                            height = imgHeight * rate
                            left = -that.options.left * rate
                            top = -that.options.top * rate
                        } else {
                            // 大于核心区域
                            if (maxWidth < imgWidth) {
                                // 
                                rate = imgWidth / imgHeight
                                left = -that.options.left + (maxWidth - that.options.width) / 2
                                maxHeight = maxWidth / rate
                                top = -that.options.top + (maxHeight - that.options.height) / 2
                            }
                        }
                        $(img).css({
                            'margin-left': Math.min(0, left),
                            'margin-top': Math.min(0, top),
                            width: width,
                            height: height
                        })
                    }).appendTo($wrapper)
                $(window).on('resize', function() {
                    $img.trigger('load')
                })
            }
        })
    }
)