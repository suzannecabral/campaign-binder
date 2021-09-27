import {
	Accordion,
	AccordionButton,
	AccordionIcon,
	AccordionItem,
	AccordionPanel,
	Button,
	Icon,
	Text,
	Box,
} from "@chakra-ui/react";
import { BiDockLeft } from "react-icons/bi";
import { MdLibraryBooks, MdFolderOpen } from "react-icons/md";
import { IoMdFolder, IoMdFolderOpen } from "react-icons/io";

import React from "react";

const SidePanelFolders = (props) => {
	return (
		<div>
			<Accordion allowMultiple h="100%" w="40">
				<AccordionItem ml={4} border="none">
					<h2>
						<AccordionButton>
							<Box>Valewood</Box>
							<AccordionIcon />
						</AccordionButton>
					</h2>
					<AccordionItem ml={4} border="none">
						<AccordionButton ml={3} borderLeft="3px solid lightcoral">
							<Box>NPCs</Box>
							<AccordionIcon />
						</AccordionButton>
					</AccordionItem>
					<AccordionItem ml={4} border="none">
						<AccordionButton ml={3} borderLeft="3px solid lightcoral">
							<Box>Locations</Box>
							<AccordionIcon />
						</AccordionButton>
						<AccordionItem ml={4} border="none">
							<AccordionButton ml={3} borderLeft="3px solid lightcoral">
								<Icon as={MdLibraryBooks} mr={1} />
								<Box>Tavern</Box>
							</AccordionButton>
						</AccordionItem>
						<AccordionItem ml={4} border="none">
							<AccordionButton ml={3} borderLeft="3px solid lightcoral">
								<Icon as={MdLibraryBooks} mr={1} />
								<Box>Blacksmith</Box>
							</AccordionButton>
						</AccordionItem>
						<AccordionItem ml={4} border="none">
							<AccordionButton ml={3} borderLeft="3px solid lightcoral">
								<Icon as={MdLibraryBooks} mr={1} />
								<Box>Market Square</Box>
							</AccordionButton>
						</AccordionItem>
					</AccordionItem>
					<AccordionItem ml={4} border="none">
						<AccordionButton ml={3} borderLeft="3px solid lightcoral">
							<Icon as={MdLibraryBooks} mr={1} />
							<Box>Rumors</Box>
						</AccordionButton>
					</AccordionItem>
				</AccordionItem>
			</Accordion>
		</div>
	);
};

export default SidePanelFolders;
