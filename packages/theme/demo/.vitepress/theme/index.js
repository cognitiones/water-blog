import BlogTheme from '@water/theme'
import { h } from 'vue';

export default {
    ...BlogTheme,
    Layout: h(BlogTheme.Layout, null, {})
}
