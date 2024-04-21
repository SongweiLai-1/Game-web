import React from "react";
import useGameGrid from "../hooks/useGameGrid";
import {HStack, Img, List, ListItem, Spinner, Text} from "@chakra-ui/react";
import getCroppedImageUrl from "../services/getCroppedImageUrl";


const GenreList = () => {
    const {genres, isLoading,error} = useGameGrid()

    if (error) return null
    if (isLoading) return <Spinner />
    return (
        <List>
            {genres.map(genre => (
                <HStack>
                    <Img boxSize='32px' borderRadius={8} src={getCroppedImageUrl(genre.image_background)}/>
                    <ListItem key={genre.id} paddingY='5px'>{genre.name}</ListItem>
                </HStack>
            ))}

        </List>

    )
}

export default GenreList