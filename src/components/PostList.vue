<template>
    <div class="post-box">
        <div class="post-item" v-for="post in posts">
            <h2 class="post-item__title">{{ post.title }}</h2>
            <p class="post-item__desc">{{ post.description }}</p>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style> 