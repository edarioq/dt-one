<template>
  <div class="home">
    <Header />
    <h1>
      A user section that discovers and buys products, as well as running
      promotions.
    </h1>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Header from '@/components/Header.vue';
import ProductService from '@/services/ProductService';

@Options({
  components: {
    Header,
  },
})
export default class User extends Vue {
  mounted(): void {
    ProductService.getAllProducts().then((res) => {
      console.debug(res);
    });
  }
}
</script>
