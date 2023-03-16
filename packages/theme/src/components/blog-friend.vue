<script setup>
import { useBlogConfig } from '../composables/config'

const { friend } = useBlogConfig()
const handleClick = (url) => {
    // window.open(url)
}
</script>

<template>
    <div class="friend-wrapper">
        <div class="title">友情链接</div>
        <div class="friend" @click="handleClick(item.url)" v-for="item in friend" :key="item.url">
            <img class="friend__img" :src="item.avatar" alt="">
            <div class="friend__msg">
                <div>{{ item.nickname }}</div>
                <div>{{ item.des }}</div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.friend-wrapper {
    min-width: 240px;
    margin-bottom: 10px;
    background-color: rgba(var(--bg-gradient));
    border-radius: 0.25rem;
    box-shadow: var(--box-shadow);

    &:hover {
        box-shadow: var(--box-shadow-hover);
    }
}

.title{
    padding: 10px 0 0 10px;
    font-size: 14px;
}

.friend {
    display: flex;
    padding: 10px;
    

    &__img {
        width: 50px;
        height: 50px;
        border-radius: 10%;
    }

    &__msg {

        margin-left: 20px;
    }
}
</style>