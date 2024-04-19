import React from "react";
import {Game} from "../hooks/useGames";
import {Card, CardBody, Heading, Img} from "@chakra-ui/react";

interface Props { game: Game }

interface GameCard {

}

const GameCard = ({game}: Props) => {
    return (
        <Card borderRadius={10} overflow='hidden' >
            <Img src={game.background_image} />
            <CardBody>
                <Heading fontSize='2xl' >{game.name}</Heading>
            </CardBody>
        </Card>
    )
}

export default GameCard