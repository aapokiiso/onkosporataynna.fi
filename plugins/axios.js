import axios from 'axios';

export default axios.create({
    baseURL: process.env.apiBaseUrl,
});
