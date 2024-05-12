import { IProduct } from "./Product";

export interface IRentProduct {
  renter: number;
  product: number;
  rentstart: Date;
  rentend: Date;
}
export interface IRentHistory {
  pk: number;
  product: IProduct;
  purchasedate: Date;
}
export interface IRentHistoryRequest {
  renter: number;
}
