<template>
  <form class="form" name="create-post-form">
    <div class="form-item">
      <label class="form-item__label" for="titlePost">Заголовок поста</label>

      <input 
        class="form-item__input" 
        type="text" 
        id="titlePost" 
        name="title" 
        placeholder="День 1"
        :class="{ 'form-item__invalid': post.errors.title }" 
        v-model.trim="post.title" 
        @input="post.errors.title = ''">

      <p 
        class="form-item__invalid-text" 
        v-if="post.errors.title">{{ this.post.errors.title }}
      </p>
    </div>

    <div class="form-item">
      <label class="form-item__label" for="descPost">Описание</label>

      <textarea 
        class="form-item__input form-item__textarea" 
        name="description" 
        id="descPost"
        placeholder="Сегодня произошло такое..." 
        :class="{ 'form-item__invalid': post.errors.description }"
        v-model.trim="post.description" 
        @input="autoGrow($event.target), post.errors.description = ''">
      </textarea>

      <p 
        class="form-item__invalid-text" 
        v-if="post.errors.description">
        {{ this.post.errors.description }}
      </p>
    </div>

    <button-item 
      class="form__button" 
      type="submit" 
      @click.prevent="createPost">
      Опубликовать
    </button-item>
  </form>
</template>

<script>
import ButtonItem from '@/components/ButtonItem'

export default {
  components: {
    ButtonItem,
  },
  data() {
    return {
      post: {
        title: '',
        description: '',
        errors: {},
      },
    }
  },
  methods: {
    checkForm() {
      if (this.post.title && this.post.description) {
        return true;
      }
      this.post.errors = {};

      if (!this.post.title) {
        this.post.errors.title = 'Укажите заголовок'
      }
      if (!this.post.description) {
        this.post.errors.description = 'Укажите описание'
      }

      return false
    },

    createPost() {
      if (this.checkForm()) {
        this.post.id = Date.now()
        this.$emit('create', this.post)

        this.post = {
          title: '',
          description: '',
          errors: {}
        }
      }
    },

    autoGrow(el) {
      el.style.height = 'auto'
      el.style.height = el.scrollHeight + 2 + "px"
    }
  },
}
</script>

<style lang="scss">
.form {
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 20px 0;

  @media(max-width:500px) {
    padding: 10px 0;
  }

  &__button {
    width: 200px;
    height: 40px;

    .button__icon {
      left: 0;

      @media(max-width:500px) {
        display: none;
      }
    }

    .button__text {
      left: -250px;

      @media(max-width:500px) {
        left: 0;
      }
    }

    &:hover {

      .button__icon {
        left: 250px;
      }

      .button__text {
        left: 0;
      }
    }
  }
}

.form-item {
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 100%;

  &__label {
    font-family: inherit;
    font-size: 16px;
  }

  &__input {
    width: 100%;
    border: 1px solid #a4a684;
    padding: 10px;
    font-size: inherit;
    border-radius: 5px;
    outline: none;
    transition: all .2s ease-in;

    &:focus-visible {
      border-color: #c27a88;
    }
  }

  &__textarea {
    resize: none;
    max-height: 300px;
  }

  &__invalid {
    border-color: red;
  }

  &__invalid-text {
    color: red;
    font-size: 12px;
  }
}
</style>