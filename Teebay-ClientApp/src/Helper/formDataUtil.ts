import { IProduct } from "../Models/Product";



export const createProductFormData = (data : IProduct) => {
    let formData = new FormData();

    formData.append("title", data.title.toString());
    formData.append("description", data.description.toString());
    formData.append("price", data.price.toString());
    formData.append("rentPrice", data.rentPrice.toString());
    formData.append("uploadedby", data.uploadedby.toString());
    formData.append("status", data.status.toString());
    data.category.map((c) => {
        formData.append("category",c.toString());
    }) 
    
    return formData;
}