import React from "react";
import {Button, Menu, MenuButton, MenuItem, MenuList} from "@chakra-ui/react";
import {BsChevronDown} from "react-icons/all";
import usePlatform, {Platform} from "../hooks/usePlatform";

interface Props  {
    onSelectPlatform : (platform :Platform) => void;
    selectedPlatformId?: number;
}

const PlatformSelector =  ({
    onSelectPlatform,
    selectedPlatformId,
    } : Props) => {
    const {data,error} = usePlatform()
    const selectedPlatform =
        data?.results.find(p => p.id === selectedPlatformId);

    if (error) return null

    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronDown/>}>
                {selectedPlatform?.name || 'Platform'}
            </MenuButton>
            <MenuList>
                {data?.results.map(platform =>
                    <MenuItem
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