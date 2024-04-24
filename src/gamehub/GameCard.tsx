import React from "react";
import {Game} from "../hooks/useGames";
import {Card, CardBody, Heading, HStack, Img, Text} from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList"
import CriticScore from "../components/CriticScore";
import getCroppedImageUrl from "../services/getCroppedImageUrl";
import Emoji from "../components/Emoji";

interface Props {
    game: Game }

const GameCard = ({game}: Props) => {
    return (
        <Card>
            <Img src={getCroppedImageUrl(game.background_image)} />
            <CardBody>
                <HStack justifyContent='space-between' marginBottom={3}>
                    <PlatformIconList platforms={game.parent_platforms?.map(p => p.platform)}/>
                    <CriticScore score={game.metacritic}/>
                </HStack>
                <Heading fontSize='2xl'>{game.name}</Heading>
                <Emoji rating={game.rating_top} />
            </CardBody>
        </Card>
    )
}

export default GameCard