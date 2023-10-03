import { Button, HStack, Image, List, ListItem, Spinner, Text } from '@chakra-ui/react'
import useGenres, { Genres } from '../hooks/useGenres'
import getCroppedImageUrl from '../services/Image-url'

interface Props{
  onSelectGenre : (genre : Genres) => void
}

const GenreList = ({onSelectGenre} : Props) => {
  const { data, Loading, error } = useGenres()
  if (error) return null
if(Loading) return <Spinner />

  return (
    <List>
      {data.map(genre => <ListItem paddingY='5px' key={genre.id}>
        <HStack>
          <Image boxSize='32px' borderRadius={8} src={getCroppedImageUrl(genre.image_background)} />
          <Button onClick={() => onSelectGenre(genre)} variant='link' fontSize='lg'>
            {genre.name}
          </Button >
        </HStack> 
      </ListItem>)}
    </List>
  )
}

export default GenreList
