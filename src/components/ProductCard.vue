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

    <button
      class="product-card__buy"
      v-on:click="addToCart(product, false)"
      :disabled="purchasingSuccess"
      :class="{ 'product-card__buy--disabled': purchasingSuccess }"
    >
      {{ purchasingSuccess ? 'Purchasing' : 'Buy Now (Success)' }}
    </button>
    <button
      class="product-card__buy product-card__buy--error"
      v-on:click="addToCart(product, true)"
      :disabled="purchasingDeclined"
      :class="{ 'product-card__buy--disabled': purchasingDeclined }"
    >
      {{ purchasingDeclined ? 'Simulation' : 'Buy Now (Decline)' }}
    </button>
  </section>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import HelperService from '@/services/HelperService';
import TransactionService from '@/services/TransactionService';
import { AsyncTransaction, Product } from '@models';
import useEmitter from '@/useEmitter';

@Options({
  props: {
    product: Object as () => Product,
  },
})
export default class ProductCard extends Vue {
  product!: Product;

  purchasingSuccess = false;
  purchasingDeclined = false;

  emitter = useEmitter();

  addToCart(product: Product, err?: boolean): void {
    if (err) {
      this.purchasingDeclined = true;
    } else {
      this.purchasingSuccess = true;
    }

    const payload: AsyncTransaction = {
      external_id: Math.random().toString(),
      product_id: product.id,
      credit_party_identifier: {
        mobile_number: err ? '+971585420102' : '+971585420100',
      },
      auto_confirm: true,
    };

    TransactionService.createTransaction(payload)
      .then((res) => {
        this.emitter.emit('add-product', product);
        alert(`Transaction ${res.id} was created succesfully!`);
        console.debug(res);
      })
      .catch(() => {
        alert('Transaction could not be completed, please try again!');
      })
      .finally(() => {
        this.purchasingSuccess = false;
        this.purchasingDeclined = false;
      });
  }

  roundPrice(value: string): string {
    return HelperService.roundPrice(value);
  }
}
</script>

<style scoped lang="scss">
.product-card {
  width: 250px;
  height: 250px;
  border-radius: 5px;
  padding: 25px;
  box-sizing: border-box;
  position: relative;
  background-color: var(--dark);
  &__name {
    font-size: 1.6rem;
    margin-bottom: 50px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    color: var(--brand-3);
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
    width: 90px;
    height: 35px;
    background-color: var(--brand-2);
    border: none;
    border-radius: 5px;
    color: var(--dark);
    transition: 300ms;
    text-transform: uppercase;
    position: absolute;
    bottom: 25px;
    left: 25px;
    &:hover {
      cursor: pointer;
      color: var(--dark);
      background-color: var(--brand-1);
    }
    &--disabled {
      background-color: var(--brand-2);
      cursor: not-allowed;
    }
    &--error {
      left: inherit;
      right: 25px;
      background-color: var(--brand-3);
    }
  }
}
</style>
