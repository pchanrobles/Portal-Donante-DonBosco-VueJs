export default {
<<<<<<< HEAD
   async byDocument() {
      let respuesta = await apiClient.get("/api/donantes/byDocument");
      return respuesta;
    }
     }
=======
  async getDonantes() {
    apiClient.defaults.headers["Authorization"] = `Bearer ${JSON.parse(
      localStorage.getItem("token")
    )}`;

    let respuesta = await apiClient.get("/api/donantes");
    console.log(respuesta)
    return respuesta;
  },
  async listDonantes() {
    let respuesta = await apiClient.get("/api/donantes/byDocument");
    console.log(respuesta)
    return respuesta;
  },
  getdonante() {
    return apiClient.get('/donantes')
 },
 getPdf() {
    return apiClient.get('api/comunicados')
 }
};
>>>>>>> 9c19f8fc030c904750c33a7ee5b44eeee9314da9

