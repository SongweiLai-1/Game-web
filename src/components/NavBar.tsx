import {HStack, Image, Text} from "@chakra-ui/react";
import logo from "../assets/logo.webp"
import DarkMode from "./DarkMode";
import SearchInpute from "./SearchInpute";

interface Props {
    onSearch: (searchText: string) => void;
}

const NavBar =  ({onSearch} : Props) => {

    return (
        <HStack justifyContent='space-between'>
            <Image src={logo} boxSize='60px'/>
            <SearchInpute onSearch={onSearch} />
            <DarkMode/>
        </HStack>
    )}

export default NavBar