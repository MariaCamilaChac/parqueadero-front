import axios from 'axios';

const customAxios = axios.create({
    baseURL: 'http://transacionales.pedi.re',
    headers: {
        'Content-Type': 'application/json',
        "Access-Control-Allow-Origin": "*"
    },
})
export default customAxios;