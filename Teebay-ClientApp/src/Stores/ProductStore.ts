
import { action, observable } from "mobx";
import agent from "../Api/agent";
import { IProduct } from "../Models/Product";
import { RootStore } from "./RootStore";

export default class ProductStore{

    rootstore : RootStore;
    
    constructor(rootStore : RootStore){
        this.rootstore = rootStore;
    }

    @observable products : IProduct[] = []
    @observable soldProducts : IProduct[] = []
    @observable lentProducts : IProduct[] = []
    @observable borrowedProducts : IProduct[] = []

    @action getProducts = async () => {
       const products =  await agent.Products.productList();
        
       this.products = products;
       this.soldProducts = products.filter(x => x.status == "sold")
       this.borrowedProducts = products.filter(x => x.status == "rented")
       console.log(this.products)
    }
    @action addProduct = async (product : IProduct) => {
      
        console.log(product)
        // agent.Products.addProduct(product)
    }
}