import { getThemeConfig, defineConfig } from '@99_water/theme/node'

const blogTheme = getThemeConfig({
    // 文章默认作者
    author: 'water',
    friend: [
        {
            nickname: '99℃白开水',
            des: '一一一',
            avatar: 'http://cdn.chen-zeqi.cn/logo.jpg',
            url: 'https://www.chen-zeqi.cn'
        }
    ]
})

export default defineConfig({
    title: 'blog',
    description: '介绍',
    vite: {
        server: {
            host: '0.0.0.0'
        },
    },
    themeConfig: {
        ...blogTheme,
        //导航栏标题
        siteTitle: "blog",
        logo: 'http://cdn.chen-zeqi.cn/logo.jpg',
        //允许从 URL 中删除尾随，并选择性地生成干净的目录结构
        cleanUrls: 'with-subfolders',
        //导航栏索引
        nav: [
            { text: '好文总结', link: '/others/tool' },
            { text: '好书推荐', link: '/great_book/jueJin' },
        ],
        //最后更新
        lastUpdated: true,
        //页脚
        footer: {
            message: 'Released under the MIT License.',
            copyright: 'Copyright © 2023-present ZeQi Chen'
        }
    }
});