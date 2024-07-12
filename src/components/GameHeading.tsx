import React from "react"
import {GameQuery} from "../App";
import {Heading} from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import usePlatform from "../hooks/usePlatform";

interface Props {
    gameQuery: GameQuery
}

const GameHeading = ({gameQuery} : Props) => {
    const {data: genres} = useGenres();
    const genre = genres?.results.find(
        g => g.id === gameQuery.genreId);

    const {data: platforms } = usePlatform();
    const platform = platforms?.results.find(
        p => p.id === gameQuery.platformId);


    const heading = `${platform?.name || ''}  ${
        genre?.name || ''
    } Game` ;
    return (
        <Heading as={"h1"}>{heading}</Heading>
    )
}

export default GameHeading