<script setup>
const props = defineProps({
    route: String,
    title: String,
    cover: String
})
</script>

<template>
    <a class="blogItem" :href="route">
        <div class="blogItem__title">{{ title }}</div>
        <img v-if="cover" class="blogItem__img" :src="cover" alt="">
    </a>
</template>

<style lang="scss">
.blogItem {
    display: flex;
    justify-content: space-between;
    width: 100%;
    background-color: rgba(var(--bg-gradient));
    border-radius: 0.25rem;
    box-shadow: var(--box-shadow);

    padding: 15px;
    margin: 0 0 20px 0;

    &:hover {
        box-shadow: var(--box-shadow-hover);
    }

    &__title {
        font-size: 20px;
        font-weight: 600;
    }

    &__img {
        width: 120px;
        height: 80px;
    }
}
</style>