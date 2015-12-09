/* global require */
require.config({
    map: {
        '*': {
            // 扩展组件
            'site/header': 'site-components/site-header/site-header.js',
            'site/core': 'site-components/site-core/site-core.js',
            'site/components': 'site-components/site-components/site-components.js',
            'site/tools': 'site-components/site-tools/site-tools.js',
            'site/footer': 'site-components/site-footer/site-footer.js'
        }
    }
})