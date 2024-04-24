import React from 'react'
import {Input, InputGroup, InputLeftElement} from '@chakra-ui/react'
import {BsSearch} from "react-icons/all";


const SearchInpute = () => {
    return (
        <InputGroup>
            <InputLeftElement children={<BsSearch />}/>
            <Input borderRadius={20} placeholder='Search games...' />
        </InputGroup>
    )
}

export default SearchInpute