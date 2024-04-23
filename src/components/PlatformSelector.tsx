import React from "react";
import {Button, Menu, MenuButton, MenuItem, MenuList} from "@chakra-ui/react";
import {BsChevronDown} from "react-icons/all";
import usePlatform from "../hooks/usePlatform";
import {Platform} from "../hooks/usePlatform";

interface Props  {
    onSelectPlatform : (platform :Platform) => void;
    selectPlatform : Platform | null;
}

const PlatformSelector =  ({onSelectPlatform,selectPlatform} : Props) => {

    const {data,error} = usePlatform()

    if (error) return null

    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronDown/>}>
                {selectPlatform?.name || 'Platform'}
            </MenuButton>
            <MenuList>
                {data.map(platform =>  <MenuItem
                        onClick={() => onSelectPlatform(platform)}
                        key={platform.id}>
                        {platform.name}
                    </MenuItem>
                )}
            </MenuList>
        </Menu>
    )
}

export default PlatformSelector