import {
	Accordion,
	AccordionButton,
	AccordionIcon,
	AccordionItem,
	AccordionPanel,
	Button,
	Text,
	Box,
} from "@chakra-ui/react";

import React from "react";

const SidePanelFolders = (props) => {
	return (
		<div>
			<Accordion allowMultiple h="100%" w="40">
				<AccordionItem border="none">
					<h2>
						<AccordionButton>
							<Box>Valewood</Box>
							<AccordionIcon />
						</AccordionButton>
					</h2>
					<AccordionItem border="none">
						<AccordionButton ml={3} borderLeft="3px solid lightcoral">
							<Box>NPCs</Box>
							<AccordionIcon />
						</AccordionButton>
					</AccordionItem>
					<AccordionItem border="none">
						<AccordionButton ml={3} borderLeft="3px solid lightcoral">
							<Box>Locations</Box>
							<AccordionIcon />
						</AccordionButton>
					</AccordionItem>
					<AccordionItem border="none">
						<AccordionButton ml={3} borderLeft="3px solid lightcoral">
							<Box>Rumors</Box>
						</AccordionButton>
					</AccordionItem>
				</AccordionItem>
			</Accordion>
		</div>
	);
};

export default SidePanelFolders;
