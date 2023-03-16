<script setup>
import { computed, ref } from 'vue'
import { useData } from 'vitepress'
import { useBlogConfig } from '../composables/config'

const { site, frontmatter } = useData()
const { home } = useBlogConfig()

const name = computed(
    () => (frontmatter.value.blog?.name ?? site.value.title) || home?.name || ''
)
</script>

<template>
    <div>
        <h1 class="name">{{ name }}</h1>
    </div>
</template>

<style lang="scss" scoped>
    .name{
        text-align: center;
        font-size: 25px;
        padding: 60px 0;
    }
</style>
