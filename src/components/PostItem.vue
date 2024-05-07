<template>
  <div class="post-item">
    <div class="post-item__container" :class="showMoreData ? 'open' : ''" ref="postCont" :style="style">
      <h2 class="post-item__title">{{ post.title }}</h2>
      <p class="post-item__desc">{{ post.description }}</p>
      <button class="post-item__switcher" type="button" :title="showMoreData ? '' : 'Показать больше'" ref="switcher" @click="showMoreData = !showMoreData">
        <span v-if="showMoreData">{{ showMoreData ? 'Показать меньше' : '' }}</span>
      </button>
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
      class: 'button_danger',
      showMoreData: false
    }
  },

  methods: {

  },

  computed: {
    style() {
      return `height: ${this.showMoreData ? this.$refs.postCont.scrollHeight + this.$refs.switcher.clientHeight : 115}px`; 
    }
  },
}
</script>

<style lang="scss" scoped>
.post-item {
  position: relative;
  display: flex;
  gap: 10px;

  @media(max-width:720px) {
    flex-direction: column;
    align-items: flex-start;
  }

  &__container {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 10px;
    border: 1px solid #c27a88;
    padding: 10px;
    flex-grow: 1;
    overflow: hidden;
    transition: height .3s ease-out;

    @media(max-width:720px) {
      width: 100%;
    }

    &.open {

      .post-item__switcher {
        background: linear-gradient(180deg, transparent, rgba(237, 238, 219, 0) 50%);
        position: initial;
      }
    }
  }

  &__switcher {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 40px;
    background: linear-gradient(180deg, transparent, #edeedb 50%);
    cursor: pointer;

    span {
      text-decoration: underline;
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