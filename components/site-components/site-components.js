/* global define, require */
define(
    [
        'jquery', 'underscore',
        'brix/base',
        './site-components.tpl.js',
        'css!./site-components.css'
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
                    name: 'Dropdown',
                    desc: '下拉框组件。',
                    preview: './components/site-components/dropdown.png',
                    readme: 'bower_components/brix-components/dropdown/README.md',
                    links: [
                        ['示例', ''],
                        ['配置', ''],
                        ['方法', ''],
                        ['事件', '']
                    ]
                }, {
                    name: 'Pagination',
                    desc: '分页组件。',
                    preview: './components/site-components/pagination.png',
                    readme: 'bower_components/brix-components/pagination/README.md',
                    links: [
                        ['示例', ''],
                        ['配置', ''],
                        ['方法', ''],
                        ['事件', '']
                    ]
                }, {
                    name: 'DatePicker',
                    desc: '日期选择器。',
                    preview: './components/site-components/datepicker.png',
                    readme: 'bower_components/brix-components/datepicker/README.md',
                    links: [
                        ['示例', ''],
                        ['配置', ''],
                        ['方法', ''],
                        ['事件', '']
                    ]
                }, {
                    name: 'DatePickerWrapper',
                    desc: '日期选择器。',
                    preview: './components/site-components/datepickerwrapper.png',
                    readme: 'bower_components/brix-components/datepickerwrapper/README.md',
                    links: [
                        ['示例', ''],
                        ['配置', ''],
                        ['方法', ''],
                        ['事件', '']
                    ]
                }, {
                    name: 'Modal',
                    desc: '对话框。',
                    preview: './components/site-components/modal.png',
                    readme: 'bower_components/brix-components/modal/README.md',
                    links: [
                        ['示例', ''],
                        ['配置', ''],
                        ['方法', ''],
                        ['事件', '']
                    ]
                }, {
                    name: 'Table',
                    desc: '增强表格。',
                    preview: './components/site-components/table.png',
                    readme: 'bower_components/brix-components/table/README.md',
                    links: [
                        ['示例', ''],
                        ['事件', '']
                    ]
                }, {
                    name: 'ColorPicker',
                    desc: '调色板。',
                    preview: './components/site-components/colorpicker.png',
                    readme: 'bower_components/brix-components/colorpicker/README.md',
                    links: [
                        ['示例', ''],
                        ['配置', ''],
                        ['方法', ''],
                        ['事件', '']
                    ]
                }, {
                    name: 'Popover',
                    desc: '浮层。',
                    preview: './components/site-components/popover.png',
                    readme: 'bower_components/brix-components/popover/README.md',
                    links: [
                        ['示例', ''],
                        ['配置', ''],
                        ['方法', ''],
                        ['事件', '']
                    ]
                }, {
                    name: 'Uploader',
                    desc: '上传组件。',
                    preview: './components/site-components/uploader.png',
                    readme: 'bower_components/brix-components/uploader/README.md',
                    links: [
                        ['示例', ''],
                        ['配置', ''],
                        ['方法', ''],
                        ['事件', '']
                    ]
                }, {
                    name: 'Editor',
                    desc: '富文本编辑器。',
                    preview: './components/site-components/editor.png',
                    readme: 'bower_components/brix-components/editor/README.md',
                    links: [
                        ['示例', ''],
                        ['配置', ''],
                        ['方法', ''],
                        ['事件', '']
                    ]
                }, {
                    name: 'Editable',
                    desc: '可编辑的页面元素。',
                    preview: './components/site-components/editable.png',
                    readme: 'bower_components/brix-components/editable/README.md',
                    links: [
                        ['示例', ''],
                        ['配置', ''],
                        ['方法', ''],
                        ['事件', '']
                    ]
                }, {
                    name: 'Spin',
                    desc: '纯 CSS 加载动画。',
                    preview: './components/site-components/spin.png',
                    readme: 'bower_components/brix-components/spin/README.md',
                    links: [
                        ['示例', ''],
                        ['配置', ''],
                        ['方法', ''],
                        ['事件', '']
                    ]
                }, {
                    name: 'Countdown',
                    desc: '倒计时。',
                    preview: './components/site-components/countdown.png',
                    readme: 'bower_components/brix-components/countdown/README.md',
                    links: [
                        ['示例', ''],
                        ['配置', ''],
                        ['方法', ''],
                        ['事件', '']
                    ]
                }, {
                    name: 'Sidebar',
                    desc: '左侧导航组件。',
                    preview: './components/site-components/sidebar.png',
                    readme: 'bower_components/brix-components/sidebar/README.md',
                    links: [
                        ['示例', ''],
                        ['配置', ''],
                        ['方法', ''],
                        ['事件', '']
                    ]
                }, {
                    name: 'Chart',
                    desc: '图表。',
                    preview: './components/site-components/chart.png',
                    readme: 'bower_components/brix-components/chart/README.md',
                    links: [
                        ['示例', ''],
                        ['配置', ''],
                        ['方法', ''],
                        ['事件', '']
                    ]
                }, {
                    name: 'Imager',
                    desc: '响应式图片组件，优先显示图片的『核心区域』。',
                    preview: './components/site-components/imager.png',
                    readme: 'bower_components/brix-components/imager/README.md',
                    links: [
                        ['示例', ''],
                        ['配置', ''],
                        ['方法', ''],
                        ['事件', '']
                    ]
                }, {
                    name: 'Validation',
                    desc: '表单验证组件。',
                    preview: './components/site-components/validation.png',
                    readme: 'bower_components/brix-components/validation/README.md',
                    links: [
                        ['示例', ''],
                        ['配置', ''],
                        ['属性', ''],
                        ['方法', ''],
                        ['事件', '']
                    ]
                }]
            }
        })
    }
)