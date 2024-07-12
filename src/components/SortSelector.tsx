import React, {useState} from "react";
import {Button, Menu, MenuButton, MenuItem, MenuList} from "@chakra-ui/react";
import {Platform} from "../hooks/usePlatforms";
import {BsChevronDown} from "react-icons/bs";

interface Props {
    onSelectSortOrder: ( sortOrder: string) => void;
    sortOrder: string | null;
}


const SortSelector =  ({onSelectSortOrder,sortOrder}: Props) => {


    const sortOrders = [
        {value: '' , label: 'Relevance'},
        {value: '-added' , label: 'Date added'},
        {value: '-name' , label: 'Name'},
        {value: '-released' , label: 'Release data'},
        {value: '-metacritic' , label: 'Popularity'},
        {value: '-rating' , label: 'Average rating'},]

    const currentLabel
        = sortOrders.find(order => order.value === sortOrder )

    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronDown/>}>
                Order by : {currentLabel?.label ||'Relevance'}</MenuButton>
            <MenuList >
                {sortOrders?.map((order) =>
                    <MenuItem onClick={() => onSelectSortOrder(order.value)}
                              key={order.value}>{order.label}</MenuItem>)}
            </MenuList>
        </Menu>)}
export default SortSelector