import axios from 'axios';

class CycleService {
    constructor() {
        this.api = axios.create({
            baseURL: `http://localhost:5005/api/cycle`
        })

        this.api.interceptors.request.use((config) => {

            const storedToken = localStorage.getItem("authToken");

            if (storedToken) {
                config.headers = { Authorization: `Bearer ${storedToken}` }
            }

            return config
        })
    }

    createCycle() {
        return this.api.get(`cycle/create`, cycleData)
    }
}

const cycleService = new CycleService()

export default cycleService