import http from "@/Api";
import { Transaction } from "@/models";

class TransactionService {
  getAllProducts(): Promise<Transaction[]> {
    return http.get("/v1/transactions");
  }
}

export default new TransactionService();
