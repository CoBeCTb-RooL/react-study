import axios from "axios"
import { countPages } from "../lib/helpers"

export default class PostService{
    static async getAll(limit=10, page=1){
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
            params: {
                _limit: limit,
                _page: page
            },
        })
        return response
    }
}