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


export{getAllOrders, getAllOrderAccept, getAllOrderNotAccept, getAllOrderComplete}