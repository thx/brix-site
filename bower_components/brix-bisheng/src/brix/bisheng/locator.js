/* global define */
/* global window, location */
/*
    attrs = {
        guid: guid,
        slot: 'start/end',
        type: 'text/attribute/block',
        path: '{{$lastest ' + prop + '}}',
        ishelper: !! node.isHelper,
        helper: helper
    }
*/
define(
    [
        'jquery', 'handlebars'
    ],
    function(
        $, Handlebars
    ) {

        if (!window.JSON) {
            window.JSON = {
                stringify: function(json) {
                    var props = [],
                        value
                    for (var key in json) {
                        value = typeof json[key] === 'string' ? '"' + json[key] + '"' : json[key]
                        props.push('"' + key + '":' + value)
                    }
                    return '{' + props.join(',') + '}'
                }
            }
        }

        /*
            定位符
        */

        // script 定位符
        var ScriptLocator = {
            // AST 创建定位符
            create: function create(attrs) {
                var escapeExpression = Handlebars.Utils.escapeExpression
                var pathHTML = escapeExpression('<script')
                for (var key in attrs) {
                    if (attrs[key] === undefined) continue
                    pathHTML += ' ' + key + escapeExpression('="') + attrs[key] + escapeExpression('"')
                }
                pathHTML += escapeExpression('></script>')
                return pathHTML
            },
            // Scanner 定位符正则
            getLocatorRegExp: function() {
                return (/(<script(?:.*?)><\/script>)/ig)
            },
            // Scanner  查找定位符
            find: function find(attrs, context) {
                var selector = 'script'
                for (var key in attrs) {
                    selector += '[' + key + '="' + attrs[key] + '"]'
                }
                return $(selector, context)
            },
            // Scanner 解析占位符
            parse: function parse(locator, attr) {
                var value = $(locator).attr(attr)
                if (attr === 'ishelper') {
                    if (value === 'true') value = true
                    if (value === 'false') value = false
                }
                return value
            },
            // Scanner 更新占位符
            update: function update(locator, attrs, force) {
                if (
                    locator.nodeName.toLowerCase() === 'script' &&
                    locator.getAttribute('guid') &&
                    locator.getAttribute('slot') === 'start'
                ) {
                    if (force || !locator.getAttribute('type')) {
                        for (var key in attrs) {
                            $(locator).attr(key, attrs[key]) // IE6 不支持 setAttribute
                                // locator.setAttribute(key, attrs[key])
                        }
                    }
                }
                return locator
            },
            // Flush 解析目标节点
            parseTarget: function parseTarget(locator) {
                var guid = $(locator).attr('guid')
                var target = [],
                    node = locator,
                    $node
                while ((node = node.nextSibling)) {
                    $node = $(node)
                    if (node.nodeName.toLowerCase() === 'script' && $node.attr('guid')) {
                        if ($node.attr('guid') === guid && $node.attr('slot') === 'end') {
                            break
                        }
                    } else {
                        target.push(node)
                    }
                }
                return $(target)
            },
        }

        // comment 定位符
        var JsonCommentLocator = {
            // AST 创建定位符
            create: function create(attrs) {
                var escapeExpression = Handlebars.Utils.escapeExpression
                return escapeExpression('<!-- ') + escapeExpression(JSON.stringify(attrs)) + escapeExpression(' -->')
            },
            // Scanner 定位符正则
            getLocatorRegExp: function getLocatorRegExp() {
                return (/(<!--\s*({(?:.*?)})\s*-->)/ig)
            },
            // Scanner 查找定位符
            find: function find(attrs, context) {
                // getJsonCommentsByProperty
                /* jshint unused: false */
                return $(context).add('*', context).contents()
                    .filter(function() {
                        return this.nodeType === 8
                    })
                    .filter(function(index, item) {
                        try {
                            /* jslint evil: true */
                            var json = (new Function('return ' + item.nodeValue))()
                            for (var key in attrs) {
                                if (attrs[key] !== json[key]) return false
                            }
                            return true
                        } catch (error) {
                            // if (window.console) console.error(error)
                            return false
                        }
                    })
            },
            // Scanner 解析占位符
            parse: function parse(locator, attr) {
                /* jslint evil: true */
                var json = (new Function('return ' + locator.nodeValue))()
                return attr ? json[attr] : json
            },
            // Scanner 更新占位符
            update: function update(locator, attrs, force) {
                if (locator.nodeType === 8) {
                    var json = this.parse(locator)
                    if (json.guid && json.slot === 'start') {
                        if (force || !json.type) {
                            for (var key in attrs) {
                                json[key] = attrs[key]
                            }
                            locator.nodeValue = ' ' + JSON.stringify(json) + ' '
                        }
                    }
                }
                return locator
            },
            // Flush 解析目标节点
            parseTarget: function parseTarget(locator) {
                var json = this.parse(locator)
                var target = []
                var node = locator
                while ((node = node.nextSibling)) {
                    if (node.nodeType === 8) {
                        var end = this.parse(node)
                        if (end.guid === json.guid && end.slot === 'end') break
                    } else {
                        target.push(node)
                    }
                }
                return $(target)
            }
        }

        ScriptLocator.ScriptLocator = ScriptLocator
        ScriptLocator.JsonCommentLocator = JsonCommentLocator
        JsonCommentLocator.ScriptLocator = ScriptLocator
        JsonCommentLocator.JsonCommentLocator = JsonCommentLocator

        return location.search.indexOf('locator=script') !== -1 ? ScriptLocator :
            location.search.indexOf('locator=comment') !== -1 ? JsonCommentLocator :
            ScriptLocator
    }
)