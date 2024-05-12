import { createContext } from "react";
import CommonStore from "./CommonStore";
import ProductStore from "./ProductStore";
import UserStore from "./UserStore";

export class RootStore {
  userStore: UserStore;
  productStore: ProductStore;
  commonStore: CommonStore;

  constructor() {
    this.userStore = new UserStore(this);
    this.productStore = new ProductStore(this);
    this.commonStore = new CommonStore(this);
  }
}

export const RootStoreContext = createContext(new RootStore());
