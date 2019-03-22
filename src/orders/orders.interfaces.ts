export interface Order {
  id: number;
  name: string;
  phone: number;
  address: string;
  country: string;
  ntn: number;

  // id: number;
  // name: string;
  // populationDensity: number;
}

export interface GetOrderResult {
  order: Order;
}
