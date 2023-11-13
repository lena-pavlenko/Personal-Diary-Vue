<template>
  <header class="header">
    <div class="container">
      <div class="header__content">
        <a href="/" class="logo">
          <img src="./assets/images/logo.svg" alt="dear diary логотип">
        </a>
        <nav class="main-nav">
          <a href="#" class="main-nav__link">Избранное</a>
          <a href="#" class="main-nav__link">Интересные факты</a>
          <a href="#" class="main-nav__link">Профиль</a>
        </nav>
      </div>
    </div>
  </header>
  <main class="main">
    <section class="banner">
      <div class="container">
        <div class="banner__wrapper">
          <div class="banner__content">
            <div class="banner__title-box">
              <h1 class="title banner__title title_h1">Напиши свою историю</h1>
            </div>
            <button type="button" class="button banner__button">
              <span class="button__icon">
                <img src="./assets/images/pen.svg" alt="" />
              </span>
              <span class="button__text">Создать запись</span>
            </button>
          </div>
        </div>
      </div>
      <div class="banner-box">
        <picture>
          <source srcset="./assets/images/banner.webp" />
          <img src="./assets/images/banner.webp" alt="баннер дневник" />
        </picture>
      </div>
    </section>
    <dialog class="dialog dialog-create">
      <form class="form" name="create-post-form">
        <div class="form-item">
          <label for="titlePost" class="form-item__label">Заголовок поста</label>
          <input 
            type="text" 
            class="form-item__input" 
            id="titlePost" 
            name="title"
            placeholder="День 1"
          >
        </div>
        <div class="form-item">
          <label for="descPost" class="form-item__label">Описание</label>
          <textarea 
            name="description" 
            id="descPost"
            placeholder="Сегодня произошло такое..."
          ></textarea>
        </div>
      
      
    </form>
    </dialog>
    
  </main>
  <footer class="footer">
    <div class="container">
      <div class="footer__content">Footer</div>
    </div>
  </footer>
  
</template>

<script>
  export default {
    data() {
      return {
        
      }
    },

    methods: {
      
    },

    mounted() {
      
    },
  }
</script>

<style lang="scss">
  @import './assets/styles/index.scss';
  
  #app{
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .logo {
    max-width: 100%;
    width: fit-content;

    img {
      max-width: 100%;
    }
  }
  .header {
    flex: 0 1 auto;
    background-color: #e8d4ce;
    padding: 20px 0;

    &__content {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      gap: 20px;
    }
  }
  .footer {
    flex: 0 1 auto;
  }
  .main {
    flex: 1 0 auto;
  }
  .main-nav {
    display: flex;
    gap: 25px;
  }
  .dialog {
    background-color: #edeedb;
    border: none;
    border-radius: 5px;
    width: 90vw;
    padding: 20px;
    margin: 0 auto;
  }
  .form-item {
    display: flex;
    flex-direction: column;
  }
  .button {
    display: inline-flex;
    background-color: #c27a88;
    height: $buttonHeightLarge;
    width: $buttonWidthLarge;
    color:#56583c;
    text-transform: uppercase;
    text-decoration: none;
    font-size: 16px;
    letter-spacing: 1.5px;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    position: relative;
    cursor: pointer;
    padding: 0;
    border: none;
    font-weight: 700;

    &__icon {
      width: 100%;
      height: 100%;
      background: #edeedb;
      left: -$buttonWidthLarge;
      position: absolute;
      padding: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all .35s ease-Out;
      bottom: 0;
    }

    &__text {
      position: relative;
      left: 0;
      transition: all .35s ease-Out;
    }

    img {
      width: 20px;
      height: auto;
    }

    &:hover {

      .button__icon {
        left: 0;
      }

      .button__text {
        left: $buttonWidthLarge;
      }
    }
  }
  .title {
    margin: 0;

    &_h1 {
      font-size: clamp(1.75rem, 5.5vw + 0.3rem, 4.5rem);
      color: #56583c;
    }
  }
  
  .banner-box {
    position: relative;
    width: 100%;
    aspect-ratio: 1200/320;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .banner {
    &__wrapper {
      position: relative;
    }

    &__content {
      position: absolute;
      z-index: 2;
      top: 5vw;
      display: flex;
      flex-direction: column;
      gap: 2vw;
    }

    &__title-box {
      background-color: rgb(237,238,219,0.36);
      width: auto;
      padding: 10px;
      
    }

    &__title {
      font-family: 'Marck Script', cursive;
    }

    &__button {
      width: 250px;

    }
  }

  

  
</style>
