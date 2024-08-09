import React, {useRef} from 'react'
import {Input, InputGroup, InputLeftElement} from '@chakra-ui/react'
import {BsSearch} from "react-icons/all";
import useGameQueryStore from "../store";


const SearchInpute = () => {

    const ref = useRef<HTMLInputElement>(null)
    const setSearchText = useGameQueryStore( s => s.setSearchText);

    return (
        <form onSubmit ={(event) => {
            event.preventDefault();
            if (ref.current) setSearchText(ref.current.value)
        }}>
            <InputGroup>
                <InputLeftElement children={<BsSearch />}/>
                <Input ref={ref} borderRadius={20} placeholder='Search games...' />
            </InputGroup>
        </form>

    )
}

export default SearchInpute