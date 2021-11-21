import { action, makeObservable, observable } from "mobx";
import { RootStore } from "./RootStore";

export default class UserStore{

    rootStore : RootStore;

    constructor(rootStore : RootStore){
        this.rootStore = rootStore;
        makeObservable(this);
    }

    @observable loggedIn : boolean = false;

    @action setLoggedIn = () => {
        this.loggedIn = !this.loggedIn;
    }
}