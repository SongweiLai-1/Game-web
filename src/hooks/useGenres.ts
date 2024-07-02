import {FetchResponse} from "./useData";
import {useQuery} from "@tanstack/react-query";
import apiClient from "../services/api-client";
import generes from "../data/genres";


export interface Genre {
    id: number
    name: string
    image_background: string
}

const useGenres = () => useQuery({
    queryKey: ['genres'],
    queryFn: () =>
        apiClient
            .get<FetchResponse<Genre>>('/genres')
            .then(res => res.data),
    staleTime: 24 * 60 * 60 * 1000, //24h
    initialData: {count: generes.length , results: generes}
})
export default useGenres