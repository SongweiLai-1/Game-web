import React from "react";
import {Platform} from "../hooks/usePlatforms";
import {Text, Icon, HStack, IconProps} from "@chakra-ui/react";
import { FaWindows,FaXbox,FaPlaystation,FaLinux,FaApple,FaAndroid} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import {IconType} from "react-icons";

interface Props {
    platforms: Platform[]
}

const PlatformIconList = ({platforms = []}: Props) => {

    const iconMap: { [key:string]: IconType } = {
        pc: FaWindows,
        xbox: FaXbox,
        playstation: FaPlaystation,
        linux: FaLinux,
        mac: FaApple,
        ios: MdPhoneIphone,
        android: FaAndroid,
        nintendo: SiNintendo,
        web: BsGlobe
    }

return (
    <HStack marginY={1}>
        {platforms.map((platform) => (
            <Icon
                key={platform.id}
                as={iconMap[platform.slug]}
                color='gray.500'/>
        ))}
    </HStack>
)}

export default PlatformIconList