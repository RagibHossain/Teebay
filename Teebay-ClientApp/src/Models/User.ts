
export interface IUserLogin {

    email: string;
    password: string;

}
export interface IUser {
    id: number;
    firstName: string;
    lastName: string;
    address: string;
    email: string;
    phoneNumber: string;
    password: string;
}
export interface IUserRegister extends IUser {
    confirmPassword: string;
}