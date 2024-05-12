import { action, makeObservable, observable, runInAction } from "mobx";
import agent from "../Api/agent";
import { IUser, IUserRegister } from "../Models/User";
import { RootStore } from "./RootStore";

export default class UserStore {
  rootStore: RootStore;

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
    makeObservable(this);
  }

  @observable loggedIn: boolean = false;
  @observable currentUser: IUser | null = null;

  @action initUser = () => {
    const user = localStorage.getItem("user");
    if (user) {
      this.currentUser = JSON.parse(user);
      this.setLoggedIn(true);
    }
  };
  @action register = async (user: IUserRegister, toast: any, history: any) => {
    try {
      await agent.User.register(user);
      toast.success("User successfully registered");
      history.push("/");
    } catch (e: any) {
      console.log(e.response);
    }
  };
  @action updateProfile = async (user: IUser, toast: any) => {
    try {
      user.id = this.currentUser!.id;
      await agent.User.updateProfile(user);
      this.currentUser = user;
      toast.success("Profile Updated Successfully");
    } catch (e: any) {
      console.log(e);
    }
  };
  @action signIn = async (user: any) => {
    try {
      const inUser = await agent.User.login(user);
      this.currentUser = inUser;
      this.saveUser();
      this.setLoggedIn(true);
    } catch (e: any) {
      console.log(e.response);
    }
  };
  @action setLoggedIn = (status: boolean) => {
    this.loggedIn = status;
  };
  saveUser = () => {
    localStorage.setItem("user", JSON.stringify(this.currentUser));
    setTimeout(() => {
      this.emptyUser();
    }, 3000000);
  };
  emptyUser = () => {
    this.currentUser = null;

    localStorage.removeItem("user");
  };
  @action logout = () => {
    this.rootStore.commonStore.setGlobalLoading(true);
    this.emptyUser();
    this.rootStore.productStore.clearAll();
    this.setLoggedIn(false);
    this.rootStore.commonStore.setGlobalLoading(false);
  };
}
