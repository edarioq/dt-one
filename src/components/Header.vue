<template>
  <header class="container header">
    <div class="header__logo">
      <router-link class="header__logo__link" to="/">Megasoft</router-link>
    </div>
    <div class="header__cart">
      <Cart />
    </div>
    <nav class="header__nav">
      <router-link class="header__nav__link" to="/admin">Admin</router-link>
    </nav>
  </header>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Cart from '@/components/Cart.vue';

@Options({
  components: {
    Cart,
  },
})
export default class Header extends Vue {
  msg!: string;
}
</script>

<style scoped lang="scss">
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100px;
  padding: 0 50px;
  &__logo {
    &__link {
      font-size: 2rem;
      font-weight: var(--font-black);
      text-transform: uppercase;
      text-decoration: none;
      letter-spacing: 0.3rem;
      color: var(--light);
      transition: 300ms;
      &:hover {
        color: var(--brand-3);
      }
    }
  }
  &__cart {
    display: flex;
    justify-content: flex-end;
    flex-grow: 1;
    margin: 0 50px 0 0;
    &:hover {
    }
  }
  &__nav {
    &__link {
      font-size: 1.2rem;
      font-weight: var(--font-regular);
      color: var(--light);
      text-transform: uppercase;
      text-decoration: none;
      transition: 300ms;
      &:hover {
        color: var(--brand-3);
      }
    }
  }
}
</style>
