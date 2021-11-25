import { createContext } from "react";
import ProductStore from "./ProductStore";
import UserStore from "./UserStore";

export class RootStore {
    userStore: UserStore;
    productStore : ProductStore;
    
    constructor() {
      this.userStore = new UserStore(this);
      this.productStore = new ProductStore(this);
    }
  }
  
  export const RootStoreContext = createContext(new RootStore());