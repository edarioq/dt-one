<template>
  <section class="loading">
    <div class="loading__container">
      <svg
        version="1.1"
        id="L6"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        viewBox="0 0 100 100"
        enable-background="new 0 0 100 100"
        xml:space="preserve"
      >
        <rect
          fill="none"
          stroke="#fff"
          stroke-width="4"
          x="25"
          y="25"
          width="50"
          height="50"
        >
          <animateTransform
            attributeName="transform"
            dur="0.5s"
            from="0 50 50"
            to="180 50 50"
            type="rotate"
            id="strokeBox"
            attributeType="XML"
            begin="rectBox.end"
          ></animateTransform>
        </rect>
        <rect x="27" y="27" fill="#fff" width="46" height="50">
          <animate
            attributeName="height"
            dur="1.3s"
            attributeType="XML"
            from="50"
            to="0"
            id="rectBox"
            fill="freeze"
            begin="0s;strokeBox.end"
          ></animate>
        </rect>
      </svg>
    </div>
  </section>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component';

export default class Loading extends Vue {}
</script>

<style scoped lang="scss">
.loading {
  position: relative;
  height: 200px;
  &__container {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100px;
    height: 100px;
  }
}
</style>
