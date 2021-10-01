import {
	Accordion,
	AccordionButton,
	AccordionIcon,
	AccordionItem,
	AccordionPanel,
	Button,
	Icon,
	Text,
	Box,
} from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";

import { BiDockLeft } from "react-icons/bi";
import { MdLibraryBooks, MdFolderOpen } from "react-icons/md";
import { IoMdFolder, IoMdFolderOpen } from "react-icons/io";

import React from "react";

const SidePanelFolders = (props) => {
	const storePages = useSelector((state) => state.pages);
	const handleClick = (notebook) => {};
	return (
		<div>
			{/* <Accordion allowMultiple h="100%" w="40">
				<AccordionItem>
					<AccordionButton>Valewood</AccordionButton>
					<AccordionItem>
						<AccordionButton>NPCs</AccordionButton>
					</AccordionItem>
				</AccordionItem>
			</Accordion> */}
			<Accordion allowMultiple h="100%" w="40">
				{storePages[0] &&
					storePages[0].tabs.map((section) => {
						return (
							// add onClick to dispatch the action
							//onclick will be the function that dispatches

							<AccordionItem>
								<AccordionButton>{section.title}</AccordionButton>
							</AccordionItem>
						);
					})}
				{/* {storePages[0].sections} */}
			</Accordion>
		</div>
	);
};

export default SidePanelFolders;
