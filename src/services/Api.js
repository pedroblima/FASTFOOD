import axios from 'axios';

const Api = axios.create({
    baseURL: "http://192.168.18.19:3000"
})



export default Api;
