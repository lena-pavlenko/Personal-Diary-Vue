<template>
  <section class="banner">
    <div class="container">
      <div class="banner__wrapper">
        <div class="banner__content">

          <div class="banner__title-box">
            <h1 class="title banner__title title_h1">Напиши свою историю</h1>
          </div>

          <button-item class="banner__button" type="button" @click="this.$refs.dialogCreate.showModal()">
            Создать запись
          </button-item>

        </div>
      </div>
    </div>
  </section>

  <dialog class="dialog dialog-create" ref="dialogCreate">

    <button class="dialog__cancel" type="button" aria-label="Закрыть диалоговое окно" style="color:#a4a684"
      @click="this.$refs.dialogCreate.close()">
      <icon-base icon-name="cancel">
        <icon-cancel />
      </icon-base>
    </button>

    <post-form @create="createPost" />

  </dialog>

  <section class="posts">
    <div class="container"></div>
  </section>


</template>

<script>
import IconBase from '@/components/icons/IconBase'
import IconCancel from '@/components/icons/IconCancel'
import PostForm from '@/components/PostForm'
import ButtonItem from '@/components/ButtonItem'

export default {
  components: {
    IconBase,
    IconCancel,
    PostForm,
    ButtonItem,
  },

  data() {
    return {
      title: '',
      description: '',
      posts: [],
    }
  },

  methods: {
    createPost(post) {
      this.posts.push(post)
      this.$refs.dialogCreate.close()
    }
  },

  mounted() {

  },
}
</script>

<style lang="scss" scoped>
.dialog {
  background-color: #e8d4ce;
  border: none;
  border-radius: 5px;
  width: calc(100% - 40px);
  max-width: 600px;
  padding: 20px;
  margin: 0 auto;
  top: 20%;

  @media(max-width:500px) {
    padding: 10px;
  }

  &::backdrop {
    background: rgba(164, 166, 132, 0.68);
  }

  &__cancel {
    background: transparent;
    padding: 0;
    border: none;
    cursor: pointer;
  }
}

.title {
  margin: 0;

  &_h1 {
    font-size: clamp(1.75rem, 5.5vw + 0.3rem, 4.5rem);
    color: #56583c;
  }
}

.banner {
  position: relative;
  width: 100%;
  min-height: 100vh;
  padding-top: 100px;
  background-image: url('../assets/images/banner.webp');
  background-image: image-set(url('../assets/images/banner.webp') type('image/webp') 1x,
      url('../assets/images/banner@2x.webp') type('image/webp') 2x,
    );
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;

  &__wrapper {
    position: relative;
  }

  &__content {
    display: inline-flex;
    flex-direction: column;
    gap: 2vw;
  }

  &__title-box {
    background-color: rgb(237, 238, 219, 0.36);
    width: auto;
    padding: 10px;
  }

  &__title {
    font-family: 'Marck Script', cursive;
  }
}
</style>