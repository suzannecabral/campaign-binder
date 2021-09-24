import { IconButton, Stack } from "@chakra-ui/react";
import { ImBooks, ImHistory, ImSearch } from "react-icons/im";

import React from "react";

const SideBarButtons = (props) => {
	return (
		<div>
			<Stack bg="lightcoral">
				<IconButton
					aria-label="Show Tabs"
					icon={<ImBooks />}
					colorScheme="transparent"
				/>
				<IconButton
					aria-label="Search Notes"
					icon={<ImSearch />}
					colorScheme="transparent"
				/>
				<IconButton
					aria-label="Recent Notes"
					icon={<ImHistory />}
					colorScheme="transparent"
				/>
			</Stack>
		</div>
	);
};

export default SideBarButtons;
