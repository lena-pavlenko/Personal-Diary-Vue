<template>
  <div class="post-box" v-if="posts.length">
    <transition-group name="posts">
      <post-item v-for="post in posts" :post="post" :key="post.id" @remove="$emit('remove', post)" @handleFavorite="$emit('handleFavorite', post)" v-if="posts.length" />
    </transition-group>
  </div>
  <p class="empty-text" v-else>Записей пока нет</p>
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

  .posts-enter-active,
  .posts-leave-active {
    transition: all .5s ease;
  }
  .posts-enter-from,
  .posts-leave-to {
    opacity: 0;
    transform: translateX(30px);
  }


  .empty-text {
    font-size: 20px;
  }
</style>