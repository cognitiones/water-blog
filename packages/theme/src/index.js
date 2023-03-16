import DefaultTheme from 'vitepress/theme'
import './styles/index.scss'
import BlogApp from './components/BlogApp.vue';
import { withConfigProvider } from './composables/config.js';

export const BlogTheme = {
    ...DefaultTheme,
    Layout:  withConfigProvider(BlogApp),
}

export default BlogTheme