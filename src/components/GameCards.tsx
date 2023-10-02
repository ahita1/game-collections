import React from 'react'
import { Game } from "../hooks/useGames"
import { Card, CardBody, HStack, Heading, Image, Text } from '@chakra-ui/react'
import PlatformIconsList from './PlatformIconsList'
import CriticScore from './CriticScore'
import getCroppedImageUrl from '../services/Image-url'



interface Props {
  game: Game
}
const GameCards = ({ game }: Props) => {
  return (
    <>
      <Card width='300px' borderRadius={10} overflow='hidden'>
        <Image src={getCroppedImageUrl(game.background_image)} />
        <CardBody>
          <Heading fontSize='2xl'>{game.name}</Heading>
          <HStack justifyContent='space-between'>
            <PlatformIconsList platforms={game.parent_platforms.map(p => p.platform)} />
            <CriticScore score={game.metacritic} />
          </HStack>
        </CardBody>
      </Card>
    </>
  )
}

export default GameCards