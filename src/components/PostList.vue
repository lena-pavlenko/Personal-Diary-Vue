<template>
  <div class="post-box">
    <post-item v-for="post in posts" :post="post" :key="post.id" @remove="$emit('remove', post)" />
  </div>
</template>

<script>
import PostItem from '@/components/PostItem'

export default {
  components: {
    PostItem
  },
  props: {
    posts: {
      type: Array,
      required: true,
    }
  }
}
</script>

<style lang="scss" scoped>
  .post-box {
    display: flex;
    flex-direction: column;
    gap: 20px;
    max-width: 1000px;
    width: 100%;
  }
</style>