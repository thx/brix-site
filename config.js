/* global require */
require.config({
    map: {
        '*': {
            // 扩展组件
            'site/header': 'components/site-header/site-header.js',
            'site/core': 'components/site-core/site-core.js',
            'site/components': 'components/site-components/site-components.js',
            'site/tools': 'components/site-tools/site-tools.js',
            'site/footer': 'components/site-footer/site-footer.js'
        }
    }
})