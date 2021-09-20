import http from '@/Api';
import { Transaction, AsyncTransaction } from '@models';

class TransactionService {
  getAllTransactions(): Promise<Transaction[]> {
    return http.get('/v1/transactions').then((res) => res.data);
  }

  getTransactionById(id: string): Promise<Transaction> {
    return http.get(`v1/transaction/${id}`);
  }

  createTransaction(payload: AsyncTransaction): Promise<Transaction> {
    return http.post(`v1/async/transactions`, payload).then((res) => res.data);
  }
}

export default new TransactionService();
