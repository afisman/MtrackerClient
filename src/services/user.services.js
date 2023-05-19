import axios from 'axios';

class UserService {
    constructor() {
        this.api = axios.create({
            baseURL: `http://localhost:5005/api/user`
        })

        this.api.interceptors.request.use((config) => {

            const storedToken = localStorage.getItem("authToken");

            if (storedToken) {
                config.headers = { Authorization: `Bearer ${storedToken}` }
            }

            return config
        })
    }

    getUser(user_id) {
        return this.api.get(`user/${user_id}`, userData)
    }
}

const userService = new UserService()

export default userService