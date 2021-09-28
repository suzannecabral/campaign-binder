import React from "react";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import shortid from "shortid";
import {
	Flex,
	FormControl,
	FormLabel,
	Input,
	IconButton,
	Button,
	VisuallyHidden,
} from "@chakra-ui/react";
import { AddIcon, CheckIcon } from "@chakra-ui/icons";

const SidePanelPages = (props) => {
	const { notes } = props;
	const dispatch = useDispatch();
	const initialPageName = "Untitled Page";
	const pages = notes.sections[0].tabs[0].pages;

	const [displayPages, setDisplayPages] = useState(pages);
	const [newPageName, setNewPageName] = useState(initialPageName);
	const [isEditing, setIsEditing] = useState(false);
	// const [globalPages, setGlobalPages] = useState(pages);

	const handleClickNewPage = () => {
		setIsEditing(true);
	};

	const handleChange = (e) => {
		setNewPageName(e.target.value);
	};

	// [?]	Should this be in a promise/async?
	const addNewPage = () => {
		let updatedPages = [...displayPages];
		updatedPages.push({
			id: shortid.generate(),
			title: newPageName,
			content: "",
		});
		setDisplayPages(updatedPages);
	};

	const onSubmit = (e) => {
		setIsEditing(false);
		addNewPage();
		setNewPageName(initialPageName);
	};

	return (
		<div width="100%">
			<Flex direction="column">
				{displayPages.map((page) => {
					return (
						<Button variant="ghost" key={page.id}>
							{page.title}
						</Button>
					);
				})}
				{!isEditing && (
					<IconButton
						aria-label="Submit Page Name"
						variant="primary"
						icon={<AddIcon />}
						onClick={handleClickNewPage}
					/>
				)}
				{isEditing && (
					<div>
						<FormControl>
							<VisuallyHidden>
								<FormLabel>New Page:</FormLabel>
							</VisuallyHidden>
							<Input
								type="text"
								name="pageName"
								placeholder="Untitled Page"
								onChange={handleChange}
								width="100%"
							></Input>
						</FormControl>
						<IconButton
							aria-label="Submit Page Title"
							variant="primary"
							icon={<CheckIcon />}
							type="submit"
							onClick={onSubmit}
						/>
					</div>
				)}
			</Flex>
		</div>
	);
};

export default SidePanelPages;
