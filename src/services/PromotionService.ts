import http from '@/Api';
import { Promotion } from '@models';

class PromotionService {
  getAllPromotions(): Promise<Promotion[]> {
    return http.get('/v1/promotions').then((res) => res.data);
  }

  getPromotionById(id: string): Promise<Promotion> {
    return http.get(`/v1/promotions/${id}`);
  }
}

export default new PromotionService();
