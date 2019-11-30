import axios from 'axios'
import { IKonoList } from '../shared-interfaces'

const LOCAL_API_URL = "http://localhost:3004/konoList"

const api = axios.create({
    baseURL: LOCAL_API_URL,
    timeout: 2000
})

export const konoAPI = {
    getKonoList: async (x: number, y: number): Promise<IKonoList[]> => {
        const res = await api.get("/")
        return res.data
    },
}