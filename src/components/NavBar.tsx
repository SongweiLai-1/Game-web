import {HStack, Image, Text} from "@chakra-ui/react";
import logo from "../assets/logo.webp"
import DarkMode from "./DarkMode";


const NavBar =  () => {

    return (
        <HStack justifyContent='space-between'>
            <Image src={logo} boxSize='60px'/>
            <DarkMode/>
        </HStack>
    )
}

export default NavBar