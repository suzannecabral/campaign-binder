import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
//import constants for action types
// import { getPeopleAction } from "./actions/peopleActions";
import { getActiveNotebook } from "./actions/notebookActions";
import { Flex } from "@chakra-ui/react";
import "./App.css";
import MainEditorWindow from "./components/MainEditorWindow";
import SidePanelsWrapper from "./components/SidePanelsWrapper";
import SideBarButtons from "./components/SideBarButtons";
import TopNavBar from "./components/TopNavBar";
// import notes from "./content/dummyNotebookSimple";

function App() {
	// const displayNotes = notes;
	const dispatch = useDispatch();

	// load pages into state when the app first loads
	useEffect(() => {
		dispatch(getActiveNotebook());
	}, []);

	return (
		<Flex className="App" height="100%" direction="column">
			<TopNavBar />
			<Flex height="100vh" width="100%" grow={1}>
				<SideBarButtons />
				<SidePanelsWrapper />
				<MainEditorWindow grow={1} />
			</Flex>
		</Flex>
	);
}

export default App;
