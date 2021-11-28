
export interface IUserLogin {

    email: string;
    password: string;

}
export interface IUser {
    id: number;
    firstname: string;
    lastname: string;
    address: string;
    email: string;
    phonenumber: string;
    password: string;
}
export interface IUserRegister extends IUser {
    confirmPassword: string;
}