import { IProduct } from "./Product";

export interface IBuyHistory{
    pk : number;
    product : IProduct;
    purchasedate : Date;
}
export interface IBuyProduct{
    buyer:number;
    product:number;
}
export interface IBuyHistoryRequest{
    buyer : number;
}