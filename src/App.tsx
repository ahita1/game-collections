import { Button, ButtonGroup, Grid, GridItem, HStack, Show, Text } from '@chakra-ui/react'
import NavBar from './components/NavBar'
import GameGrid from './components/GameGrid'
import GenreList from './components/GenreList'
import { useState } from 'react'
import { Genres } from './hooks/useGenres'
import PlatformSelector from './components/PlatformSelector'
import { Platforms } from './hooks/usePlatforms'
import SortSelector from './components/SortSelector'

function App() {
const [selectedGenre , setSelectedGenre] = useState<Genres | null>(null)
const [selectedPlatform , setSelectedPlatform] = useState<Platforms | null>(null)


  return (
    <>
      <Grid templateAreas={{
        base : `"nav " " main"`,
        lg: `"nav nav" "aside main"`
      }}
        templateColumns={{
          base: "1fr",
          lg: "200px 1fr"
        }}
      >
        <GridItem area='nav'>
          <NavBar />
          </GridItem>
       <Show above='lg'>
          <GridItem area='aside' paddingX={5}>
           <GenreList selectedGenre={selectedGenre} onSelectGenre={(genre) => setSelectedGenre(genre)}/>
          </GridItem>
       </Show>
        <GridItem area='main'>
          <HStack spacing={5} paddingLeft={9} marginBottom={5}>
            <PlatformSelector selectedPlatform = {selectedPlatform} onSelectPlatform = {(platform) => setSelectedPlatform(platform)}/>
            <SortSelector />
          </HStack>
          <GameGrid selectedPlatform = {selectedPlatform} selectedGenre={selectedGenre}/>
          </GridItem>
      </Grid>
    </>
  )
}

export default App