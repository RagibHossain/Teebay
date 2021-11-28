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
        const users = await agent.User.userList();

        runInAction(() => {
            const currentuser = users.filter(x => x.email == user.email)

            if (currentuser.length > 0) {
                if (currentuser[0].password == user.password) {
                    console.log(currentuser);
                    this.currentUser = currentuser[0];
                    this.saveUser();
                    this.setLoggedIn(true);

                    //   toast.success("Success fully logged in")
                }
                else {
                    console.log("fak");
                     this.logout();
                }
            }
        })

    }
    @action setLoggedIn = (status: boolean) => {
        this.loggedIn = status;
    }
    saveUser = () => {
        localStorage.setItem("user", JSON.stringify(this.currentUser));
        setTimeout(() => {
            this.emptyCart();
        }, 300000); //300000
    };
    emptyCart = () => {
        this.currentUser = null;

        localStorage.removeItem("user");
    };
    @action logout = () => {
        this.emptyCart();
        this.currentUser = null;
        this.setLoggedIn(false)
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