import { Heading, Box, chakra } from "@chakra-ui/react";

import React from "react";

const MainEditorWindow = (props) => {
	return (
		<chakra.div flex="1">
			<Box bg="mistyrose" w="100%" h="100%">
				<Heading as="h1" size="md" textAlign="left" pt="4" pl="6">
					Editor Window
				</Heading>
			</Box>
		</chakra.div>
	);
};

export default MainEditorWindow;
