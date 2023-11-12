import axios from "./CustomizeAxios";

const getAllOrders = () => {
    return axios.get('/orders');
}


export{getAllOrders}