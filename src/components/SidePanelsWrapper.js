import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import FolderTree from "./FolderTree";
import PagesList from "./PagesList";
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
import { setActiveNotebook } from "../actions/notebookActions";

const SidePanelsWrapper = (props) => {
	const dispatch = useDispatch();
	const storeBooks = useSelector((state) => state.activeNotebook);
	const handleClick = (book) => {
		dispatch(setActiveNotebook(book));
	};
	return (
		<div>
			<Box w="100%" h="100%" bg="blue.200">
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
					<FolderTree />
					<PagesList />
				</Flex>
			</Box>
		</div>
	);
};

export default SidePanelsWrapper;
