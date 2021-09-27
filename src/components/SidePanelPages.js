import React from "react";
import { setState } from "react";
import { Heading, Stack, Box, Text, Button } from "@chakra-ui/react";
import notes from "../content/dummyNotesSimple.js";

const SidePanelPages = (props) => {
	return (
		<div>
			<Stack h="100%" w="100%">
				<Button variant="ghost">Page 1</Button>
				<Button variant="ghost">Page 2</Button>
				<Button variant="ghost">Page 3</Button>
				<Button variant="ghost">Page 4</Button>
			</Stack>
		</div>
	);
};

export default SidePanelPages;
