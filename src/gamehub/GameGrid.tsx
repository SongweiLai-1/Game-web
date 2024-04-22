import React, {useEffect, useState} from "react";
import {SimpleGrid, Text} from "@chakra-ui/react";
import useGames from "../hooks/useGames"
import GameCard from "./GameCard";
import GameCardSkeleton from "../components/GameCardSkeleton"
import GameCardContainer from "../components/GameCardContainer"
import {Genre} from "../hooks/useGenres";
import {Platform} from "../hooks/usePlatform";

interface Props {
    selectedGenre: Genre | null;
    selectedPlatform: Platform | null;
}

const GameGrid = ({selectedGenre,selectedPlatform}: Props) => {

    const {data,error, isLoading} = useGames(selectedGenre, selectedPlatform)
    const skeletons = [1,2,3,4,5,6,7,8,9];
    if (error) return <Text>{error}</Text>;

    return(
            <SimpleGrid  columns={{sm:1,md:2,lg:3,xl:4}}
                         padding="10px"
                         spacing={10}>
                {isLoading
                    && skeletons.map((skeleton) => (
                        <GameCardContainer key={skeleton} >
                        <GameCardSkeleton />
                        </GameCardContainer>
                    ))}
                { data.map((game)=> (
                    <GameCardContainer key={game.id}>
                    <GameCard game={game}/>
                    </GameCardContainer>
                ))}
            </SimpleGrid>
    )}

export default GameGrid