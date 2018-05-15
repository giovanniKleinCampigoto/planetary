
import axios from 'axios'

const BASE_URL = "https://api.nasa.gov/planetary/"

class Api {
    static get(uri) {
        return axios.get(`${BASE_URL}${uri}`)
    }
}

export default Api