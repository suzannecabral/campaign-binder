import React from "react";
import SidePanelFolders from "./SidePanelFolders";
import SidePanelPages from "./SidePanelPages";
import { Heading, Flex } from "@chakra-ui/react";

const SidePanelsWrapper = (props) => {
	return (
		<div>
			<Heading as="h2" size="sm">
				Notebook Name
			</Heading>
			<Flex>
				<SidePanelFolders />
				<SidePanelPages />
			</Flex>
		</div>
	);
};

export default SidePanelsWrapper;
