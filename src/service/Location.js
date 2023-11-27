import axios from "axios";

const getProvinces = () => {
    return axios.get("https://provinces.open-api.vn/api/?depth=3");
}

export {getProvinces}