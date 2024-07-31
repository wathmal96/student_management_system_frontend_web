import axios from "axios";

const token = localStorage.getItem('login')

const instance = axios.create({
    baseURL: 'https://test.acpt.lk/api',
    headers:{Authorization:`Bearer ${token}`}
  });

  export default instance;