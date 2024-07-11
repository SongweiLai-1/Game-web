import axios, {AxiosRequestConfig} from "axios";

const axiosInstance =  axios.create({
    baseURL:'https://api.rawg.io/api',
    params:{
        key: '8aeff517df4741819e53051c4df7eb83'}
})

export interface FetchResponse<T> {
    count: number;
    results: T[];
}
class APIClient<T> {
    endpoint: string;

    constructor(endpoint: string) {
        this.endpoint = endpoint;
    }

    getAll = (config: AxiosRequestConfig) => {
        return axiosInstance
            .get<FetchResponse<T>>(this.endpoint,config)
            .then(res => res.data);
    }
}

export default APIClient;