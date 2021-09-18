import http from '@/Api';
import { Transaction } from '@models';

class TransactionService {
  getAllTransactions(): Promise<Transaction[]> {
    return http.get('/v1/transactions');
  }

  getTransactionById(id: string): Promise<Transaction> {
    return http.get(`v1/transaction/${id}`);
  }
}

export default new TransactionService();
