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
                this.data = this.data || _.extend({}, this.options)
                var html = _.template(template, this.data)
                $(this.element).append(html)
            }
        })
    }
)