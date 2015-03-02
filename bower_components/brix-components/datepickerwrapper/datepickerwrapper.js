/* global define, require, document */
define(
    [
        'jquery', 'underscore', 'moment',
        'brix/loader', 'brix/base', 'brix/event',
        '../dialog/position.js',
        './datepickerwrapper.tpl.js',
        'css!./datepickerwrapper.css'
    ],
    function(
        $, _, moment,
        Loader, Brix, EventManager,
        position,
        template
    ) {
        /*
            shortcut
            dates

            TODO
            一个日期
            多个日期
            input trigger
            输入回调，输出回调
         */

        var RE_INPUT = /^input|textarea$/i
        var NAMESPACE = '.datepickerwrapper'
            // var NAMESPACE_ORIGINAL = '.original'
        var DATE_PATTERN = 'YYYY-MM-DD'
        var SHORTCUTS = function() {
            var now = moment()
            var nowDate = now.get('date')
            var shortcuts = {
                '今天': [
                    moment().startOf('day'),
                    moment().startOf('day')
                ],
                '昨天': [
                    moment().startOf('day').subtract(1, 'days'),
                    moment().startOf('day').subtract(1, 'days')
                ],
                '过去 7 天': [
                    moment().startOf('day').subtract(7, 'days'),
                    moment().startOf('day').subtract(1, 'days')
                ],
                '本月': [
                    moment().startOf('day').subtract(nowDate - 1, 'days'),
                    moment().startOf('day')
                ],
                '上月': [
                    moment().startOf('day').subtract(1, 'month').subtract(nowDate - 1, 'days'),
                    moment().startOf('day').subtract(nowDate, 'days')
                ],
                '最近 15 天': [
                    moment().startOf('day').subtract(15, 'days'),
                    moment().startOf('day').subtract(1, 'days')
                ]
            }
            return shortcuts
        }()
        var STATE = {
            PENDING: 'pending',
            ACTIVE: 'active',
            INACTIVE: 'inactive'
        }

        function DatePickerWrapper() {}

        DatePickerWrapper.DATE_PATTERN = DATE_PATTERN
        DatePickerWrapper.SHORTCUTS = SHORTCUTS

        _.extend(DatePickerWrapper.prototype, Brix.prototype, {
            options: {
                placement: 'bottom', // top bottom left right
                align: 'left', // left right top bottom
                offset: {},

                mode: 'signal', // signal multiple
                shortcuts: SHORTCUTS,
                dates: [],
                ranges: [],
                unlimits: []
            },
            init: function() {
                // 修正选项
                if (this.options.dates.length > 1) this.options.mode = 'multiple'
                if (!this.options.dates.length) this.options.dates = [moment().startOf('day').format(DATE_PATTERN)]
                if (this.options.shortcuts) {
                    _.each(this.options.shortcuts, function(dates /*, title*/ ) {
                        _.each(dates, function(date, index) {
                            dates[index] = moment(date)
                        })
                    })
                }
                this.options.ranges = _.flatten(this.options.ranges)
                _.each(this.options.ranges, function(date, index, ranges) {
                    if (date) ranges[index] = moment(date)
                })
                this.options._ranges = _.map(this.options.ranges, function(date) {
                    if (date) return date.format(DATE_PATTERN)
                })
                this.options._ranges = "['" + this.options._ranges.join("','") + "']"

                // if (this.options.unlimits.length) {
                //     _.each(this.options.unlimits, function(date, index, unlimits) {
                //         if (date) unlimits[index] = moment(date)
                //     })
                // }

                // 支持自定义 HTML 模板 template
                template = this.options.template || template

                // 支持自定义 CSS 样式
                if (this.options.css) require('css!' + this.options.css)
            },
            render: function() {
                var that = this
                this.$element = $(this.element)
                this.$relatedElement = $(
                    _.template(template)(this.options)
                ).insertAfter(this.$element)

                this['_' + this.options.mode]()

                this.$element.on('click', function(event) {
                    that.toggle(event)
                })

                var manager = new EventManager('bx-')
                manager.delegate(this.$element, this)
                manager.delegate(this.$relatedElement, this)

                var type = 'click' + NAMESPACE + '_' + this.clientId
                this._state = STATE.INACTIVE
                $(document.body).off(type)
                    .on(type, function(event) {
                        // 点击不存在节点
                        if (!$.contains(document.body, event.target)) return
                        if (
                            event.target === that.element || // 点击组件节点
                            $.contains(that.element, event.target) || // 点击组件子节点
                            event.target === that.$relatedElement[0] || // 点击关联节点
                            $.contains(that.$relatedElement[0], event.target) // 点击组件关联子节点
                        ) {
                            if (that._state === STATE.ACTIVE) return
                            that.trigger(
                                $.Event('active' + NAMESPACE, {
                                    target: event.target
                                })
                            )
                            that._state = STATE.ACTIVE
                            return
                        }

                        if (that._state === STATE.INACTIVE) return
                        var inactiveEvent = $.Event('inactive' + NAMESPACE, {
                            target: event.target
                        })
                        that.trigger(inactiveEvent)
                        that._state = STATE.INACTIVE

                        if (inactiveEvent.isDefaultPrevented()) return

                        that.hide()
                    })
            },
            _signal: function() {
                var that = this
                Loader.boot(this.$relatedElement, function( /*records*/ ) {
                    var pickerComponent = Loader.query('components/datepicker', that.$relatedElement)[0]
                        /* jshint unused:false */
                    pickerComponent.on('change.datepicker', function(event, date, type) {
                        if (type !== undefined && type !== 'date') return

                        that.$relatedElement.hide()

                        var validate = $.Event('change' + NAMESPACE)
                        that.trigger(validate, [
                            [date], type
                        ])
                        if (!validate.isDefaultPrevented()) {
                            var isInput = RE_INPUT.test(that.element.nodeName)
                            var value = that._unlimitFilter(date, that.options.unlimits[0])
                            that.$element[
                                isInput ? 'val' : 'html'
                            ](value)

                            // 单个日期选择器：自动触发 input 元素的 change 事件。</h4>
                            // 单个日期选择器：自动同步至隐藏域，并触发隐藏域的 change 事件。</h4>
                            that.$element.trigger('change') //  + NAMESPACE + NAMESPACE_ORIGINAL, date
                            if (!isInput) {
                                var items = $('[data-hidden-index]', that.$element)
                                items.eq(0).val(value).trigger('change')
                            }
                        }
                    })
                })
            },
            _multiple: function() {
                var that = this
                Loader.boot(this.$relatedElement, function() {
                    var inputWrapper = $('.datepickerwrapper-inputs', that.$relatedElement)
                    var inputs = $('input', inputWrapper)

                    var pickerWrapper = $('.datepickerwrapper-pickers', that.$relatedElement)
                    var pickers = $('.picker', pickerWrapper)

                    var pickerComponents = Loader.query('components/datepicker', that.$relatedElement)

                    var shortcutWrapper = $('.datepickerwrapper-shortcuts', that.$relatedElement)
                    var shortcuts = $('span', shortcutWrapper)

                    if (that.options.shortcuts) {
                        _.each(_.values(that.options.shortcuts), function(dates, index) {
                            var same = true
                            _.each(dates, function(date, index) {
                                if (!date.isSame(that.options.dates[index]), 'days') same = false
                            })
                            if (same) {
                                shortcuts.eq(index).addClass('active')
                                    .siblings().removeClass('active')
                            }
                        })
                    }

                    _.each(inputs, function(item, index) {
                        $(item).val(moment(that.options.dates[index]).format(DATE_PATTERN)) // 初始值
                    })

                    _.each(pickerComponents, function(item, index) {
                        /* jshint unused:false */
                        item.val(that.options.dates[index])
                            .on('change.datepicker', function(event, date, type) {
                                if (type !== undefined && type !== 'date') return

                                var value = that._unlimitFilter(date, that.options.unlimits[index])
                                inputs.eq(index).val(value)
                                pickers.eq(index).hide()
                            })
                    })
                })
            },
            _unlimitFilter: function(date, unlimit) {
                var text = date.format(DATE_PATTERN)
                if (unlimit && text === moment(unlimit).format(DATE_PATTERN)) text = '不限'
                return text
            },
            _inputToggleDatePicker: function(event, index, type) {
                var inputWrapper = $('.datepickerwrapper-inputs', this.$relatedElement)
                var pickerWrapper = $('.datepickerwrapper-pickers', this.$relatedElement)
                var pickers = $('.picker', pickerWrapper)

                var inputWrapperOffset = inputWrapper.offset()
                pickerWrapper.offset({ // 修正日期组件容器的位置
                    left: inputWrapperOffset.left,
                    top: inputWrapperOffset.top + inputWrapper.outerHeight() + parseInt(pickerWrapper.css('margin-top'), 10)
                })

                var $target = $(event.target)
                var targetOffset = $target.offset()
                pickers.eq(index)[type ? type : 'toggle']()
                    .offset({ // 修正单个日期组件的位置
                        left: targetOffset.left
                    })
                    .siblings().hide()
            },
            show: function( /*event*/ ) {
                this.$relatedElement.show()
                    .offset(this._offset())
            },
            hide: function( /*event*/ ) {
                this.$relatedElement.hide()
            },
            toggle: function( /*event*/ ) {
                this.$relatedElement.toggle()
                    .offset(this._offset())
            },
            _offset: function() {
                var offset = position(this.$element, this.$relatedElement, this.options.placement, this.options.align)
                var relatedMarginLeft = parseInt(this.$relatedElement.css('margin-left'), 10)
                var relatedMarginTop = parseInt(this.$relatedElement.css('margin-top'), 10)
                return {
                    left: offset.left + relatedMarginLeft + (this.options.offset.left || 0),
                    top: offset.top + relatedMarginTop + (this.options.offset.top || 0)
                }
            },
            submit: function( /*event*/ ) {
                var that = this
                var pickerComponents = Loader.query('components/datepicker', this.$relatedElement)
                var dates = _.map(pickerComponents, function(item /*, index*/ ) {
                    return item.val()
                })

                this.toggle()

                var validate = $.Event('change' + NAMESPACE)
                this.trigger(validate, [dates])

                if (!validate.isDefaultPrevented()) {
                    var items = $('[data-index]', this.$element)
                    if (items.length) {
                        _.each(items, function(item, index) {
                            var $item = $(item)
                            index = +$item.attr('data-index')
                            $item[
                                RE_INPUT.test(item.nodeName) ? 'val' : 'html'
                            ](
                                that._unlimitFilter(dates[index], that.options.unlimits[index])
                            )

                        })
                    } else {
                        this.$element.text(
                            _.map(dates, function(item, index) {
                                return that._unlimitFilter(item, that.options.unlimits[index])
                            }).join(', ')
                        )
                    }

                    // 多个日期选择器：自动同步至隐藏域，并触发隐藏域的 change 事件。
                    items = $('[data-hidden-index]', this.$element)
                    _.each(items, function(item, index) {
                        var $item = $(item)
                        index = +$item.attr('data-hidden-index')
                        var value = that._unlimitFilter(dates[index], undefined)
                        $item.val(value).trigger('change')
                    })
                }
            },
            _change: function(event, type, index) {
                var that = this
                var $target = $(event.target)
                var pickerComponents = Loader.query('components/datepicker', this.$relatedElement)

                switch (type) {
                    case 'shortcut':
                        var dates = $target.attr('data-value').split(',')
                        _.each(dates, function(item, index) {
                            that.options.dates[index] = item
                            pickerComponents[index].val(item)
                        })

                        $target.addClass('active')
                            .siblings().removeClass('active')

                        this.submit()
                        break
                    case 'date':
                        var date = moment($target.val())
                        if (!date.isValid()) break
                        pickerComponents[index].val(date)
                        break
                }
            }
        })

        return DatePickerWrapper
            // return Brix.extend({})
    }
)