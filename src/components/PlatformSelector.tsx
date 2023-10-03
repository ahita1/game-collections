import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import React, { useState } from 'react'
import { BsChevronDown } from 'react-icons/bs'
import useGames from '../hooks/useGames'
import useData from '../hooks/useData'
import usePlatforms, { Platforms } from '../hooks/usePlatforms'

// interface Platform {
//     id: number;
//     name: string;
//   }

interface Props {
    onSelectPlatform: (platform: Platforms) => void
    selectedPlatform: Platforms | null
}
const PlatformSelector = ({ onSelectPlatform, selectedPlatform }: Props) => {

    const { data, error } = usePlatforms()
    if (error) return null
    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronDown />}>  {selectedPlatform ?. name || 'Platforms'}
            </MenuButton>
            <MenuList>
                {data.map((platform) =>
                    <MenuItem onClick={() => onSelectPlatform(platform)} key={platform.id}>
                        {platform.name}
                    </MenuItem>)}
            </MenuList>
        </Menu>
    )

}

export default PlatformSelector
