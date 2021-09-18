<template>
  <div class="container admin">
    <h1>
      An administrator section that displays Megasoft’s available Balances and
      Transaction reports.
    </h1>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Header from '@/components/Header.vue';
import BalanceService from '@/services/BalanaceService';
import TransactionService from '@/services/TransactionService';

@Options({
  components: {
    Header,
  },
})
export default class Admin extends Vue {
  mounted(): void {
    this.getBalance();
    this.getTransactions();
  }

  getBalance(): void {
    BalanceService.getAllBalances().then((res) => {
      console.debug(res);
    });
  }

  getTransactions(): void {
    TransactionService.getAllTransactions().then((res) => {
      console.debug(res);
    });
  }
}
</script>

<style scoped lang="scss">
.admin {
  padding: 0 50px;
}
</style>
