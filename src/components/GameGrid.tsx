import { SimpleGrid, Text } from "@chakra-ui/react"
import useGames from "../hooks/useGames"
import GameCards from "./GameCards"
import GameCardSkeleton from "./GameCardSkeleton"
import GameCardContainer from "./GameCardContainer"
import { Genres } from "../hooks/useGenres"
import { Platforms } from "../hooks/usePlatforms"

interface Props{
selectedGenre : Genres | null
selectedPlatform : Platforms | null
}


const GameGrid = ({selectedGenre , selectedPlatform} : Props) => {
    const { data , error , Loading} = useGames(selectedGenre , selectedPlatform)
    const Skeleton = [1,2,3,4,5,6,7,8,9,10,11,12]
  return (
  <>
  {error && <Text>{error}</Text>}
   <SimpleGrid columns={{sm : 1, md : 2, lg: 3, xl: 5}} padding={10} spacing={3}>
    {Loading && Skeleton.map((skeleton) => 
    <GameCardContainer key={skeleton}>
      <GameCardSkeleton />
      </GameCardContainer>)}
    {data.map(game => 
    <GameCardContainer key={game.id}>
      <GameCards  game={game}/> 
    </GameCardContainer>
    )}
   
   </SimpleGrid>
  </>
  )
}

export default GameGrid