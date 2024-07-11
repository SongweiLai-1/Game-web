import axios from "axios";

export default axios.create({
    baseURL:'https://api.rawg.io/api',
    params:{
        key: '8aeff517df4741819e53051c4df7eb83'}
})

export interface FetchResponse<T> {
    count: number;
    results: T[];
}