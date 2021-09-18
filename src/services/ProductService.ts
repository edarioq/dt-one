import http from '@/Api';
import { Product } from '@models';

class ProductService {
  getAllProducts(): Promise<Product[]> {
    return http.get('/v1/products');
  }

  getProductById(id: string): Promise<Product> {
    return http.get(`/v1/products/${id}`);
  }
}

export default new ProductService();
