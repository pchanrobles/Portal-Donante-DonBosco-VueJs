
export default {
    async register(data) {

        await apiCliente.get('/sanctum/csrf-cookie')

            let respuesta = await apiCliente.post('/api/register', data)

            return respuesta
        
    },
    async login(data) {

        await apiCliente.get('/sanctum/csrf-cookie')

            let respuesta = await apiCliente.post('/api/login', data)

            return respuesta
        
    }
}
