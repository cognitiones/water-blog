<script setup>
import { computed, onMounted } from 'vue'
import { useArticles } from '../composables/config';

const docs = useArticles();
const tags = computed(() => {
    return [...new Set(docs.value.map((v) => v.meta.tags || []).flat(3))]
})

</script>

<template>
    <div class="tags-wrapper">
        <div class="title">标签</div>
        <div class="tags-list">
            <span class="tags" v-for="item in tags" :key="item">
                {{ item }}
            </span>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.tags-wrapper {
    padding: 10px 10px 3px 10px;
    background-color: rgba(var(--bg-gradient));
    border-radius: 0.25rem;
    box-shadow: var(--box-shadow);

    &:hover {
        box-shadow: var(--box-shadow-hover);
    }
}

.title {
    font-size: 14px;
}

.tags-list {
    display: flex;
    flex-wrap: wrap;
    margin-top: 10px;
}

.tags {
    color: rgb(0, 254, 233);
    background-color: rgb(10, 137, 215);
    border-radius: 0.25rem;
    margin: 0 10px 10px 0;
    padding: 2px 5px;
    font-size: 14px;
}
</style>