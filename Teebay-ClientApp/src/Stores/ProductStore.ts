
import { action, makeObservable, observable, runInAction } from "mobx";
import agent from "../Api/agent";
import { IProduct } from "../Models/Product";
import { RootStore } from "./RootStore";

export default class ProductStore {

    rootstore: RootStore;

    constructor(rootStore: RootStore) {
        this.rootstore = rootStore;
        makeObservable(this)
    }

    @observable products: IProduct[] = []
    @observable myProducts : IProduct[] = []
    @observable soldProducts: IProduct[] = []
    @observable lentProducts: IProduct[] = []
    @observable borrowedProducts: IProduct[] = []
    @observable currentProduct : IProduct | null= null;
    @observable productTobeBought : IProduct[] = [] 
    @observable searchResult : IProduct[] = []

    @action getProducts = async () => {
        const products = await agent.Products.productList();

        runInAction(() => {
            this.products = products;
            
            this.myProducts = products.filter(x => x.uploadedby == this.rootstore.userStore.currentUser?.pk)
            this.productTobeBought = products.filter( x => (x.status == "unsold" && x.uploadedby!==this.rootstore.userStore.currentUser?.pk) )
            this.soldProducts = this.myProducts.filter(x => x.status == "sold")
            this.borrowedProducts = this.myProducts.filter(x => x.status == "rented")
        })


    }
    @action getProductDetails = async (pk : string) => {
        const product = await agent.Products.productDetails(pk);

        runInAction(() => {
            this.currentProduct = product;

        })


    }
    @action setCurrentProduct = async (pk :Number) => {
        const product = this.products.find(x => x.pk == pk)
        this.currentProduct = product!;
        console.log(this.currentProduct);

    }
    @action addProduct = async (product: IProduct) => {
        console.log(product)
        product.uploadedby = this.rootstore.userStore.currentUser?.pk!;
        product.status = "unsold";
       await agent.Products.addProduct(product)
       runInAction(() => {
           this.products.push(product);
       })
        
    }
    @action deleteProduct = async (pk: number) => {
        console.log("clicked")
        await agent.Products.deleteProduct(pk)

        runInAction(() => {
           this.products =  this.products.filter(x => x.pk !== pk);
        })


    }
    @action updateProduct = async (product : IProduct) => {
        console.log(product)
        product.status = "unsold";
       await agent.Products.updateProduct(product);
       console.log(product)
       runInAction(() => {
        this.products =  this.products.filter(x => x.pk !== product.pk);
        this.products.push(product);
       })
    } 
    @action emptyCurrentProduct = () => {
        this.currentProduct = null;
    }
    @action search = () => {
        
    }
}