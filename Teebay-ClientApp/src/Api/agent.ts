import axios, { AxiosResponse } from "axios";
import { IProduct } from "../Models/Product";

axios.defaults.baseURL = "http://127.0.0.1:8000/teebay/";
// axios.defaults.baseURL = "https://localhost:5001/api";

// axios.interceptors.request.use(
//   (config) => {
//     const token = localStorage.getItem("jwt");
//     if (token) config.headers.Authorization = `Bearer ${token}`;
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

// axios.interceptors.response.use(undefined, (error) => {
//   if (error.message === "Network Error" && !error.response) {
//     toast.error("Network error -- make sure API server is running");
//     console.log(error);
//   }
//   const { status, data, config } = error.response;
//   if (status === 404) {
//     history.push("/notFoundeekdom");
//   }
//   if (
//     status === 400 &&
//     config.method === "get" &&
//     data.errors.hasOwnProperty("id")
//   ) {
//     history.push("/notFound");
//   }
//   if (status === 500) {
//     toast.error("Server Error Check the terminal for more info");
//   }
//   if (status === 401) {
//     toast.error(data.errors.error);
//   }
//   if (status === 409) {
//     console.log(data);
//   }
//   throw error.response;
// });

const responseBody = (response: AxiosResponse) => response.data;

const requests = {
  get: (url: string) => axios.get(url).then(responseBody),
  post: (url: string, body: {}) => axios.post(url, body).then(responseBody),
  put: (url: string, body: {}) => axios.put(url, body).then(responseBody),
  del: (url: string) => axios.delete(url).then(responseBody),
};





// const User = {
//   login: (body: IUserLogin) => requests.post("/user/login", body),
//   loginWithOtp: (body: IUserLoginWithOtp): Promise<IUser> =>
//     requests.post("/user/loginWithOtp", body),
//   currentUser: (): Promise<IUser> => requests.get("/user"),
//   changePassword: (body: IChangePassword) =>
//     requests.post("/user/changePassword", body),
// };

const Products = {
  productList: (): Promise<IProduct[]> => requests.get("/")
};

const agent = { Products };

export default agent;