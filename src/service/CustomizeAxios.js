import axios from "axios";

// let token = localStorage.getItem("token");
// console.log('token: ' ,token);

const createAxiosInstance = () => {

  const instance = axios.create({
    baseURL: 'http://localhost:8080',
    // headers: {
    //   'Authorization': `Bearer ${token}`
    // }
  });

  instance.interceptors.response.use(
    function(response) {
      return response.data;
    },
    function(error) {
      return Promise.reject(error);
    }
  );

  return instance;
};

const axiosInstance = createAxiosInstance();

export default axiosInstance;
