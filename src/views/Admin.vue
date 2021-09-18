<template>
  <div class="container admin">
    <h1>Administrator</h1>
    <template v-if="loadingBalances && loadingTransactions">
      <Loading />
    </template>
    <template v-else>
      <h2 class="admin__label">Balance</h2>
      <div class="admin__table">
        <div class="admin__table__header">
          <div class="admin__table__header__cell">ID</div>
          <div class="admin__table__header__cell">Balance</div>
          <div class="admin__table__header__cell">Credit Limit</div>
          <div class="admin__table__header__cell">Holding</div>
          <div class="admin__table__header__cell">Unit</div>
          <div class="admin__table__header__cell">Unit Type</div>
        </div>
        <div class="admin__table__body">
          <div
            class="admin__table__body__row"
            v-for="balance in balances"
            :key="balance.id"
          >
            <div class="admin__table__body__row__cell">{{ balance.id }}</div>
            <div class="admin__table__body__row__cell">
              ${{ round(balance.available) }}
            </div>
            <div class="admin__table__body__row__cell">
              {{ balance.credit_limit }}
            </div>
            <div class="admin__table__body__row__cell">
              {{ balance.holding }}
            </div>
            <div class="admin__table__body__row__cell">{{ balance.unit }}</div>
            <div class="admin__table__body__row__cell">
              {{ balance.unit_type }}
            </div>
          </div>
        </div>
      </div>

      <h2 class="admin__label">Transactions</h2>
      <div class="admin__table">
        <div class="admin__table__header">
          <div class="admin__table__header__cell">ID</div>
          <div class="admin__table__header__cell">Status</div>
          <div class="admin__table__header__cell">Product</div>
          <div class="admin__table__header__cell">Identifier</div>
          <div class="admin__table__header__cell">Date</div>
          <div class="admin__table__header__cell">Price</div>
        </div>
        <div class="admin__table__body">
          <div
            class="admin__table__body__row"
            v-for="transaction in transactions"
            :key="transaction.id"
          >
            <div class="admin__table__body__row__cell">
              {{ transaction.id }}
            </div>
            <div class="admin__table__body__row__cell">
              {{ transaction.status.message }}
            </div>
            <div class="admin__table__body__row__cell">
              {{ transaction.product.name }}
            </div>
            <div class="admin__table__body__row__cell">
              {{ transaction.credit_party_identifier.mobile_number }}
            </div>
            <div class="admin__table__body__row__cell">
              {{ date(transaction.creation_date) }}
            </div>
            <div class="admin__table__body__row__cell">
              R: ${{ round(transaction.prices.retail.amount) }} | W: ${{
                round(transaction.prices.wholesale.amount)
              }}
            </div>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Loading from '@/components/Loading.vue';
import BalanceService from '@/services/BalanceService';
import TransactionService from '@/services/TransactionService';
import HelperService from '@/services/HelperService';
import { Balance, Transaction } from '@models';

@Options({
  components: {
    Loading,
  },
})
export default class Admin extends Vue {
  balances?: Balance[] = [];
  transactions?: Transaction[] = [];
  loadingBalances = false;
  loadingTransactions = false;

  mounted(): void {
    this.getBalance();
    this.getTransactions();
  }

  getBalance(): void {
    this.loadingBalances = true;
    BalanceService.getAllBalances().then((balance) => {
      this.balances = balance;
      this.loadingBalances = false;
    });
  }

  getTransactions(): void {
    this.loadingTransactions = true;
    TransactionService.getAllTransactions().then((transactions) => {
      this.transactions = transactions;
      this.loadingTransactions = false;
      console.debug(this.transactions);
    });
  }

  round(price: number): string {
    return HelperService.formatPrice(price);
  }

  date(date: string): Date {
    return new Date(date);
  }
}
</script>

<style scoped lang="scss">
.admin {
  padding: 0 50px;
  &__label {
    margin-top: 50px;
  }
  &__table {
    display: grid;
    margin: 10px auto;
    &__header {
      display: grid;
      grid-template-columns: 150px 150px repeat(4, 1fr);
      grid-column-gap: 10px;
      padding-bottom: 10px;
      margin-bottom: 10px;
      border-bottom: 1px solid var(--light);
      &__cell {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
    &__body {
      &__row {
        display: grid;
        grid-template-columns: 150px 150px repeat(4, 1fr);
        grid-column-gap: 10px;
        &:not(:last-child) {
          margin-bottom: 10px;
        }
        &__cell {
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
      }
    }
  }
}
</style>
