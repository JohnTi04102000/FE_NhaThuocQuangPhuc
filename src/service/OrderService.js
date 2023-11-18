import axios from "./CustomizeAxios";

const getAllOrders = () => {
    return axios.get('/orders');
}

const getAllOrderAccept = () => {
    return axios.get('/order-accept');
}

const getAllOrderNotAccept = () => {
    return axios.get('/order-notAccept');
}

const getAllOrderComplete = () => {
    return axios.get('/order-complete');
}

const getUserById = (id_User) => {
    return axios.get(`/getUser/${id_User}`);
}

const updateOrderAccept = (id_User, id_Order) => {
    return axios.patch("/order-accept", {id_User, id_Order});
}

const updateOrderComplete = (id_User, id_Order) => {
    return axios.patch("/order-complete", {id_User, id_Order});
}

export{getAllOrders, getAllOrderAccept, getAllOrderNotAccept, getAllOrderComplete, getUserById, updateOrderAccept, updateOrderComplete}