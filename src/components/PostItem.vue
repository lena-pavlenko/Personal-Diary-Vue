<template>
  <div class="post-item">
    <div class="post-item__container">
      <h2 class="post-item__title">{{ post.title }}</h2>
      <p class="post-item__desc">{{ post.description }}</p>
    </div>
    <button-item class="post-item__button" type="button" :class="class" @click="$emit('remove', post)">
      Удалить
    </button-item>
  </div>
</template>

<script>

import ButtonItem from '@/components/ButtonItem'

export default {
  components: {
    ButtonItem
  },

  props: {
    post: {
      type: Object,
      required: true,
    }
  },

  data() {
    return {
      class: 'button_danger'
    }
  },
}
</script>

<style lang="scss" scoped>
.post-item {
  position: relative;
  display: flex;
  align-items: center;
  gap: 10px;

  @media(max-width:720px) {
    flex-direction: column;
    align-items: flex-start;
  }

  &__container {
    display: flex;
    flex-direction: column;
    gap: 10px;
    border: 1px solid #c27a88;
    padding: 10px;
    flex-grow: 1;

    @media(max-width:720px) {
      width: 100%;
    }
  }

  &__title {
    margin: 0;
    font-size: 28px;

    @media(max-width:500px) {
      font-size: 20px;
    }
  }

  &__desc {
    margin: 0;
    font-size: 16px;

    @media(max-width:500px) {
      font-size: 14px;
    }
  }

  &__button {
    flex-shrink: 1;
  }
}
</style>