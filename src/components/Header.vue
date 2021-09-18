<template>
  <header class="container header">
    <div class="header__logo">
      <router-link class="header__logo__link" to="/">Megasoft</router-link>
    </div>
    <nav class="header__nav">
      <router-link class="header__nav__link" to="/admin">Admin</router-link>
    </nav>
  </header>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
  props: {
    msg: String,
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
  height: 50px;
  padding: 0 50px;
  &__logo {
    &__link {
      font-size: 2rem;
      font-weight: var(--font-bold);
      text-transform: uppercase;
      text-decoration: none;
      color: var(--dark);
    }
  }
  &__nav {
    &__link {
    }
  }
}
</style>
