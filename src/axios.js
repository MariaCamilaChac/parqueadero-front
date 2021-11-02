import axios from 'axios';

const customAxios = axios.create({
    baseURL: 'http://transacionales.pedi.re/api/',
    headers: {
        'Content-Type': 'application/json'
    },
})
export default customAxios;