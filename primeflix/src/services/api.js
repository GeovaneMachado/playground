// Base URL: https://api.themoviedb.org/3/
// URL API: movie/now_playing?api_key=7a9429aff0a61b6aee27daf163193805&language=pt-BR

import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
});

const configGet = {
    params: {
        api_key: '7a9429aff0a61b6aee27daf163193805',
        language: 'pt-BR'
    },
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer' +
            ' eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3YTk0MjlhZmYwYTYxYjZhZWUyN2RhZjE2MzE5MzgwNSIsInN1YiI6IjY0ZTk0YWU0NTI1OGFlMDBlYWE0MzhlZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.kMhZICD9CvaneJr2zq5bwWoU-vRfe0Ruh5UcEcm36RI'
    }
}

export default api;
export {configGet};