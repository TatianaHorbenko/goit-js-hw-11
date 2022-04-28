import axios from 'axios';

const API_KEY = '26995706-055ab01891f8792046b22d312';
const BASE_URL = 'https://pixabay.com/api/'


export default class ImagesApiFetch {
    constructor() {
        this.searchQuery = '';
        this.page = 1;
    }
    
    async fetchPixabayImages() {
        const url = `${BASE_URL}?key=${API_KEY}&q=${this.searchQuery}&image_type=photo&orientation=horizontal&safesearch=true&per_page=40&page=${this.page}`

        const response = await axios.get(url);
        const data = await (response.data);
        return data;
    }

    incrementPage() {
        this.page += 1;
    }

    resetPage() {
        this.page = 1;
    }

    get query() {
        return this.searchQuery;
    }

    set query(newQwery) {
        this.searchQuery = newQwery;
    }
};


