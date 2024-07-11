import APIClient, {FetchResponse} from "../services/api-client";
import {GameQuery} from "../App";
import {useInfiniteQuery} from "@tanstack/react-query";
import {Platform} from "./usePlatform";



export interface Game {
    id: number
    name: string
    background_image: string;
    parent_platforms: {platform: Platform}[];
    metacritic:number;
    rating: number;
    rating_top: number;

}

const apiClient = new APIClient<Game>('/games')

const useGames = (gameQuery: GameQuery) =>
    useInfiniteQuery<FetchResponse<Game>,Error>({
        queryKey: ['games', gameQuery],
        queryFn: ({pageParam = 1} ) =>
            apiClient.getAll({
            params: {
                genres: gameQuery.genre?.id,
                parent_platforms: gameQuery.platform?.id,
                ordering: gameQuery.sortOrder,
                searchText: gameQuery.searchText,
                page: pageParam
            }
        }),
        getNextPageParam: (lastPage, allPages) => {
            return lastPage.next ? allPages.length+1 : undefined;
        }
    });


export default useGames