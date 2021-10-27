
export default {
   getdonante() {
      return apiClient.get('/donantes')
   },
   getPdf() {
      return apiClient.get('api/comunicados')
   }
}

