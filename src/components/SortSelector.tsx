import React from "react";
import {Button, Menu, MenuButton, MenuItem, MenuList} from "@chakra-ui/react";
import {BsChevronDown} from "react-icons/bs";
import useGameQueryStore from "../store";



const SortSelector =  () => {


    const sortOrders = [
        {value: '' , label: 'Relevance'},
        {value: '-added' , label: 'Date added'},
        {value: '-name' , label: 'Name'},
        {value: '-released' , label: 'Release data'},
        {value: '-metacritic' , label: 'Popularity'},
        {value: '-rating' , label: 'Average rating'},]

    const sortOrder = useGameQueryStore(s => s.gameQuery.sortOrder)
    const setSelectedSortOrder = useGameQueryStore(s => s.setSortOrder);
    const currentLabel
        = sortOrders.find(order => order.value === sortOrder )

    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronDown/>}>
                Order by : {currentLabel?.label ||'Relevance'}</MenuButton>
            <MenuList >
                {sortOrders?.map((order) =>
                    <MenuItem onClick={() => setSelectedSortOrder(order.value)}
                              key={order.value}>{order.label}</MenuItem>)}
            </MenuList>
        </Menu>)}
export default SortSelector