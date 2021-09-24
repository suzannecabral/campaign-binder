import {
	Accordion,
	AccordionButton,
	AccordionIcon,
	AccordionItem,
	AccordionPanel,
	Heading,
	Text,
} from "@chakra-ui/react";

import React from "react";

const SidePanelFolders = (props) => {
	return (
		<div>
			<Heading as="h3" size="xs">
				Folders
			</Heading>
			<Accordion defaultIndex={[0]} allowMultiple bg="peachpuff">
				<AccordionItem>
					<AccordionButton bg="burlywood">
						<Text>Group 1 </Text>
						<AccordionIcon />
					</AccordionButton>
					<AccordionPanel>
						<Text>Text value</Text>
					</AccordionPanel>
					<AccordionItem />
					<AccordionItem />
					<AccordionItem />
					<AccordionItem />
				</AccordionItem>
				<AccordionItem bg="burlywood">
					<AccordionButton>
						<Text>Group 2</Text>
						<AccordionIcon />
					</AccordionButton>
					<AccordionPanel>
						<Text>Text value</Text>
					</AccordionPanel>
					<AccordionItem />
					<AccordionItem />
					<AccordionItem />
					<AccordionItem />
				</AccordionItem>
			</Accordion>
		</div>
	);
};

export default SidePanelFolders;
