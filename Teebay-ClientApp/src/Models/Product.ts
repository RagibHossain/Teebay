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