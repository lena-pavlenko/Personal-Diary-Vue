<template>
  <div class="quotes-page">
    <div class="container">
      <h1 class="title title_h1">Случайная цитата</h1>

      <div class="qoute-block quotes-page__qoute-block">
        <blockquote class="quote">
          <p>{{ data.quote }}</p>
          <cite>{{ data.author }}</cite>
        </blockquote>
      </div>
    </div>
  </div>
  <div class="loader-wrapper" v-if="loading">
    <div class="loader"></div>
  </div>
</template>

<script>
import axios from 'axios'
export default {

  data() {
    return {
      data: {},
      loading: false
    }
  },

  methods: {
    async getPosts() {
      this.loading = true
      try {
        const response = await axios.get(`https://api.breakingbadquotes.xyz/v1/quotes`)
        this.data = response.data[0] || {}
      } catch (error) {
        console.log('Ошибка: ' + error);
      } finally {
        this.loading = false
      }
    },
  },

  mounted() {
    this.getPosts()
  },
}
</script>

<style lang="scss" scoped>
  .qoute-block {
    width: 80%;

    @media(max-width:500px) {
      width: 100%;
    }
  }

  .quote {
    padding-left: 50px;
    margin: 0;
    border-left: 4px solid #e2e2e2;
    font-family: 'Georgia', 'Times New Roman', serif;
    font-size: 22px;
    line-height: 1.27;

    @media(max-width:500px) {
      padding-left: 25px;
      font-size: 18px;
    }

    p {
      color: #333333;
      margin: 0 0 20px;
    }

    cite {
      color: #aaaaaa;
    }
  }

  .quotes-page {
    padding: 80px 0;

    @media(max-width:500px) {
      padding: 50px 0;
    }

    &__qoute-block {
      margin: 30px 0 0 40px;

      @media(max-width:500px) {
        margin: 30px 0 0 0;
      }
    }
  }
  .loader-wrapper {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .loader {
    width: 35px;
    aspect-ratio: 1;
    --c1:linear-gradient(90deg,#0000 calc(100%/3),#c27a88 0 calc(2*100%/3),#0000 0);
    --c2:linear-gradient( 0deg,#0000 calc(100%/3),#c27a88 0 calc(2*100%/3),#0000 0);
    background: var(--c1),var(--c2),var(--c1),var(--c2);
    background-size: 300% 4px,4px 300%;
    background-repeat: no-repeat;
    animation: l3 1s infinite linear;
  }
  @keyframes l3 {
    0%   {background-position: 50%  0,100% 100%,0    100%,0 0}
    25%  {background-position: 0    0,100% 50% ,0    100%,0 0}
    50%  {background-position: 0    0,100% 0   ,50%  100%,0 0}
    75%  {background-position: 0    0,100% 0   ,100% 100%,0 50%}
    75.01%{background-position: 100% 0,100% 0   ,100% 100%,0 50%}
    100% {background-position: 50%  0,100% 0   ,100% 100%,0 100%}
  }
</style>