<template>
  <div class="personal-page">
    <div class="container">
      <h1 class="title title_h1">Профиль</h1>
      <form class="form form-personal">
        <fieldset class="form-item">
          <label class="form-item__label" for="userPhoto">Загрузите ссылку на фото</label>

          <input
            id="userPhoto"
            class="form-item__input"
            type="text"
            name="photo"
            v-model.trim="profile.photo"
          />
        </fieldset>

        <div class="photo" v-if="profile.photo">
          <img :src="profile.photo" :alt="profile.name">
        </div>

        <fieldset class="form-item">
          <label class="form-item__label" for="userName">Ваше имя</label>

          <input
            id="userName" 
            class="form-item__input" 
            type="text"
            name="name" 
            placeholder="Имя"
            v-model.trim="profile.name"
          />
        </fieldset>

        <fieldset class="form-item">
          <label class="form-item__label" for="userBirthday">Дата рождения</label>

          <input
            id="userBirthday" 
            class="form-item__input" 
            type="date"
            name="birthday"
            onkeydown="return false"
            v-model.trim="profile.birthday"
          />
        </fieldset>

        <fieldset class="form-item">
          <label class="form-item__label" for="userCity">Город</label>

          <input
            id="userCity" 
            class="form-item__input" 
            type="text"
            name="city" 
            placeholder="Город"
            v-model.trim="profile.city"
          />
        </fieldset>

        <fieldset class="form-item">
          <label class="form-item__label" for="userBio">О себе (максимум 300 символов)</label>

          <textarea
            id="userBio"
            class="form-item__input form-item__textarea" 
            name="bio"
            placeholder="О себе"
            @input="autoGrow($event.target), cropText($event.target)"
            @paste="pasteText($event)"
            v-model.trim="profile.bio"
          >
          </textarea>
        </fieldset>

        <button-item 
          class="form-personal__button" 
          type="submit" 
          @click.prevent="editProfile">
          Сохранить
        </button-item>
      </form>
    </div>
  </div>
  <div class="toast" :class="toastActive ? 'active' : ''">

    <div class="toast__content">
      <div class="toast__message">
        <span class="toast__text">Изменения были сохранены!</span>
      </div>
    </div>

    <button type="button" class="toast__close" @click="toastActive = false">x</button>
  </div>
</template>

<script>
import ButtonItem from '@/components/ButtonItem'

export default {
  components: {
    ButtonItem,
  },
  data() {
    return {
      profile: {
        bio: '',
        photo: '',
        name: '',
        birthday: '',
        city: '',
        errors: {},
      },
      toastActive: false,
    }
  },
  methods: {
    editProfile() {
      localStorage.setItem("profile", JSON.stringify(this.profile));
      this.toastActive = true
    },

    autoGrow(el) {
      el.style.height = 'auto'
      el.style.height = el.scrollHeight + 2 + "px"
    },

    cropText(el) {
      if (el.value.length >= 300) {
        el.value = el.value.slice(0, 299)
        return false
      }
    },

    pasteText(event) {
      if (event.clipboardData.getData('text/plain').length >= 300) {
        event.target.value = event.clipboardData.getData('text/plain').slice(0, 299)
        return false
      }
    },

    adjustHeight(el) {
      if (el.scrollHeight > el.offsetHeight) {
        el.style.height = `${el.scrollHeight + 10}px`
      }
    }
  },

  mounted() {
    this.profile = JSON.parse(localStorage.getItem("profile")) || {}
  },

  updated() {
    this.adjustHeight(document.getElementById('userBio'))
  }
}
</script>

<style lang="scss">
  .personal-page {
    padding: 80px 0;

    @media(max-width: 500px) {
      padding: 50px 0;
    }
  }
  .form-personal {
    width: clamp(50%, 100%, 700px);

    &__button {
      width: 200px;
      height: 45px;

      .button__icon {
        left: -200px;

        &::after {
          background-image: url(../assets/images/save.svg);
          width: 30px;
          height: 30px;
        }
      }

      .button__text {
        position: relative;
        left: 0;
        transition: all .35s ease-Out;
      }

      &:hover {

        .button__icon {
          left: 0;
        }

        .button__text {
          left: 250px;
        }
      }
    }
  }
  .photo {
    width: 200px;
    height: 200px;

    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
  }

  .toast {
    position: fixed;
    top: 25px;
    right: 30px;
    border-radius: 12px;
    background: #fff;
    padding: 20px 35px 20px 25px;
    box-shadow: 0 6px 20px -5px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    transform: translateX(calc(100% + 30px));
    transition: all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.35);

    &.active {
      transform: translateX(0%);
    }

    &__content {
      display: flex;
      align-items: center;
    }

    &__message {
      display: flex;
      flex-direction: column;
      margin: 0 20px;
    }

    &__text {
      font-size: 16px;
      font-weight: 400;
      color: #666666;
    }

    &__close {
      position: absolute;
      top: 0px;
      right: 15px;
      padding: 0;
      cursor: pointer;
      opacity: 0.7;
      font-size: 20px;
      font-family: cursive;

      &:hover {
        opacity: 1;
      }
    }
  }
</style>