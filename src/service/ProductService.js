import axios from "./CustomizeAxios";

const getAllProduct = () => {
    return axios.get('/products');
}

const getProductById = (id_Product) => {
    return axios.get(`/product/${id_Product}`);
}

const getProductBySearch = (value) => {
    return axios.get(`/search-product/${value}`);
}

const getProductByCategory = (id_category) => {
    return axios.get(`/category/${id_category}`);
}

const createProduct = (data) => {
    return axios.post("/create-product", data)
}

const uploadFile = (data_file) =>{
    console.log(data_file);
    return axios.post("/upload-image", data_file)
}

const updateProductByID = (id_product, data) => {
    return axios.patch(`/update-product/${id_product}`, {data});
}

const deleteProductByID = (id) => {
    return axios.delete(`/delete-product`, {id});
}

export{getAllProduct, getProductById, getProductByCategory, updateProductByID, deleteProductByID, createProduct, uploadFile, getProductBySearch}