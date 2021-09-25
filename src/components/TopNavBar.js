import React from "react";
import { Heading, Stack, Box, Text, Button } from "@chakra-ui/react";

const TopNavBar = (props) => {
	return (
		<div>
			<Box p="2" bg="lightcoral">
				<Heading as="h1" size="xs" textAlign="left" pl="2" pt="0.5">
					Campaign Binder
				</Heading>
			</Box>
		</div>
	);
};

export default TopNavBar;
