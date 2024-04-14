import axios from 'axios';

//URL API: https://api.themoviedb.org/3/movie/now_playing?api_key=817d12607bc5e2e53f4382eceb8654b1&language=pt-br

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3'
});

export default api;
