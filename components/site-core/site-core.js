/* global define, require */
define(
    [
        'jquery', 'underscore',
        'brix/base',
        './site-core.tpl.js',
        'css!./site-core.css'
    ],
    function(
        $, _,
        Brix,
        template
    ) {
        return Brix.extend({
            options: {},
            init: function() {
                // 支持自定义 HTML 模板 template
                template = this.options.template || template
                    // 支持自定义 CSS 样式
                if (this.options.css) require('css!' + this.options.css)
            },
            render: function() {
                var html = _.template(template)(this.data)
                $(this.element).append(html)
            },
            data: {
                components: [{
                    name: 'Brix Loader',
                    resp: 'brix-loader',
                    desc: '组件加载器，负责管理组件的整个生命周期，包括加载、初始化、渲染和销毁。',
                    links: [
                        ['GitHub', 'https://github.com/thx/brix-loader']
                    ]
                }, {
                    name: 'Brix Base',
                    resp: 'brix-base',
                    desc: '组件基类，<a href="https://github.com/thx/brix-loader/blob/master/src/brix/loader.js#L3">Brix Component Definition</a> 的最简实现。在编写 Brix Component Implement 时，建议从继承该实现开始。',
                    links: [
                        ['GitHub', 'https://github.com/nuysoft/brix-base']
                    ]
                }, {
                    name: 'Brix Event',
                    resp: 'brix-event',
                    desc: '支持 bx-type 风格的事件模型，实现事件与与 DOM 结构的松耦合，提升可读性、可复用性和可测试性。',
                    links: [
                        ['GitHub', 'https://github.com/nuysoft/brix-event']
                    ]
                }]
            }
        })
    }
)