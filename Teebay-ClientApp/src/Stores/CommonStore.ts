import { action, observable } from "mobx";
import { RootStore } from "./RootStore";

export default class CommonStore {
  rootStore: RootStore;

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
  }

  @observable gloabalLoading: boolean = false;

  @action setGlobalLoading = (flag: boolean) => {
    this.gloabalLoading = flag;
  };
}
