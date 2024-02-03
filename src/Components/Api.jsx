// api.js
import axios from 'axios';

const apiInstance = axios.create();

apiInstance.interceptors.request.use((config) => {
    // Add date and time to the request headers
    config.headers['X-Request-Date'] = new Date().toISOString();
    return config;
});

export default apiInstance;
