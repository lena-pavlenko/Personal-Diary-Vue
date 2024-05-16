<template>
  <div class="post-item" :data-favorite="post.favorite">
    <div class="post-item__container" :class="showMoreData ? 'open' : ''" ref="postCont" :style="style">
      <h2 class="post-item__title">{{ post.title }}</h2>
      <p class="post-item__desc">{{ post.description }}</p>
      <button class="post-item__switcher" type="button" :class="isMuchText ? '' : 'disabled'" :title="showMoreData ? '' : 'Показать больше'" ref="switcher" @click="showMoreData = !showMoreData">
        <span v-if="showMoreData">{{ showMoreData ? 'Показать меньше' : '' }}</span>
      </button>
    </div>
    <div class="post-item__buttons">
      <button-item class="post-item__button button_danger" type="button" @click="$emit('remove', post)">
        Удалить
      </button-item>
      <button-item class="post-item__button button_success" type="button" :class="post.favorite ? 'chosen' : ''" @click="$emit('handleFavorite', post)">
        {{ post.favorite ? 'Убрать из избранного' : 'В избранное' }}
      </button-item>
    </div>
    
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
    },
  },

  data() {
    return {
      showMoreData: false,
      isMuchText: true,
    }
  },

  methods: {
    ismuchTextCheck() {
     if (this.$refs.postCont.scrollHeight < 115) {
      this.isMuchText = false
     } else {
      this.isMuchText = true
     }
    }
  },

  mounted() {
    this.ismuchTextCheck()
  },

  computed: {
    style() {
      return `height: ${this.showMoreData ? this.$refs.postCont.scrollHeight + this.$refs.switcher.clientHeight : 115}px`; 
    },
  },
}
</script>

<style lang="scss">
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

    &.disabled {
      display: none;
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

  &__buttons {
    display: flex;
    flex-direction: column;
    gap: 10px;

    @media(max-width:500px) {
      width: 100%;
    }

    * {
      min-width: 150px;
      width: 150px;
      height: 35px;
      font-size: 14px;
      text-transform: none;

      @media(max-width:500px) {
        min-width: auto;
        width: 100%;
        height: 40px;
      }

      .button__icon {
        left: -150px;
      }

      .button__text {
        display: flex;
        align-items: center;
        justify-content: center;
        left: 0px;

        @media(max-width:500px) {
          left: 0;
        }
      }

      &:hover {

        .button__icon {
          left: 0px;
        }

        .button__text {
          left: 150px;

          @media(max-width:500px) {
            left: 0;
          }
        }
      }
    }
  }

}
</style>