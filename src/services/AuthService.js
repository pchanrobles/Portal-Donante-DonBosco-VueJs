
export default {
    async login(data) {

        await apiCliente.get('/sanctum/csrf-cookie')

            let respuesta = await apiCliente.post('/api/login', data)

            return respuesta
        
    }
}