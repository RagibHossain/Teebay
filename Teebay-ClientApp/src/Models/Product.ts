export interface IProduct{
    pk : number;
    title : string;
    description : string;
    price : number;
    rentPrice : number;
    uploadedby:number;
    dateposted : Date;
    status : string;
    category: number[];
}

export interface ICategory{
    name : string;
}
export interface IProductSearch{
    title : string;
    startPrice : number;
    endPrice : number;
    categories : number;
    type : string;
}
export interface IBuyProduct{
    buyer:number;
    product:number;
}
export interface IRentProduct{
    renter : number;
    product : number;
    rentstart: Date;
    rentend : Date;
}