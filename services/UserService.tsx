import axios from "axios";

const API_URL = "http://192.168.1.252:3000/users";

const userService = {
    register: async (userData: { name: string, mobile: string, email: string, password: string }) => {
        try {
            const response = await axios.post(API_URL, userData);
            return response.data;
        } catch (error: any) {
            console.error("Error register user: ", error.response?.data || error.message);
            throw error;
        }
    },
    login: async (email: string, password: string) => {
        try {
            const response = await axios.post(API_URL, { email, password });
            return response.data;
        } catch (error) {
            console.error("Error login in: ", error);
            throw error;
        }
    },
    getAllUsers: async () => {
        try {
            const response = await axios.get(API_URL);
            return response.data;
        } catch (error) {
            console.log("Error fetching users: ", error);
            throw error;
        }
    }
}

export default userService;