import http from '@/Api';
import { Balance } from '@/models';

class BalanceService {
  getAllBalances(): Promise<Balance[]> {
    return http.get('/v1/balances');
  }
}

export default new BalanceService();
