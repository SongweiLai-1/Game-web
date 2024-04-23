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

interface GameQuery {
    genre: Genre | null
    platform: Platform | null
}


function App() {

    const [gameQuary,setGameQuary] = useState<GameQuery>({} as GameQuery)


    return (<Grid templateAreas={{
        base: `"nav" "main"`,
        lg:`"nav nav" "aside main"`}}>
        <GridItem area="nav">
            <NavBar/>
        </GridItem>
        <Show above="lg">
            <GridItem area="aside" paddingX={5} >
            <GenreList selectedGenre={gameQuary.genre} onSelectGenre={(genre) => setGameQuary({...GameQuery,genre})}/>
            </GridItem>
        </Show>
        <GridItem area="main" >
            <PlatformSelector selectPlatform={gameQuary.platform}  onSelectPlatform={(platform) => setGameQuary({...GameQuery,platform})} />
            <GameGrid selectedPlatform={gameQuary.platform} selectedGenre={gameQuary.genre}/>
            </GridItem>
         </Grid>)}

export default App
