/* global define, console, FileReader, FormData, XMLHttpRequest */
/*
    http://jasny.github.io/bootstrap/javascript/#inputmask
 */
define(
    [
        'jquery', 'underscore',
        'brix/loader', 'components/base'
    ],
    function(
        $, _,
        Loader, Brix
    ) {
        var TEMPLATE = '<input name="<%= name %>" type="file" class="uploader-ghost">'
        var TOKEN = 'data-token'
        var TOKEN_SELECTOR = '[' + TOKEN + ']'
        var NAMESPACE = '.uploader'
        var NAMESPACE_IS_DEFAULT_PREVENTED = '.isDefaultPrevented'

        function tokon() {
            return ('token' + Math.random()).replace(/\D/g, '')
        }

        function parseJSONResponse(response, callback) {
            try { // console.log(this.contentWindow.document.body.innerHTML/innerText)
                callback(undefined, JSON.parse(response))
            } catch (parseError) {
                // 再次尝试解析返回的数据
                /* jshint evil:true */
                try {
                    callback(undefined, (new Function("return " + response))())
                } catch (parseErrorByFunction) {
                    console.log(response)
                    console.error(parseErrorByFunction)
                    callback(parseErrorByFunction, response)
                }
            } finally {}
        }

        function Uploader() {}

        _.extend(Uploader.prototype, Brix.prototype, {
            options: {
                action: '',
                name: 'file',
                transport: 'iframe',
                multiple: true,
                accept: ''
            },
            render: function() {
                this.$element = $(this.element)
                this.$element.parent().css('position', 'relative')

                var $relatedElement = $(_.template(TEMPLATE)(this.options))
                    .attr(TOKEN, tokon())
                    .prop('clientId', this.options.clientId)
                    .prop('disabled', this.$element.prop('disabled'))
                    .insertAfter(this.$element)
                    .width(this.$element.outerWidth())
                    .height(this.$element.outerHeight())
                    .offset(this.$element.offset())

                if (this.options.multiple) $relatedElement.attr('multiple', 'multiple')
                if (this.options.accept) $relatedElement.prop('accept', this.options.accept)

                var form = $relatedElement[0].form
                $(form).off('change' + NAMESPACE)
                    .on('change' + NAMESPACE, 'input[type=file]' + TOKEN_SELECTOR, function(event) {
                        var input = event.currentTarget
                        var uploader = Loader.query(input)

                        var isDefaultPrevented
                        uploader
                            .on('start' + NAMESPACE + NAMESPACE_IS_DEFAULT_PREVENTED, function(event) {
                                isDefaultPrevented = event.isDefaultPrevented()
                            })
                            .trigger('start' + NAMESPACE, [input.files])
                            .off('start' + NAMESPACE + NAMESPACE_IS_DEFAULT_PREVENTED)
                        if (isDefaultPrevented) return

                        uploader.send(form, input, function(error, response) {
                            // console.log(response)
                            if (error) uploader.trigger('error' + NAMESPACE, [input.files, error])
                            else uploader.trigger('success' + NAMESPACE, [input.files, response])
                            uploader.trigger('complete' + NAMESPACE, [input.files])
                        })
                    })
            },
            send: function(form, input, callback) {
                var that = this
                this.transports[this.options.transport](
                    this.options,
                    form,
                    input,
                    function(error, response) {
                        // 先执行回调，再销毁文件域，否则事件不会触发！
                        callback(error, response)
                        that.burn(input)
                            // that.previewInConsole(input.files)
                    }
                )
            },
            // [阅后即焚 Burn After Reading](http://movie.douban.com/subject/2054933/)
            burn: function(input) {
                var $input = $(input)
                $input.replaceWith(
                    $input.clone(true, true)
                    .attr(TOKEN, tokon())
                    .prop('clientId', this.options.clientId)
                )
            },
            transports: {
                /* jshint unused:true */
                iframe: function(options, form, input, callback) {
                    var IFRAME_ID = 'FILE_UPLOAD_IFRAME_'
                    var IFRAME_HTML = '<iframe id="<%= id %>" name="<%= id %>" style="display: none;"></iframe>'

                    form.target = IFRAME_ID + _.uniqueId()
                    form.action = options.action
                    form.method = 'POST'
                    form.enctype = "multipart/form-data"

                    var html = _.template(IFRAME_HTML)({
                        id: form.target
                    })
                    $(html).insertAfter(form)
                        .on('load', function(event) {
                            var iframe = event.target
                            var response = $.trim($(iframe.contentWindow.document.body).text())
                            parseJSONResponse(response, callback)
                            $(iframe).remove()
                        })
                        .on('error', function(event) {
                            callback(event, undefined)
                        })

                    form.submit()
                },
                /* jshint unused:true */
                xhr: function(options, form, input, callback) {
                    var data = new FormData()
                    _.each(input.files, function(item /*, index*/ ) {
                        data.append(options.name, item)
                    })

                    var xhr = new XMLHttpRequest()
                    xhr.overrideMimeType('application/json')
                    xhr.open('post', options.action, true)
                    xhr.upload.onprogress = function( /*event*/ ) {
                        // var percent = Math.round((event.loaded / event.total) * 100)
                        // console.log('[uploader]', file.name, event.loaded, event.total, percent + '%')
                    };
                    xhr.onerror = function(err) {
                        console.error(err)
                    }
                    xhr.onload = function() {
                        // console.log('[uploader]', xhr.status, xhr.statusText, xhr.responseText)
                        var response = xhr.responseText
                        parseJSONResponse(response, callback)
                    };
                    xhr.send(data)
                }
            },
            previewInConsole: function(file) {
                // previewInConsole( files )
                if (file.length) {
                    var that = this
                    _.each(file, function(item /*, index*/ ) {
                        that.previewInConsole(item)
                    })
                    return
                }

                var reader = new FileReader()
                reader.onload = function(event) {
                    var img = $('<img>')
                        .attr('src', event.target.result)
                        .attr('title', file.name)
                        .hide().appendTo('body')
                    var width = img.width()
                    var height = img.height()
                    var style = _.template(
                        'padding: <%=pt%>px <%=pr%>px <%=pb%>px <%=pl%>px; line-height: <%=height%>px; background:url("<%=result%>") no-repeat center center;'
                    )({
                        pt: height / 2,
                        pr: width / 2,
                        pb: height / 2,
                        pl: width / 2,
                        height: height + 10,
                        result: event.target.result
                    })
                    console.group(file.name)
                    console.log('%c', style)
                    console.log(file.size + ' byte')
                    console.groupEnd(file.name)
                    img.remove()
                }
                reader.readAsDataURL(file)
            },
            previewAsComponent: function(file, callback) {
                var reader = new FileReader()
                reader.onload = function(event) {
                    var img = $('<img>')
                        .addClass('uploader-preview-thumbnail')
                        .attr('src', event.target.result)
                        .attr('title', file.name)
                    if (callback) callback(undefined, img)

                    /*var img = $('<img>')
                        .attr('bx-name', 'components/popover')
                        .attr('data-content', '<img src="' + event.target.result + '">')
                        .attr('data-placement', 'bottom')
                        .attr('data-align', 'left')
                        .addClass('uploader-preview')
                        .attr('src', event.target.result)
                        .attr('title', file.name)
                    if (callback) callback(undefined, img)
                    require(['brix/loader'], function(Loader) {
                        Loader.boot(img)
                    })*/
                }
                reader.readAsDataURL(file)
            }
        })

        return Uploader
    }
)