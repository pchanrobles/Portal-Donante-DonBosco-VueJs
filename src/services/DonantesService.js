
export default {
   async getDonantes() {
     apiClient.defaults.headers["Authorization"] = `Bearer ${JSON.parse(
       localStorage.getItem("token")
     )}`;

     let respuesta = await apiClient.get("/api/donantes");
     console.log(respuesta)
     return respuesta;
     
   },
    }

