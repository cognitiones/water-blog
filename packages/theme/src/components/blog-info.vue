<script setup>
import BlogFriend from './blog-friend.vue';
import BlogTags from './blog-tags.vue';
</script>

<template>
    <div class="info">
        <BlogFriend />

        <BlogTags />
    </div>
</template>

<style lang="scss" scoped>
    .info{
        width: 100%;
        max-width: 240px;
    }
</style>

