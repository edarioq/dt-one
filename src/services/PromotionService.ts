import http from "@/Api";
import { Promotion } from "@/models";

class PromotionService {
  getAllProducts(): Promise<Promotion[]> {
    return http.get("/v1/promotions");
  }

  getPromotionById(id: string): Promise<Promotion> {
    return http.get(`v1/promotions/${id}`);
  }
}

export default new PromotionService();