import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import React, { useState } from 'react'
import { BsChevronDown } from 'react-icons/bs'
import useGames from '../hooks/useGames'
import useData from '../hooks/useData'
import usePlatforms from '../hooks/usePlatforms'

interface Platform {
    id: number;
    name: string;
  }
const PlatformSelector = () => {

    const {data , error} = usePlatforms()
    if(error) return null
  return (
   <Menu>
    <MenuButton as={Button} rightIcon={<BsChevronDown />}>  Plaform </MenuButton>
    <MenuList>
        {data.map((platform) => <MenuItem key={platform.id}>{platform.name}</MenuItem>)}
    </MenuList>
   </Menu>
  )
}

export default PlatformSelector