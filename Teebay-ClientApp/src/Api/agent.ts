import axios, { AxiosResponse } from "axios";
import { toast } from "react-toastify";
import { createProductFormData } from "../Helper/formDataUtil";
import { IBuyProduct, IProduct, IRentProduct } from "../Models/Product";
import { IUser, IUserLogin } from "../Models/User";

axios.defaults.baseURL = "http://127.0.0.1:8000/api/";


axios.interceptors.response.use(undefined, (error) => {
  if (error.message === "Network Error" && !error.response) {
    toast.error("Network error -- make sure API server is running");
    console.log(error);
  }

  const { status, data, config } = error.response;

  if (error.response.status === 404) {
     toast.error(error.response.data)
  }
  else if (error.response.status === 400) {
    toast.error(error.response.data)
  }
  else if (error.response.status === 500) {
    toast.error(error.response.data)
  }
  else if (error.response.status === 401) {
    toast.error(error.response.data)
  }
  else if (error.response.status === 417) {
    toast.error(error.response.data)
  }
  else throw error.response;
});

const responseBody = (response: AxiosResponse) => response.data;

const requests = {
  get: (url: string) => axios.get(url).then(responseBody),
  post: (url: string, body: {}) => axios.post(url, body).then(responseBody),
  put: (url: string, body: {}) => axios.put(url, body).then(responseBody),
  del: (url: string) => axios.delete(url).then(responseBody),
};

const form = {
  productPostForm: (url: string, data: IProduct) => {
    const formData = createProductFormData(data);
    return axios
      .post(url, formData, {
        headers: { "Content-type": "multipart/form-data" },
      })
      .then(responseBody);
  },
  productPutForm: (url: string, data: IProduct) => {
    const formData = createProductFormData(data);
    return axios
      .put(url, formData, {
        headers: { "Content-type": "multipart/form-data" },
      })
      .then(responseBody);
  },

};

const Products = {
  productList: (): Promise<IProduct[]> => requests.get("/"),
  productDetails : (pk : string):Promise<IProduct> => requests.get(`${pk}`),
  addProduct : (product : IProduct) => form.productPostForm("create/",product),
  updateProduct : (product : IProduct) => form.productPutForm(`update/${product.pk}/`,product),
  deleteProduct : (pk : number) => requests.del(`delete/${pk}/`),
  buyProduct : (data : IBuyProduct) => requests.post("buy/",data),
  rentProduct : (data : IRentProduct) => requests.post("rent/",data)

};

const User = {
  userList: (): Promise<IUser[]> => requests.get("users/"),
  login: (data : IUserLogin): Promise<IUser> => requests.post("login/",data),
  register: (body : IUser): Promise<IUser[]> => requests.post("register/",body)
}

const agent = { Products,User };

export default agent;