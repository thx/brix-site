/* global require, console, window */
require(
	['jquery', 'mock', 'brix/loader', 'brix/event', 'brix/bisheng'],
	function($, Mock, Loader, EventManager, BiSheng) {
		BiSheng.auto(true)
		// require(['css!css-tool/mm.css'])

		var $container = $('.container')
		var tpl = $('#brix-event-in-view').html()
		var data = Mock.mock({
			name: '@name',
			email: '@email',
			'options|5': ['@name'],
			list: []
		})
		var manager = new EventManager('on-')
		var owner = {
			random: function() {
				data.email = Mock.Random.email()
			},
			add: function() {
				data.list.push({
					name: data.name,
					email: data.email
				})
			},
			/* jshint unused:false */
			del: function(event, index) {
				data.list.splice(index, 1)
			},
			handler: function(event) {
				if (!event.component) return
				console.group(event.component.moduleId)
				console.log(event.type, event.namespace, event.originalNamespace)
				console.log([].slice.call(arguments, 0))
				console.log(event.component)
				console.groupEnd(event.component.moduleId)

				if (event.component && event.component.moduleId === 'components/uploader') {
					$(event.component.element.form).find('input[name=type]').val(Math.random())
				}

				if (event.component && event.component.moduleId === 'components/suggest') {
					if (event.originalNamespace.indexOf('.input') !== -1)
						event.component.data([1, 2, 3, 4, 5])
				}

				if (event.component && event.component.moduleId === 'components/taginput') {
					if (event.originalNamespace.indexOf('.input') !== -1)
						event.component.suggest.data([1, 2, 3, 4, 5])
				}
			}
		}

		var bisheng = BiSheng.bind(data, tpl, {
			resolve: function(content) {
				$container.append(content)
			},
			after: function( /*changes*/ ) {
				// console.log('after ', changes)
				manager.delegate($container, owner)
			}
		})
		manager.delegate($container, owner)

		boot()

		window.BiSheng = BiSheng
		window.Loader = Loader
		window.data = data
		window.bisheng = bisheng
	}
)

// 加载组件
function boot() {
	require(['brix/loader'], function(Loader) {
		/* jshint unused:false */
		Loader.boot(function() {
			// console.log('done!')
		}, function(error, instance, index, count) {
			var nprogress = Loader.query('components/nprogress')
			if (nprogress.length) nprogress.set((index + 1) / count)
		})
	})
}