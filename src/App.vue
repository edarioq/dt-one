<template>
  <Header />

  <router-view />
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Header from '@/components/Header.vue';

@Options({
  components: {
    Header,
  },
})
export default class App extends Vue {}
</script>

<style lang="scss">
html {
  font-size: 10px;
  letter-spacing: 1px;
}
body {
  font-family: var(--font);
  color: var(--light);
  background-color: var(--brand-1);
  min-height: 100vh;
}
.container {
  max-width: 1200px;
  margin: 0 auto;
}
</style>
