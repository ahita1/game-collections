import { SimpleGrid, Text } from "@chakra-ui/react"
import useGames from "../hooks/useGames"
import GameCards from "./GameCards"
import GameCardSkeleton from "./GameCardSkeleton"
import GameCardContainer from "./GameCardContainer"
const GameGrid = () => {
    const { data , error , Loading} = useGames()
    const Skeleton = [1,2,3,4,5,6,7,8,9,10,11,12]
  return (
  <>
  {error && <Text>{error}</Text>}
   <SimpleGrid columns={{sm : 1, md : 2, lg: 3, xl: 5}} padding={10} spacing={10}>
    {Loading && Skeleton.map((skeleton) => <GameCardContainer><GameCardSkeleton key={skeleton}/></GameCardContainer>)}
    {data.map(game => 
    <GameCardContainer>
      <GameCards key={game.id} game={game}/> 
    </GameCardContainer>
    )}
   
   </SimpleGrid>
  </>
  )
}

export default GameGrid