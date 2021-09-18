<template>
  <div class="container user">
    <h1 class="user__heading">Product List</h1>
    <template v-if="loading">
      <Loading />
    </template>
    <template v-else>
      <section class="user__product-list">
        <ProductCard
          v-for="product in products"
          :key="product.id"
          :product="product"
        />
      </section>
    </template>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Header from '@/components/Header.vue';
import Loading from '@/components/Loading.vue';
import ProductCard from '@/components/ProductCard.vue';
import ProductService from '@/services/ProductService';
import PromotionService from '@/services/PromotionService';
import { Product } from '@models';

@Options({
  components: {
    Header,
    Loading,
    ProductCard,
  },
})
export default class User extends Vue {
  products?: Product[];
  loading = false;

  created(): void {
    this.getProductList();
    /* this.getPromotions(); */
  }

  getProductList(): void {
    this.loading = true;
    ProductService.getAllProducts().then((productList) => {
      this.products = productList;
      this.loading = false;
    });
  }

  getPromotions(): void {
    PromotionService.getAllPromotions().then((promotions) => {
      console.debug(promotions);
    });
  }
}
</script>

<style scoped lang="scss">
.user {
  padding: 0 50px;
  margin-bottom: 100px;
  &__heading {
    font-size: 2.4rem;
    margin-bottom: 30px;
  }
  &__product-list {
    display: grid;
    grid-template-columns: repeat(auto-fill, 250px);
    justify-content: space-between;
    grid-column-gap: 25px;
    grid-row-gap: 25px;
  }
}
</style>
