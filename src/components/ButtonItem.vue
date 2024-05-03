<template>
  <button class="button">
    <span class="button__icon"></span>
    <span class="button__text">
      <slot></slot>
    </span>
  </button>
</template>

<script>
export default {
}
</script>

<style lang="scss">

.button {
  display: inline-flex;
  background-color: #c27a88;
  height: 60px;
  width: 250px;
  max-width: 100%;
  color: #ffffff;
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
    left: -250px;
    position: absolute;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all .35s ease-Out;
    bottom: 0;

    &::after {
      content: '';
      display: block;
      background-image: url(../assets/images/pen.svg);
      background-size: contain;
      background-repeat: no-repeat;
      width: 15px;
      height: 17px;
    }
  }

  &__text {
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

  &_danger {
    background: rgb(196, 44, 44);
    min-width: 150px;
    width: 150px;

    @media(max-width:500px) {
      min-width: auto;
      width: 100px;
      height: 40px;
    }

    .button__icon {
      left: -150px;

      @media(max-width:500px) {
        display: none;
      }

      &::after {
        background-image: url(../assets/images/delete.svg);
        height: 28px;
        width: 28px;
      }
    }

    .button__text {
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
</style>