import { HStack, Image, List, ListItem, Spinner, Text } from '@chakra-ui/react'
import useGenres from '../hooks/useGenres'
import getCroppedImageUrl from '../services/Image-url'

const GenreList = () => {
const { data , Loading } = useGenres()

if(Loading) return <Spinner />

  return (
    <List>
      {data.map(genre => <ListItem paddingY='5px' key={genre.id}>
        <HStack>
          <Image boxSize='32px' borderRadius={8} src={getCroppedImageUrl(genre.image_background)} />
          <Text fontSize='lg'>{genre.name}
          </Text>
        </HStack>
      </ListItem>)}
    </List>
  )
}

export default GenreList
