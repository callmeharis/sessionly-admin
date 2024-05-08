import axios from "axios";

const BACKEND_BASE_URL = process.env.BACKEND_BASE_URL;

export default class AdminApi {
    async create(dto) {
        try {
            const { data } = await axios.post(`https://api.dev.sessionly.co/api/v2/admin/register`, dto)
            console.log("admin data", data)
            return data;
        } catch (error) {
            console.log(error)
        }
    }
    async list() {
        try {
            const { data } = await axios.get(`https://api.dev.sessionly.co/api/v2/admin/all`)
            console.log("admin data api", data)
            return data;
        } catch (error) {
            console.log(error)
        }
    }
    async getById() {
        try {
            const { data } = await axios.get(`https://api.dev.sessionly.co/api/v2/admin/get`)
            console.log("admin member", data)
            return data;
        } catch (error) {
            console.log(error)
        }
    }
    async edit(adminId, dto) {
        try {
            const { data } = await axios.patch(`https://api.dev.sessionly.co/api/v2/admin/update/${adminId}`, dto);
            console.log("updated admin member", data)
            return data;
        } catch (error) {
            console.log(error)
        }
    }
    async remove(adminId) {
        try {
            const { data } = await axios.delete(`https://api.dev.sessionly.co/api/v2/admin/delete/${adminId}`);
            console.log("delete admin member", data)
            return data;
        } catch (error) {
            console.log(error)
        }
    }
}