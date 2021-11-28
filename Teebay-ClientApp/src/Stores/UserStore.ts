import { action, makeObservable, observable, runInAction } from "mobx";
import agent from "../Api/agent";
import { IUser } from "../Models/User";
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

    }

    @action signIn = async (user: any) => {

        try{
            const inUser = await agent.User.login(user);
            this.currentUser = inUser
            this.saveUser()
            this.setLoggedIn(true)
            // history.push("/products")
          
        }catch(e : any){
            console.log(e.response)
        }


    }
    @action setLoggedIn = (status: boolean) => {
        this.loggedIn = status;
    }
    saveUser = () => {
        localStorage.setItem("user", JSON.stringify(this.currentUser));
        setTimeout(() => {
            this.emptyUser();
        }, 300000); //300000
    };
    emptyUser = () => {
        this.currentUser = null;

        localStorage.removeItem("user");
    };
    @action logout = () => {
        this.rootStore.commonStore.setGlobalLoading(true);
        this.emptyUser();
        this.currentUser = null;
        this.setLoggedIn(false)
        this.rootStore.commonStore.setGlobalLoading(false);
    }
}


// @action login = async (user : IUserLogin) => {

//     const users = await agent.User.userList();

//     const currentuser = users.filter(x => x.email == user.email)

//     if(currentuser.length >0) {
//       if(currentuser[0].password == user.password) 
//       {
//           console.log(currentuser);
//           toast.success("Success fully logged in")
//       }
//       else toast.error("Credentials Incorrect")
//     }   

// }