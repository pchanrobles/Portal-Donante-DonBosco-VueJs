export default {
  async login(data) {
    await apiClient.get("/sanctum/csrf-cookie");

    let respuesta = await apiClient.post("/api/login", data);

    return respuesta;
  },
};
