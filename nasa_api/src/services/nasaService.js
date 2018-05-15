import Api from '../utils/api';

import { API_KEY } from '../utils/api.config.js'

class NasaService {

    static getApod() {
        console.log(API_KEY)
        return Api.get(`apod?api_key=${API_KEY}`);
    }    
}

export default NasaService;