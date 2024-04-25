<template>
  <header class="header">
    <div class="container">
      <div class="header__content">
        <router-link class="main-nav__link" v-if="!isMain" to="/">
          <img class="logo" src="./assets/images/logo.svg" width="314px" height="68px" alt="dear diary логотип">
        </router-link>
        <img class="logo" src="./assets/images/logo.svg" width="314px" height="68px" alt="dear diary логотип" v-else>
        <nav class="main-nav">
          <router-link class="main-nav__link" to="favorite">Избранное</router-link>
          <router-link class="main-nav__link" to="facts">Интересные факты</router-link>
          <router-link class="main-nav__link" to="personal">Профиль</router-link>
        </nav>
      </div>
    </div>
  </header>

  <main class="main">
    <router-view></router-view>
  </main>

  <footer class="footer">
    <div class="container">
      <div class="footer__content">
        <router-link class="main-nav__link" v-if="!isMain" to="/">
          <img class="logo footer__logo" src="./assets/images/logo-light.svg" width="314px" height="68px" alt="dear diary логотип">
        </router-link>
        <img class="logo footer__logo" src="./assets/images/logo-light.svg" width="314px" height="68px" alt="dear diary логотип" v-else>

        <p class="footer__copyright">©Petshop, 2024</p>

        <address class="footer__contacts">
          <p>Developer:</p>
          <a class="footer__link" href="https://t.me/lenapavlenko" target="_blank">Lena Pavlenko</a>
        </address>

      </div>
    </div>
  </footer>
</template>

<script>

  export default {
    components: {
      
    },

    data() {
      return {
        
      }
    },

    methods: {

    },

    mounted() {
      
    },

    computed: {
      isMain() {
        if (this.$route.name === 'main') {
          return true
        } else {
          return false
        }
      }
    }
    
  }
</script>

<style lang="scss">
  @import './assets/styles/index.scss';
  
  .app{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .main {
    flex: 1 0 auto;
  }

  .main-nav {
    display: flex;
    gap: 25px;

    @media(max-width:500px) {
      flex-direction: column;
    }

    &__link {
      font-size: 18px;
      line-height: 1.2;
      text-decoration: none;
      color: inherit;
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

  .logo {
    max-width: 100%;
    width: 314px;
  }

  .footer {
    flex: 0 1 auto;
    padding: 30px 0;
    background-color: #a4a684;
    color: #ffffff;

    &__content {
      display: grid;
      grid-template-areas: 
      'logo logo'
      'info info'
      'contacts contacts';
      gap: 20px;

      @media(max-width:500px) {
        justify-items: center;
      }
    }
    
    &__logo {
      grid-area: logo;
    }

    &__copyright {
      grid-area: info;
      font-size: 18px;
    }

    &__contacts {
      grid-area: contacts;
      display: flex;
      gap: 5px;
      font-style: normal;
      font-size: 16px;
    }
  }
  
</style>
