import {
    computed,
    defineComponent,
    h,
    provide,
    inject
} from 'vue'

import { useData } from 'vitepress';

const configSymbol = 'theme-config'

export function withConfigProvider(App) {
    return defineComponent({
        name: 'ConfigProvider',
        setup(__props, { slots }) {
            const { theme } = useData();
            const config = computed(() => resolveConfig(theme.value));
            provide(configSymbol, config);
            return () => h(App, null, slots)
        },
    })
}

export function useConfig() {
    return {
        config: inject(configSymbol).value
    }
}

export function useBlogConfig() {
    return inject(configSymbol).value.blog
}

export function useArticles() {
    const blogConfig = useConfig()
    const articles = computed(() => blogConfig.config?.blog?.pagesData || [])
    return articles
}

function resolveConfig(config) {
    return {
        ...config,
        blog: {
            ...config?.blog,
            pagesData: config?.blog?.pagesData || []
        }
    }
}