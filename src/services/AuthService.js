
import index from "../store/index.js";

export default {
    async register(data) {

        await apiClient.get('/sanctum/csrf-cookie')

            let respuesta = await apiClient.post('/api/register', data)

            return respuesta
        
    },
    
    async login(data) {

        await apiClient.get('/sanctum/csrf-cookie')

            let respuesta = await apiClient.post('/api/login', data)

            return respuesta
        
    },
}
