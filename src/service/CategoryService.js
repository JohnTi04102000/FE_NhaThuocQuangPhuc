import axios from "./CustomizeAxios";

const getAllCategory = () => {
    return axios.get('/categories');
}

const getCategoryById = (id_Category) => {
    return axios.get(`/get-category/${id_Category}`);
}

const updateCategoryById = (id_Category, data) => {
    return axios.patch(`/update-category/${id_Category}`, {name: data});
}

export{getAllCategory, getCategoryById, updateCategoryById}