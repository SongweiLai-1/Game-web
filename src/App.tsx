import react, {useState} from 'react';
import { Grid, GridItem , Show } from '@chakra-ui/react';
import NavBar from './components/NavBar';
import DarkMode from "./components/DarkMode";
import GameGrid from "./gamehub/GameGrid";
import useGameGrid from "./hooks/useGenres";
import GenreList from "./components/GenreList";
import {Genre} from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector"
import {Platform} from "./hooks/usePlatform";

function App() {

    const [selectGenre,setSeclectGenre] =
        useState<Genre | null>(null)

    const [selectPlatform, setSeclectPlatform] =
        useState<Platform | null>(null)

    return (<Grid templateAreas={{
        base: `"nav" "main"`,
        lg:`"nav nav" "aside main"`}}>
        <GridItem area="nav">
            <NavBar/>
        </GridItem>
        <Show above="lg">
            <GridItem area="aside" paddingX={5} >
            <GenreList selectedGenre={setSeclectGenre} onSelectGenre={(genre) => setSeclectGenre(genre)}/>
            </GridItem>
        </Show>
        <GridItem area="main" >
            <PlatformSelector selectPlatform={selectPlatform}  onSelectPlatform={setSeclectPlatform} />
            <GameGrid selectedPlatform={selectPlatform} selectedGenre={selectGenre}/>
            </GridItem>
         </Grid>)}

export default App
