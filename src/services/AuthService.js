 import axios from 'axios'

const apiCliente = axios.create({
    baseURL: 'http://localhost:8000',
    withCredentials: true,
    headers: {
        Accept: 'application/json',
        'Content-type': 'application/json',
    }
});

export default {
    async register(data) {

        await apiCliente.get('/sanctum/csrf-cookie')

            let respuesta = await apiCliente.post('/api/register', data)

            return respuesta
        
    }
}
