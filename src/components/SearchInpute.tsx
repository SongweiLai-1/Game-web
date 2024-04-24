import React, {useRef} from 'react'
import {Input, InputGroup, InputLeftElement} from '@chakra-ui/react'
import {BsSearch} from "react-icons/all";

interface Props {
    onSearch: (searchText: string) => void;
}

const SearchInpute = ({onSearch}: Props) => {

    const ref = useRef<HTMLInputElement>(null)

    return (
        <form onSubmit ={(event) => {
            event.preventDefault();
            if (ref.current) onSearch(ref.current.value)
        }}>
            <InputGroup>
                <InputLeftElement children={<BsSearch />}/>
                <Input ref={ref} borderRadius={20} placeholder='Search games...' />
            </InputGroup>
        </form>

    )
}

export default SearchInpute