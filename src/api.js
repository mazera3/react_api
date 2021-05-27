import axios from 'axios';

const urlb = 'http://api.tvmaze.com/search/shows?q=';

const api = axios.create({
    baseURL: urlb
});

export default api;