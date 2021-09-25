import { IconButton, Stack } from "@chakra-ui/react";
import { ImBooks, ImHistory, ImSearch } from "react-icons/im";

import React from "react";

const SideBarButtons = (props) => {
	return (
		<div>
			<Stack
				bg="lightcoral"
				height="100%"
				textAlign="center"
				spacing="0"
				pl="1"
			>
				<IconButton
					aria-label="Show Tabs"
					icon={<ImBooks />}
					variant="ghost"
					size="lg"
				/>
				<IconButton
					aria-label="Search Notes"
					icon={<ImSearch />}
					variant="ghost"
					size="lg"
				/>
				<IconButton
					aria-label="Recent Notes"
					icon={<ImHistory />}
					variant="ghost"
					size="lg"
				/>
			</Stack>
		</div>
	);
};

export default SideBarButtons;
