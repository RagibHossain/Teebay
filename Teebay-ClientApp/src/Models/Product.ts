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
export interface IProductRequest{
    uploadedby : number;
}


