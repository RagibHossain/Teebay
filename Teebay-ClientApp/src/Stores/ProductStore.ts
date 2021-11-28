
import { action, makeObservable, observable, runInAction } from "mobx";
import agent from "../Api/agent";
import { IBuyProduct, IProduct, IProductSearch, IRentProduct } from "../Models/Product";
import { RootStore } from "./RootStore";

export default class ProductStore {

    rootstore: RootStore;

    constructor(rootStore: RootStore) {
        this.rootstore = rootStore;
        makeObservable(this)
    }

    @observable products: IProduct[] = []
    @observable myProducts: IProduct[] = []
    @observable boughtProducts: IProduct[] = []
    @observable soldProducts: IProduct[] = []
    @observable lentProducts: IProduct[] = []
    @observable borrowedProducts: IProduct[] = []
    @observable currentProduct: IProduct | null = null;
    @observable productTobeBought: IProduct[] = []
    @observable searchResult: IProduct[] = []
    @observable action: string = ""

    @action getProducts = async () => {
        const products = await agent.Products.productList();

        runInAction(() => {
            this.products = products;
            console.log(this.rootstore.userStore.currentUser);
            this.myProducts = products.filter(x => (x.uploadedby == this.rootstore.userStore.currentUser?.id && x.status == "unsold"))
            this.productTobeBought = products.filter(x => (x.status == "unsold" && x.uploadedby !== this.rootstore.userStore.currentUser?.id))
            this.soldProducts = this.myProducts.filter(x => x.status == "sold")
            this.borrowedProducts = this.myProducts.filter(x => x.status == "rented")
            console.log(this.productTobeBought)
        })


    }
    @action getProductDetails = async (pk: string) => {
        const product = await agent.Products.productDetails(pk);

        runInAction(() => {
            this.currentProduct = product;

        })


    }
    @action setCurrentProduct = async (pk: Number) => {
        const product = this.products.find(x => x.pk == pk)
        this.currentProduct = product!;
        console.log(this.currentProduct);

    }
    @action addProduct = async (product: IProduct) => {
        console.log(product)
        product.uploadedby = this.rootstore.userStore.currentUser?.id!;
        product.status = "unsold";
        await agent.Products.addProduct(product)
        runInAction(() => {
            this.myProducts.push(product);
        })

    }
    @action deleteProduct = async (pk: number) => {
        console.log("clicked")
        await agent.Products.deleteProduct(pk)

        runInAction(() => {
            this.myProducts = this.myProducts.filter(x => x.pk !== pk);
        })


    }
    @action updateProduct = async (product: IProduct) => {
        console.log(product)
        product.status = "unsold";
        await agent.Products.updateProduct(product);
        console.log(product)
        runInAction(() => {
            this.myProducts = this.myProducts.filter(x => x.pk !== product.pk);
            this.myProducts.push(product);
        })
    }
    @action emptyCurrentProduct = () => {
        this.currentProduct = null;
    }
    @action searchProducts = (param: IProductSearch) => {
        this.searchResult = this.productTobeBought
        console.log(this.searchResult)
        if (param.title) {
            this.searchResult = this.searchResult.filter(x => x.title == param.title)
            console.log(this.searchResult)
        }
        if (param.startPrice && param.endPrice) this.searchResult = this.searchResult.filter(x => (x.price >= param.startPrice && x.price <= param.endPrice))
        if (param.type) this.action = param.type
        console.log(this.searchResult)
    }
    @action buyProduct = async (product: IProduct, currentUserId: number, history: any,toast : any) => {
        const buyParam: IBuyProduct = {
            product: product.pk,
            buyer: currentUserId
        }
        console.log(buyParam)
        try {
            await agent.Products.buyProduct(buyParam);
            runInAction(() => {
                this.boughtProducts.push(product);
                toast.success("Product Successfully Bought")
                history.push("/productdash")
            })
        } catch (e: any) {
            console.log(e.response)
        }
    }
    @action rentProduct = async (rentBody: IRentProduct, toast : any) => {
        console.log(this.rootstore.userStore.currentUser!.id)
        rentBody.renter = this.rootstore.userStore.currentUser!.id;
        rentBody.product = this.currentProduct!.pk;
        console.log(rentBody)
        try {
            await agent.Products.rentProduct(rentBody);
            runInAction(() => {
                this.borrowedProducts.push(this.currentProduct!);
                toast.success("Product Rent Successful")
            })
        } catch (e: any) {
            console.log(e.response)
        }
    }
}