<template>
  <aside class="cart">
    <div class="cart__icon" v-on:click="cart()">
      <img src="@/assets/trolley.svg" alt="" height="25" width="25" />
    </div>
    <div class="cart__count">
      {{ products.length }}
    </div>
  </aside>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { Product } from '@models';
import useEmitter from '@/useEmitter';

@Options({
  props: {},
})
export default class Cart extends Vue {
  products: Product[] = [];
  emitter = useEmitter();

  created(): void {
    this.emitter.on('add-product', (product: Product) => {
      this.products.push(product);
    });
  }

  cart(): void {
    console.debug(this.products);
  }
}
</script>

<style scoped lang="scss">
.cart {
  display: grid;
  grid-template-columns: 25px 25px;
  grid-column-gap: 10px;
  align-items: center;
  justify-content: center;
  &__icon {
    width: 25px;
    height: 25px;
    &:hover {
      cursor: pointer;
    }
  }
  &__count {
    font-size: 1.2rem;
  }
}
</style>
