import React from "react";
import useGenres, {Genre} from "../hooks/useGenres";
import {Button, HStack, Img, List, ListItem, Spinner, Text} from "@chakra-ui/react";
import getCroppedImageUrl from "../services/getCroppedImageUrl";

interface Props {
    onSelectGenre: (genre: Genre) =>void;
    selectedGenre: Genre | null;
}

const GenreList = ({onSelectGenre,selectedGenre}: Props) => {

    const {data} = useGenres()

    if (data.error) return null
    if (data.isLoading) return <Spinner />
    return (
        <List>
            {data.map(genre => (
                <HStack key={genre.id}>
                    <Img
                        boxSize='32px'
                        borderRadius={8}
                        src={getCroppedImageUrl(genre.image_background)}/>
                    <Button
                        fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"}
                        key={genre.id}
                        paddingY='5px'
                        variant='link'
                        onClick={() =>onSelectGenre(genre)}>
                        {genre.name}
                    </Button>
                </HStack>
            ))}

        </List>

    )
}

export default GenreList