import axios from 'axios';

class CycleService {
    constructor() {
        this.api = axios.create({
            baseURL: process.env.REACT_APP_API_URL
        })

        this.api.interceptors.request.use((config) => {

            const storedToken = localStorage.getItem("authToken");

            if (storedToken) {
                config.headers = { Authorization: `Bearer ${storedToken}` }
            }

            return config
        })
    }

    createCycle(cycleData) {
        return this.api.post(`/cycle/create`, cycleData)
    }
}

const cycleService = new CycleService()

export default cycleService