import { Operator } from "./Operator";
import { Promotion } from "./Promotion";

export interface Product {
  id: number;
  name: string;
  description: string;
  tags: string[];
  service: {
    id: number;
    name: string;
  };
  operator: Operator;
  regions: [
    {
      name: string;
      code: string;
    }
  ];
  type: "FIXED_VALUE_RECHARGE";
  validity: {
    unit: "HOUR";
    quantity: number;
  };
  required_debit_party_identifier_fields: string[][];
  required_credit_party_identifier_fields: string[][];
  required_sender_fields: string[][];
  required_beneficiary_fields: string[][];
  required_statement_identifier_fields: string[][];
  availability_zones: "DOMESTIC"[];
  source: {
    unit_type: "CURRENCY";
    unit: string;
    amount: number;
  };
  destination: {
    unit_type: "CURRENCY";
    unit: string;
    amount: number;
  };
  prices: {
    wholesale: {
      unit_type: "CURRENCY";
      unit: string;
      amount: number;
      fee: number;
    };
    retail: {
      unit_type: "CURRENCY";
      unit: string;
      amount: number;
      fee: number;
    };
  };
  rates: {
    base: number;
    wholesale: number;
    retail: number;
  };
  benefits: [
    {
      type: "TALKTIME";
      unit_type: "TIME";
      unit: string;
      amount: {
        base: number;
        promotion_bonus: number;
        total_excluding_tax: number;
      };
      additional_information: string;
    }
  ];
  promotions: Promotion[];
}
