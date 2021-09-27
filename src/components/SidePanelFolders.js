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
				<AccordionItem>
					<AccordionButton>Valewood</AccordionButton>
					<AccordionItem>
						<AccordionButton>NPCs</AccordionButton>
					</AccordionItem>
				</AccordionItem>
			</Accordion>
		</div>
	);
};

export default SidePanelFolders;
