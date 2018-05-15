
import axios from 'axios'

import API_KEY from './constants'

const BASE_URL = "https://api.nasa.gov/planetary/"

class Api {
    static get(uri) {
        return axios.get(`${BASE_URL}${uri}`)
    }
}