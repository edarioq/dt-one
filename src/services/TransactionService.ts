import http from '@/Api';
import { Transaction } from '@models';

class TransactionService {
  getAllTransactions(): Promise<Transaction[]> {
    return http.get('/v1/transactions').then((res) => res.data);
  }

  getTransactionById(id: string): Promise<Transaction> {
    return http.get(`v1/transaction/${id}`);
  }

  createTransaction(payload: any): Promise<any> {
    return http.post(`v1/async/transactions`, payload);
  }
}

export default new TransactionService();
