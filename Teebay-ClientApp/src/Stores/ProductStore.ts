
import { action, makeObservable, observable, runInAction } from "mobx";
import agent from "../Api/agent";
import { IBuyHistoryRequest, IBuyProduct } from "../Models/Buy";
import { IProduct, IProductRequest, IProductSearch } from "../Models/Product";
import { IRentHistoryRequest, IRentProduct } from "../Models/Rent";
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
        const request: IProductRequest = {
            uploadedby: this.rootstore.userStore.currentUser!.id
        }
        const products = await agent.Products.myProducts(request);

        runInAction(() => {
            this.myProducts = products.filter(x => x.status == "unsold");
            
            this.soldProducts = products.filter(x => x.status == "sold")
            this.lentProducts = products.filter(x => x.status == "rented")

        })


    }
    @action getProductDetails = async (pk: string) => {
        const product = await agent.Products.productDetails(pk);
        runInAction(() => {
            this.currentProduct = product;
            console.log(this.currentProduct)

        })


    }
    @action setCurrentProduct = async (pk: Number) => {
        const product = this.products.find(x => x.pk == pk)
        this.currentProduct = product!;
        console.log(this.currentProduct);

    }
    @action addProduct = async (product: IProduct) => {

        product.uploadedby = this.rootstore.userStore.currentUser?.id!;
        product.status = "unsold";
        await agent.Products.addProduct(product)
        runInAction(() => {
            this.myProducts.push(product);
        })

    }
    @action deleteProduct = async (pk: number) => {
        await agent.Products.deleteProduct(pk)

        runInAction(() => {
            this.myProducts = this.myProducts.filter(x => x.pk !== pk);
        })
    }
    @action updateProduct = async (product: IProduct) => {
        await agent.Products.updateProduct(product);
        runInAction(() => {
            this.myProducts = this.myProducts.filter(x => x.pk !== product.pk);
            this.myProducts.push(product);
        })
    }
    @action emptyCurrentProduct = () => {
        this.currentProduct = null;
    }
    @action searchProducts = async (param: IProductSearch) => {
        let products: IProduct[] = [];

        if (this.products.length < 1) products = await agent.Products.productList();

        else products = this.products;

        runInAction(() => {
            this.searchResult = products.filter(x => (x.status !== "sold" && x.uploadedby !== this.rootstore.userStore.currentUser!.id));
            console.log(this.searchResult)
            if (param) {
                if (param.title) {
                    this.searchResult = this.searchResult.filter(x => x.title == param.title)
                    console.log(this.searchResult)
                }
                if (param.startPrice && param.endPrice && param.type == "buy") this.searchResult = this.searchResult.filter(x => (x.price >= param.startPrice && x.price <= param.endPrice))
                else if(param.startPrice && param.endPrice && param.type == "rent") this.searchResult = this.searchResult.filter(x => (x.rentPrice >= param.startPrice && x.price <= param.endPrice))
                if (param.type) {
                    this.action = param.type
                    if (param.type == "buy") this.searchResult.filter(x => x.status !== "rented");
                }
                if(param.categories)
                {
                    this.searchResult = this.searchResult.filter(x => x.category.filter(y => y === param.categories))
                    console.log(this.searchResult)
                }
            }
        })
    }
    @action setDashProducts = () => {
        this.getBuyHistory();
        this.getRentHistory();
    }

    @action buyProduct = async (product: IProduct, currentUserId: number, history: any, toast: any) => {
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
    @action rentProduct = async (rentBody: IRentProduct, toast: any, history: any) => {
        console.log(this.rootstore.userStore.currentUser!.id)
        rentBody.renter = this.rootstore.userStore.currentUser!.id;
        rentBody.product = this.currentProduct!.pk;
        console.log(rentBody)
        try {
            await agent.Products.rentProduct(rentBody);
            runInAction(() => {
                this.borrowedProducts.push(this.currentProduct!);
                toast.success("Product Rent Successful")
                history.push("/productdash")
            })
        } catch (e: any) {
            console.log(e.response)
        }
    }
     getBuyHistory = async () => {
        const request: IBuyHistoryRequest = {
            buyer: this.rootstore.userStore.currentUser!.id
        }
        try {
            const buyhistory = await agent.Products.mybuyhistory(request)
            console.log(buyhistory)
            runInAction(() => {
                buyhistory.forEach((buy) => {
                    this.boughtProducts.push(buy.product);
                })

            })
        } catch (e: any) {
            console.log(e.response)
        }
    }
    @action clearAll = () => {
        this.myProducts = [];
        this.borrowedProducts = [];
        this.currentProduct = null;
        this.boughtProducts = [];
        this.lentProducts = [];
        this.productTobeBought = [];
        this.soldProducts = [];
        this.action = "";
        this.searchResult = [];
    }
     getRentHistory = async () => {
        const request: IRentHistoryRequest = {
            renter: this.rootstore.userStore.currentUser!.id
        }
        try {
            const rentHistory = await agent.Products.myrenthistory(request)
            console.log(rentHistory)
            runInAction(() => {
                rentHistory.forEach((rent) => {
                    this.borrowedProducts.push(rent.product);
                })

            })
        } catch (e: any) {
            console.log(e.response)
        }
    }
}