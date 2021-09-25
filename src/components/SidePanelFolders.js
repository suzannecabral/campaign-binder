import {
	Accordion,
	AccordionButton,
	AccordionIcon,
	AccordionItem,
	AccordionPanel,
	Button,
	Text,
} from "@chakra-ui/react";

import React from "react";

const SidePanelFolders = (props) => {
	return (
		<div>
			<Accordion allowMultiple h="100%" w="40">
				<AccordionItem>
					<AccordionButton>
						<Text>Folder 1 </Text>
						<AccordionIcon />
					</AccordionButton>
					<AccordionPanel>
						<Button variant="ghost">Page or Folder</Button>
					</AccordionPanel>
					<AccordionItem />
					<AccordionItem />
					<AccordionItem />
					<AccordionItem />
				</AccordionItem>
				<AccordionItem>
					<AccordionButton>
						<Text>Folder 2</Text>
						<AccordionIcon />
					</AccordionButton>
					<AccordionPanel>
						<Button variant="ghost">Page or Folder</Button>
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
