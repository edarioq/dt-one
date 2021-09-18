export interface Balance {
  id: number;
  unit_type: 'CURRENCY';
  unit: string;
  available: number;
  holding: number;
  credit_limit: number;
}
