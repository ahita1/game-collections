import axios from "axios";


export default axios.create({
    baseURL : 'https://api.rawg.io/api',
    params : {
        key : '8e52734bc1bd41e0b6adc7d37a9be296'
    }
})