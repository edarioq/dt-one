export interface Operator {
  id: number;
  name: string;
  country: {
    name: string;
    iso_code: string;
    regions: {
      name: string;
      code: string;
    }[];
  };
  regions?: {
    name: string;
    code: string;
  }[];
}
