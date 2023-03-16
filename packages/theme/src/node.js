import glob from 'fast-glob' //读取文件
import matter from 'gray-matter' //读取文件头部信息
import fs from 'fs'
import path from 'path'

export function getThemeConfig(cfg) {
    const srcDir = cfg.srcDir || process.argv.slice(2)?.[1] || '.'
    const files = glob.sync(`${srcDir}/**/*.md`, { ignore: ['node_modules'] })

    const data = files.map(v => {
        //去掉 .md 后缀名
        let route = v.replace('.md', '')

        //去掉 srcDir 目录名
        if (route.startsWith('./')) {
            route = route.replace(
                new RegExp(
                    `^\\.\\/${path
                        .join(srcDir, '/')
                        .replace(new RegExp(`\\${path.sep}`, 'g'), '/')}`
                ),
                ''
            )
        } else {
            route = route.replace(
                new RegExp(
                    `^${path
                        .join(srcDir, '/')
                        .replace(new RegExp(`\\${path.sep}`, 'g'), '/')}`
                ),
                ''
            )
        }

        const fileContent = fs.readFileSync(v, 'utf-8')
        
        //读取文件头部信息
        const meta = {
            ...matter(fileContent).data
        }

        //TODO: 无meta标题处理
        // if(!meta.title){}

        //TODO: 无meta日期处理
        // if(!meta.date){}

        //TODO: meta标签处理
        // if(!meta.tags){}

        //TODO: meta分类处理
        // if(!meta.categories){}

        //TODO: meta摘要处理

        //获取封面图
        meta.cover =
            meta.cover ||
            fileContent.match(/[!]\[.*?\]\((https:\/\/.+)\)/)?.[1] ||
            ''

        return {
            route: `/${route}`,
            meta
        }
    }).filter(v => v.meta.layout !== 'home')

    return {
        blog: {
            pagesData: data || [],
            ...cfg
        },
        sidebar: [
            {
                text: '',
                item: []
            }
        ]
    }
}

export function defineConfig(config) {
    return config
}

