/* global define */
define(
    [
        'jquery',
        'base/brix',
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