<template>
  <section class="product-card">
    <div class="product-card__name">
      {{ product.name }}
    </div>
    <div class="product-card__price">
      <div class="product-card__price__retail">
        Retail Price: {{ product.prices.retail.unit }} - ${{
          roundPrice(product.prices.retail.amount)
        }}
      </div>
      <div class="product-card__price__wholesale">
        Wholesale Price: {{ product.prices.wholesale.unit }} - $
        {{ roundPrice(product.prices.wholesale.amount) }}
      </div>
    </div>
    <div class="product-card__promotions">
      Promotions:
      {{ product.prices.promotions ? product.prices.promotions : 'None' }}
    </div>

    <button class="product-card__buy" v-on:click="addToCart(product)">
      Buy Now
    </button>
  </section>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { Product } from '@models';
import useEmitter from '@/useEmitter';

@Options({
  props: {
    product: Object as () => Product,
  },
})
export default class ProductCard extends Vue {
  product!: Product;
  emitter = useEmitter();

  addToCart(product: Product): void {
    this.emitter.emit('add-product', product);
  }

  roundPrice(value: string): string {
    return parseFloat(value).toFixed(2);
  }
}
</script>

<style scoped lang="scss">
.product-card {
  width: 250px;
  height: 250px;
  border: 1px solid var(--brand-2);
  border-radius: 5px;
  padding: 25px;
  box-sizing: border-box;
  position: relative;
  &__name {
    font-size: 1.6rem;
    margin-bottom: 50px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  &__price {
    margin-bottom: 10px;
    &__retail {
      margin-bottom: 10px;
    }
    &__wholesale {
      margin-bottom: 10px;
    }
  }
  &__promotions {
    margin-bottom: 20px;
  }
  &__buy {
    width: 100px;
    height: 25px;
    background-color: var(--dark);
    border: none;
    border-radius: 5px;
    color: var(--light);
    transition: 300ms;
    text-transform: uppercase;
    position: absolute;
    bottom: 25px;
    left: 25px;
    &:hover {
      cursor: pointer;
      color: var(--dark);
      background-color: var(--brand-2);
    }
  }
}
</style>
