import {HStack, Image, Text} from "@chakra-ui/react";
import logo from "../assets/logo.webp"
import DarkMode from "./DarkMode";
import SearchInpute from "./SearchInpute";


const NavBar =  () => {

    return (
        <HStack justifyContent='space-between'>
            <Image src={logo} boxSize='60px'/>
            <SearchInpute />

            <DarkMode/>
        </HStack>
    )
}

export default NavBar