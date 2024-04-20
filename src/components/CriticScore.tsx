import React from "react"
import {Game} from "../hooks/useGames";
import {Text} from "@chakra-ui/react";
import { Badge } from '@chakra-ui/react'

interface Props {
    score: number
}
const CriticScore = ({score}:Props) =>{
    return (
        <>
            <Badge ml='1' colorScheme='green'>{score}</Badge>
        </>
    )
}

export default CriticScore