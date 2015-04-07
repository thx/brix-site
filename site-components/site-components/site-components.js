/* global define */
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
            init: function() {},
            render: function() {
                $(this.element).append(
                    _.template(template)(this.data)
                )
            },
            data: {
                components: [{
                    name: 'Dropdown',
                    desc: '下拉框组件。',
                    preview: './site-components/site-components/image/dropdown.png',
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
                    preview: './site-components/site-components/image/pagination.png',
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
                    preview: './site-components/site-components/image/datepicker.png',
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
                    preview: './site-components/site-components/image/datepickerwrapper.png',
                    readme: 'bower_components/brix-components/datepickerwrapper/README.md',
                    links: [
                        ['示例', ''],
                        ['配置', ''],
                        ['方法', ''],
                        ['事件', '']
                    ]
                }, {
                    name: 'Dialog',
                    desc: '对话框。',
                    preview: './site-components/site-components/image/modal.png',
                    readme: 'bower_components/brix-components/dialog/README.md',
                    links: [
                        ['示例', ''],
                        ['配置', ''],
                        ['方法', ''],
                        ['事件', '']
                    ]
                }, {
                    name: 'Table',
                    desc: '增强表格。',
                    preview: './site-components/site-components/image/table.png',
                    readme: 'bower_components/brix-components/table/README.md',
                    links: [
                        ['示例', ''],
                        ['事件', '']
                    ]
                }, {
                    name: 'Popover',
                    desc: '浮层。',
                    preview: './site-components/site-components/image/popover.png',
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
                    preview: './site-components/site-components/image/uploader.png',
                    readme: 'bower_components/brix-components/uploader/README.md',
                    links: [
                        ['示例', ''],
                        ['配置', ''],
                        ['方法', ''],
                        ['事件', '']
                    ]
                }, {
                    name: 'Validation',
                    desc: '表单验证组件。',
                    preview: './site-components/site-components/image/validation.png',
                    readme: 'bower_components/brix-components/validation/README.md',
                    links: [
                        ['示例', ''],
                        ['配置', ''],
                        ['属性', ''],
                        ['方法', ''],
                        ['事件', '']
                    ]
                }, {
                    name: 'AreaPicker',
                    desc: '地区选择组件。',
                    preview: './site-components/site-components/image/areapicker.png',
                    readme: 'bower_components/brix-components/areapicker/README.md',
                    links: [
                        ['示例', ''],
                        ['配置', ''],
                        ['属性', ''],
                        ['方法', ''],
                        ['事件', '']
                    ]
                }, {
                    name: 'HourPicker',
                    desc: '日程选择组件。',
                    preview: './site-components/site-components/image/hourpicker.png',
                    readme: 'bower_components/brix-components/hourpicker/README.md',
                    links: [
                        ['示例', ''],
                        ['配置', ''],
                        ['属性', ''],
                        ['方法', ''],
                        ['事件', '']
                    ]
                }, {
                    name: 'ChartxWrapper',
                    desc: 'Chartx 组件。',
                    preview: './site-components/site-components/image/chartxwrapper.png',
                    readme: 'bower_components/brix-components/chartxwrapper/README.md',
                    links: [
                        ['示例', ''],
                        ['配置', ''],
                        ['属性', ''],
                        ['方法', ''],
                        ['事件', '']
                    ]
                }, {
                    name: 'Suggest',
                    desc: '提示补全组件。',
                    preview: './site-components/site-components/image/suggest.png',
                    readme: 'bower_components/brix-components/suggest/README.md',
                    links: [
                        ['示例', ''],
                        ['配置', ''],
                        ['属性', ''],
                        ['方法', ''],
                        ['事件', '']
                    ]
                }, {
                    name: 'TagInput',
                    desc: '标签输入组件。',
                    preview: './site-components/site-components/image/taginput.png',
                    readme: 'bower_components/brix-components/taginput/README.md',
                    links: [
                        ['示例', ''],
                        ['配置', ''],
                        ['属性', ''],
                        ['方法', ''],
                        ['事件', '']
                    ]
                }, {
                    name: 'ColorPicker',
                    desc: '调色板。',
                    preview: './site-components/site-components/image/colorpicker.png',
                    readme: 'bower_components/brix-components/colorpicker/README.md',
                    links: [
                        ['示例', ''],
                        ['配置', ''],
                        ['方法', ''],
                        ['事件', '']
                    ]
                }, {
                    name: 'Editor',
                    desc: '富文本编辑器。',
                    preview: './site-components/site-components/image/editor.png',
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
                    preview: './site-components/site-components/image/editable.png',
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
                    preview: './site-components/site-components/image/spin.png',
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
                    preview: './site-components/site-components/image/countdown.png',
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
                    preview: './site-components/site-components/image/sidebar.png',
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
                    preview: './site-components/site-components/image/chart.png',
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
                    preview: './site-components/site-components/image/imager.png',
                    readme: 'bower_components/brix-components/imager/README.md',
                    links: [
                        ['示例', ''],
                        ['配置', ''],
                        ['方法', ''],
                        ['事件', '']
                    ]
                }, {
                    name: 'Ellipsis',
                    desc: '为多行文本的溢出部分增加省略号。',
                    preview: './site-components/site-components/image/ellipsis.png',
                    readme: 'bower_components/brix-components/ellipsis/README.md',
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