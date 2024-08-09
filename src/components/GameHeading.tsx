import React from "react"
import {Heading} from "@chakra-ui/react";
import usePlatform from "../hooks/usePlatform";
import useGenre from "../hooks/useGenre";
import useGameQueryStore from "../store";


const GameHeading = () => {

    const genreId = useGameQueryStore(s => s.gameQuery.genreId);
    const platformId = useGameQueryStore(s => s.gameQuery.platformId);

    const platform = usePlatform(platformId)
    const genre = useGenre(genreId)



    const heading = `${platform?.name || ''}  ${
        genre?.name || ''
    } Game` ;
    return (
        <Heading as={"h1"}>{heading}</Heading>
    )
}

export default GameHeading