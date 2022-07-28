import axios from 'axios'

const apiInstance = axios.create({ 
    baseURL: 'http://localhost:3000',
})



export const api = {
    get(url) {
        return apiInstance.get(url)
    },
    post(url, body) {
        return apiInstance.post(url, body)
    }


}

export function getCep(cep) {
    return axios.get(`https://viacep.com.br/ws/${cep}/json/`)
}


