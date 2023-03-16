<script setup>
import { useData } from 'vitepress'
import { computed } from 'vue';
import { useArticles } from '../composables/config.js'
import Item from './item.vue';

const { theme, frontmatter } = useData()
const docs = useArticles()
console.log(docs.value,'vlue');
const wikiList = computed(() => {
    return docs.value.filter(v => !v.meta.hidden)
})

</script>

<template>
    <div class="list" v-for="(item, index) in wikiList" :key="item.route">
        <Item :route="item.route" :title="item.meta.title" :cover="item.meta.cover" />
    </div>
</template>

<style lang="scss">
</style>