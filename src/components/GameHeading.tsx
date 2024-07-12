import React from "react"
import {GameQuery} from "../App";
import {Heading} from "@chakra-ui/react";
import usePlatform from "../hooks/usePlatform";
import useGenre from "../hooks/useGenre";

interface Props {
    gameQuery: GameQuery
}

const GameHeading = ({gameQuery} : Props) => {

    const platform = usePlatform(gameQuery.platformId)
    const genre = useGenre(gameQuery.genreId)

    const heading = `${platform?.name || ''}  ${
        genre?.name || ''
    } Game` ;
    return (
        <Heading as={"h1"}>{heading}</Heading>
    )
}

export default GameHeading