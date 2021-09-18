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
}
body {
  font-family: var(--font);
  background-image: linear-gradient(
    to top,
    var(--dark),
    #615459,
    #645b66,
    #626373,
    #5b6c7d,
    #597989,
    #578691,
    #5a9394,
    #62a79f,
    #70baa7,
    #84cdab,
    var(--brand-3)
  );
  min-height: 100vh;
}
.container {
  max-width: 1200px;
  margin: 0 auto;
}
</style>
