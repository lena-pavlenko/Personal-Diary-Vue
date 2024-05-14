<template>
  <div class="favorite-page">
    <div class="container">
      <h1 class="title title_h1">Избранное</h1>

      <section class="posts favorite-page__posts">
        <div class="container">
          <post-list :posts="favPosts" @remove="removePost" @handleFavorite="handleFavorite"></post-list>
        </div>
      </section>
    </div>
    
  </div>
</template>

<script>
import PostList from '@/components/PostList.vue';
export default {
  components: {
    PostList
  },

  data() {
    return {
      posts: [],
    }
  },

  methods: {
    removePost(post) {
      this.posts = this.posts.filter(el => el.id !== post.id)
      localStorage.setItem("posts", JSON.stringify(this.posts));
    },

    handleFavorite(post) {
      post.favorite = !post.favorite
      localStorage.setItem("posts", JSON.stringify(this.posts));
    },
  },

  mounted() {
    this.posts = JSON.parse(localStorage.getItem("posts"))
  },

  computed: {
    favPosts() {
      return this.posts.filter(post => post.favorite === true) || []
    }
  },
}
</script>

<style lang="scss" scoped>
  .favorite-page {
    padding: 80px 0;

    @media(max-width: 500px) {
      padding: 50px 0;
    }

    &__posts {
      margin: 30px 0 0;
    }
  }
</style>