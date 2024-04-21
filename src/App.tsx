import react from 'react'
import { Grid, GridItem , Show } from '@chakra-ui/react'
import NavBar from './components/NavBar'
import DarkMode from "./components/DarkMode";
import GameGrid from "./gamehub/GameGrid";
import useGameGrid from "./hooks/useGameGrid";
import GenreList from "./components/GenreList";

function App() {

  return (
<>
        <Grid templateAreas={{
            base: `"nav" "main"`,
            lg:`"nav nav" "aside main"`
            }}>
            <GridItem   area="nav">
                <NavBar/>
            </GridItem>
            <Show above="lg">
            <GridItem area="aside" paddingX={5} >
                <GenreList />
            </GridItem>
            </Show>
            <GridItem area="main" >
                <GameGrid/>
            </GridItem>
        </Grid>

</>
  )}
export default App
