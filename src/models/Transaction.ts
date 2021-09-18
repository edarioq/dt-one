export interface Transaction {
  id: number;
  external_id: string;
  creation_date: '2019-08-24T14:15:22Z';
  confirmation_expiration_date: '2019-08-24T14:15:22Z';
  confirmation_date: '2019-08-24T14:15:22Z';
  status: {
    id: number;
    message: string;
    class: {
      id: number;
      message: string;
    };
  };
  operator_reference: string;
  pin: {
    code: string;
    serial: string;
  };
  product: {
    id: number;
    name: string;
    description: string;
    tags: [string];
    service: {
      id: 1;
      name: string;
    };
    operator: {
      id: 1;
      name: string;
      country: {
        name: string;
        iso_code: string;
        regions: [
          {
            name: string;
            code: string;
          }
        ];
      };
      regions: [
        {
          name: string;
          code: string;
        }
      ];
    };
    regions: [
      {
        name: string;
        code: string;
      }
    ];
  };
  prices: {
    wholesale: {
      unit_type: 'CURRENCY';
      unit: string;
      amount: number;
      fee: number;
    };
    retail: {
      unit_type: 'CURRENCY';
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
      type: 'TALKTIME';
      unit_type: 'TIME';
      unit: string;
      amount: {
        base: number;
        promotion_bonus: number;
        total_excluding_tax: number;
      };
      additional_information: string;
    }
  ];
  promotions: [
    {
      id: number;
      title: string;
      description: string;
      terms: string;
      start_date: '2019-08-24T14:15:22Z';
      end_date: '2019-08-24T14:15:22Z';
    }
  ];
  requested_values: {
    source: {
      unit_type: 'CURRENCY';
      unit: string;
      amount: number;
    };
    destination: {
      unit_type: 'CURRENCY';
      unit: string;
      amount: number;
    };
  };
  adjusted_values: {
    source: {
      unit_type: 'CURRENCY';
      unit: string;
      amount: number;
    };
    destination: {
      unit_type: 'CURRENCY';
      unit: string;
      amount: number;
    };
  };
  sender: {
    last_name: string;
    first_name: string;
    middle_name: string;
    nationality_country_iso_code: string;
    mobile_number: string;
    email: string;
  };
  beneficiary: {
    last_name: string;
    first_name: string;
    middle_name: string;
    nationality_country_iso_code: string;
    mobile_number: string;
    email: string;
  };
  debit_party_identifier: {
    mobile_number: string;
    account_number: string;
    account_qualifier: string;
  };
  credit_party_identifier: {
    mobile_number: string;
    account_number: string;
    account_qualifier: string;
  };
  statement_identifier: {
    reference: string;
    due_date: '2019-08-24';
  };
  callback_url: string;
}
