import React from "react";
import {Game} from "../hooks/useGames";
import {Card, CardBody, Heading, HStack, Img, Text} from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList"
import CriticScore from "../components/CriticScore";
interface Props {
    game: Game }



const GameCard = ({game}: Props) => {
    return (
        <Card borderRadius={10} overflow='hidden' >
            <Img src={game.background_image} />
            <CardBody>
                <Heading fontSize='2xl' >{game.name}</Heading>
                <HStack justifyContent='space-between'>
                    <PlatformIconList platforms={game.parent_platforms} />
                    <CriticScore score={game.metacritic}/>
                </HStack>
            </CardBody>
        </Card>
    )
}

export default GameCard