/* global define, require */
define(
    [
        'jquery', 'underscore',
        'brix/base',
        './site-tools.tpl.js',
        'css!./site-tools.css'
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
                    name: 'Tree',
                    desc: '打印组件树。',
                    preview: './site-components/site-tools/tree.png',
                    links: [
                        ['示例', ''],
                        ['配置', ''],
                        ['方法', ''],
                        ['事件', '']
                    ]
                }, {
                    name: 'printf',
                    desc: '日志工具。',
                    preview: './site-components/site-tools/printf.png',
                    links: [
                        ['示例', ''],
                        ['配置', ''],
                        ['方法', ''],
                        ['事件', '']
                    ]
                }, {
                    name: 'CSS Layout Debugger',
                    alias: 'css-layout-debugger',
                    desc: 'CSS 布局调试工具。',
                    preview: './site-components/site-tools/css-layout-debugger.png',
                    links: [
                        ['示例', ''],
                        ['配置', ''],
                        ['方法', ''],
                        ['事件', '']
                    ]
                }]
            }
        })
    }
)