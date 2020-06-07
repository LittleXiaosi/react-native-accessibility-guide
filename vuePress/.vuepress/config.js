module.exports = {
    base: '/react-native-accessibility-guide/',
    title: 'react-native无障碍指南',
    markdown: {
        toc: {
            includeLevel: [2, 3, 4, 5],
        },
        extendMarkdown: md => {
            // 使用更多的 markdown-it 插件!
            md.use(require('markdown-it-plantuml'))
        }
    },
    plugins: ['@vuepress/active-header-links'],
    themeConfig: {
        sidebar: [
            '/',
            'react-native-accessibility-attr-test',
            'react-native-accessibility-bug-list'
        ],
        sidebarDepth: 3,
    }
};