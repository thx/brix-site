/* global define */
define(
    [
        'jquery',
        'brix/base',
        './site-footer.tpl.js',
        'css!./site-footer.css'
    ],
    function(
        $,
        Brix,
        template
    ) {
        return Brix.extend({
            render: function() {
                $(this.element).append(template)
            }
        })
    }
)