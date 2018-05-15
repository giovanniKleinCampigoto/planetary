import Api from '../../utils/Api';

import API_KEY from '../utils/constants'

class NasaService {
    static getApod() {
        return Api.get(`apod?api_key=${API_KEY}`);
    }    
}

export default NasaService;