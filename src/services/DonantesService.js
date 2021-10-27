
export default {
   async byDocument() {
      let respuesta = await apiClient.get("/api/donantes/byDocument");
      return respuesta;
    }
     }

