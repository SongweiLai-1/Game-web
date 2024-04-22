import useData from "./useData";
import {Genre} from "./useGenres";
import {Platform} from "./usePlatform";
export interface Platform {
    id: number
    name:string
    slug:string
}

export interface Game {
    id: number
    name: string
    background_image: string;
    parent_platforms: {platform: Platform}[];
    metacritic:number;
}

interface FetchGamesResponse {
    count: number;
    result: Game[]
}

const useGames=
    (selectedGenre:
         Genre | null,
     selectedPlatform:
         Platform |null) =>
        useData<Game>('/games',
            {params: {genres: selectedGenre?.id, platform: selectedPlatform?.id}},
            [selectedGenre?.id, selectedPlatform?.id ])

export default useGames