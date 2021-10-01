import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import SidePanelFolders from "./SidePanelFolders";
import SidePanelPages from "./SidePanelPages";
import {
	Heading,
	Flex,
	Box,
	Menu,
	MenuList,
	MenuItem,
	MenuButton,
	Button,
	Icon,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { ImBook } from "react-icons/im";
import { setActiveNotebook } from "../actions/pageActions";

const SidePanelsWrapper = (props) => {
	const dispatch = useDispatch();
	const storeBooks = useSelector((state) => state.pages);
	const handleClick = (book) => {
		dispatch(setActiveNotebook(book));
	};
	return (
		<div>
			<Box w="100%" h="100%" bg="indianred">
				<Menu>
					<MenuButton
						as={Button}
						width="100%"
						height="12"
						variant="ghost"
						textAlign="left"
					>
						<Icon as={ImBook} mr="1" />
						Select a notebook
						<ChevronDownIcon ml="3" />
					</MenuButton>
					<MenuList>
						{storeBooks.map((book) => {
							return (
								<MenuItem key={book.id} onClick={() => handleClick(book)}>
									{book.title}
								</MenuItem>
							);
						})}
					</MenuList>
				</Menu>
				<Flex height="100%">
					<SidePanelFolders />
					<SidePanelPages />
				</Flex>
			</Box>
		</div>
	);
};

export default SidePanelsWrapper;
