import React from "react";
import useGenres from "../hooks/useGenres";
import {Button, Heading, HStack, Img, List, ListItem, Spinner} from "@chakra-ui/react";
import getCroppedImageUrl from "../services/getCroppedImageUrl";
import useGameQueryStore from "../store";



const GenreList = () => {

    const {data, isLoading, error} = useGenres()
    const selectedGenreId = useGameQueryStore(s => s.gameQuery.genreId)
    const setSelectedGenreId = useGameQueryStore(s => s.setGenreId)

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
                        onClick={() =>setSelectedGenreId(genre.id)}>
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