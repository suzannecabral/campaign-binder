import React from "react";
import { useState } from "react";
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

const SidePanelsWrapper = (props) => {
	const { notes } = props;
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
						Notebook 1
						<ChevronDownIcon ml="3" />
					</MenuButton>
					<MenuList>
						<MenuItem>Notebook 1</MenuItem>
						<MenuItem>Notebook 2</MenuItem>
						<MenuItem>Notebook 3</MenuItem>
						<MenuItem>+ Add New</MenuItem>
					</MenuList>
				</Menu>
				<Flex height="100%">
					<SidePanelFolders notes={notes} />
					<SidePanelPages notes={notes} />
				</Flex>
			</Box>
		</div>
	);
};

export default SidePanelsWrapper;
