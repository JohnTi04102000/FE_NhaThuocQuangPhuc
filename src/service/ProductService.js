import axios from "./CustomizeAxios";

const getAllProduct = () => {
    return axios.get('/products');
}

const getProductById = (id_Product) => {
    return axios.get(`/product/${id_Product}`);
}

const getProductByCategory = (id_category) => {
    return axios.get(`/category/${id_category}`);
}

export{getAllProduct, getProductById, getProductByCategory}