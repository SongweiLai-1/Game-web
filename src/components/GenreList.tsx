import React from "react";
import useGenres, {Genre} from "../hooks/useGenres";
import {Button, Heading, HStack, Img, List, ListItem, Spinner} from "@chakra-ui/react";
import getCroppedImageUrl from "../services/getCroppedImageUrl";

interface Props {
    onSelectGenre: (genre: Genre) =>void;
    selectedGenreId?: number;
}

const GenreList = ({
        selectedGenreId,
        onSelectGenre
        }: Props) => {

    const {data, isLoading, error} = useGenres()

    if (error) return null
    if (isLoading) return <Spinner />

    return (
        <>
        <Heading fontSize='2xl' marginBottom={3}>
            Genres
        </Heading>
        <List>
            {data?.results.map((genre) => (
                <ListItem key={genre.id} paddingY="5px">
                <HStack key={genre.id}>
                    <Img
                        boxSize='32px'
                        borderRadius={8}
                        objectFit = 'cover'
                        src={getCroppedImageUrl(genre.image_background)}/>
                    <Button
                        fontWeight={
                            genre.id === selectedGenreId
                                ? "bold"
                                : "normal"
                            }
                        whiteSpace={'normal'}
                        textAlign = 'left'
                        key={genre.id}
                        paddingY='5px'
                        variant='link'
                        onClick={() =>onSelectGenre(genre)}>
                        {genre.name}
                    </Button>
                </HStack>
                </ListItem>
            ))}
        </List>
        </>
    )
}

export default GenreList