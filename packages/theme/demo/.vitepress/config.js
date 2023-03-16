import { getThemeConfig, defineConfig } from '../../src/node.js'
import path from 'path';

const blogTheme = getThemeConfig({
    // 文章默认作者
    author: 'water',
    friend: [
        {
            nickname: '99℃白开水',
            des: '一一一',
            avatar: 'http://cdn.chen-zeqi.cn/logo.jpg',
            url: 'https://www.chen-zeqi.cn'
        },
        {
            nickname: '99℃白开水',
            des: '一一一',
            avatar: 'http://cdn.chen-zeqi.cn/logo.jpg',
            url: 'https://www.chen-zeqi.cn'
        }
    ]
})

export default defineConfig({
    title: '@water/theme',
    vite: {
        server: {
            host: '0.0.0.0'
        },
        resolve: {
            alias: {
                '@water/theme': path.join(__dirname, '../../src/index.js')
            }
        }
    },
    themeConfig: {
        ...blogTheme,
        nav: [],
        socialLinks: [],
        editLink: {},
        lastUpdatedText: '上次更新于'
    }
})