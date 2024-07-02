import  {useState} from 'react';
import {Grid, GridItem, HStack, Show} from '@chakra-ui/react';
import NavBar from './components/NavBar';
import GameGrid from "./gamehub/GameGrid";
import GenreList from "./components/GenreList";
import {Genre} from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector"
import {Platform} from "./hooks/usePlatform";
import SortSelector from "./components/SortSelector";
import GameHeading from "./components/GameHeading";

export interface GameQuery {
    genre: Genre | null
    platform: Platform | null
    sortOrder: string
    searchText: string
}

function App() {

    const [gameQuary,setGameQuary] = useState<GameQuery>({} as GameQuery)

    return (<Grid templateAreas={{
        base: `"nav" "main"`,
        lg:`"nav nav" "aside main"`}}>
        <GridItem area="nav">
            <NavBar onSearch={(searchText) => setGameQuary({...gameQuary,searchText})}/>
        </GridItem>
        <Show above="lg">
            <GridItem area="aside" paddingX={5} >
            <GenreList
                selectedGenre={gameQuary.genre}
                onSelectGenre={(genre) => setGameQuary({...gameQuary,genre})}/>
            </GridItem>
        </Show>
        <GridItem area="main" >
            <GameHeading gameQuery={gameQuary}/>
            <HStack spacing={5} paddingLeft={2} marginBottom={5}>
                <PlatformSelector
                    selectPlatform={gameQuary.platform}
                    onSelectPlatform={(platform) => setGameQuary({...gameQuary,platform})} />
                <SortSelector
                    sortOrder={gameQuary.sortOrder}
                    onSelectSortOrder={(sortOrder) => setGameQuary({...gameQuary,sortOrder})}/>
            </HStack>
            <GameGrid gameQuery={gameQuary} />
            </GridItem>
         </Grid>)}

export default App
