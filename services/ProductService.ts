import axios from "axios";

const API_URL = "http://192.168.1.252:3000/products";

const productService = {
    getAllProducts: async () => {
        try {
            const response = await axios.get(API_URL);
            return response.data;
        } catch (error: any) {
            console.error("Lỗi khi lấy danh sách sản phẩm: ", error.response?.data || error.message);
            throw error;
        }
    },

    getProductById: async (id: string) => {
        try {
            const response = await axios.get(`${API_URL}/${id}`);
            return response.data;
        } catch (error: any) {
            console.error(`Lỗi khi lấy sản phẩm ID ${id}:`, error.response?.data || error.message);
            throw error;
        }
    },

    addProduct: async (productData: {
        name: string;
        type: string;
        size: string;
        origin: string;
        describe: string;
        quantity: number;
        price: number;
    }) => {
        try {
            const response = await axios.post(API_URL, productData);
            return response.data;
        } catch (error: any) {
            console.error("Lỗi khi thêm sản phẩm: ", error.response?.data || error.message);
            throw error;
        }
    },

    updateProduct: async (id: string, updatedData: {
        name?: string;
        type?: string;
        size?: string;
        origin?: string;
        describe?: string;
        quantity?: number;
        price?: number;
    }) => {
        try {
            const response = await axios.put(`${API_URL}/${id}`, updatedData);
            return response.data;
        } catch (error: any) {
            console.error(`Lỗi khi cập nhật sản phẩm ID ${id}:`, error.response?.data || error.message);
            throw error;
        }
    },

    deleteProduct: async (id: string) => {
        try {
            await axios.delete(`${API_URL}/${id}`);
            return { message: "Xóa sản phẩm thành công!" };
        } catch (error: any) {
            console.error(`Lỗi khi xóa sản phẩm ID ${id}:`, error.response?.data || error.message);
            throw error;
        }
    }
};

export default productService;
