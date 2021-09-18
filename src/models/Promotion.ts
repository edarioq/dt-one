import { Operator } from "./Operator";

export interface Promotion {
  id: number;
  title: string;
  description: string;
  terms: string;
  start_date: "2019-08-24T14:15:22Z";
  end_date: "2019-08-24T14:15:22Z";
  operator?: Operator;
  products?: {
    id: number;
    name: string;
    description: string;
    type: "FIXED_VALUE_RECHARGE";
  }[];
}
