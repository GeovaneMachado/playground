// Base URL: https://api.themoviedb.org/3/
// URL API: movie/now_playing?api_key=7a9429aff0a61b6aee27daf163193805&language=pt-BR

import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
});

export default api;