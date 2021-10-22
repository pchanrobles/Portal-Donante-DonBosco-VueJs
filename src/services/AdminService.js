const BASE_URL = 'http://localhost:8000';

function upload(formData) {

    const url = `${BASE_URL}/api/upload-file`;

    return apiClient.post(url, formData)
        // get data
        .then(x => x.data)
}

export default upload 