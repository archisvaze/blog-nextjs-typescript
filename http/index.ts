import axios from 'axios';

const api = axios.create({
    baseURL: "http://localhost:8000",
    headers: {
        Authorization: `Bearer 2f6047c849176b2920ee995121d095c7ce3449e105007733ffc9b7228f143c13278444a4fd24d8c6b0ed025a52affebb8ebd95c9d3326d8438f88182dd9f80584ba3a36925f7376546f77d20082d09c6390740bafb407340b7106b068d74b0c3eeb5cd2ecf0c625d09a270f0a293fa7f404f4766de1e9eb907fce97bd1c0b0a0`,
    },
});

// categories

export const fetchCategories = async () => api.get('/categories')


// Articles

export const fetchArticles = async (queryString: string) => api.get(`/articles?${queryString}`)


export const fetchArticle = async (queryString: string) => api.get(`/articles?${queryString}`)