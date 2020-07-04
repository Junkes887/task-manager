import axios from 'axios'

const api = axios.create({
    baseURL: process.env.APP_TASK_API_URL
})

export default api;