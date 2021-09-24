import React from "react";
import { Heading } from "@chakra-ui/react";
import {
	Accordion,
	AccordionItem,
	AccordionButton,
	AccordionPanel,
	Text,
	AccordionIcon,
} from "@chakra-ui/react";

const SidePanelFolders = (props) => {
	return (
		<div>
			<Heading as="h3" size="xs">
				Folders
			</Heading>
			<Accordion defaultIndex={[0]} allowMultiple>
				<AccordionItem>
					<AccordionButton>
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
				<AccordionItem>
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
