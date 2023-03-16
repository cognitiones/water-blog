<script setup name="BlogApp">
import Theme from 'vitepress/theme';

import BlogList from './blog-list.vue';
import BlogInfo from './blog-info.vue';
import BlogHeader from './blog-header.vue';
import Plum from './plum.vue';
import { ref, onMounted } from 'vue'

const { Layout } = Theme
</script>

<template>
    <Layout>
        <template #nav-bar-content-before>
        </template>
        <template #home-hero-before>
            <div class="home">
                <Plum></Plum>
                <div class="header-banner">
                    <BlogHeader />
                </div>
                <div class="content-wrapper">
                    <div class="blog-list-wrapper">
                        <BlogList />
                    </div>
                    <div class="blog-info-wrapper">
                        <BlogInfo />
                    </div>
                </div>
            </div>
        </template>
        <template #sidebar-nav-after>
        </template>
        <template #doc-after>
        </template>
    </Layout>
</template>

<style lang="scss">
.home {
    margin: 0 auto;
    padding: 20px;
    max-width: 1126px;
}

.content-wrapper {
    display: flex;
    align-items: flex-start;
    justify-content: center;
}

.blog-list-wrapper {
    width: 100%;
}

.blog-info-wrapper {
    flex-shrink: 0;
    margin-left: 16px;
    position: sticky;
    top: 100px;
}
</style>