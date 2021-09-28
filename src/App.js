// import { useSelector, useDispatch } from "react-redux";
import { /* useEffect, */ useState } from "react";
//import constants for action types
// import { getPeopleAction } from "./actions/peopleActions";
import { Flex } from "@chakra-ui/react";
import "./App.css";
import MainEditorWindow from "./components/MainEditorWindow";
import SidePanelsWrapper from "./components/SidePanelsWrapper";
import SideBarButtons from "./components/SideBarButtons";
import TopNavBar from "./components/TopNavBar";
import notes from "./content/dummyNotesSimple";

function App() {
	const displayNotes = notes;
	// const dispatch = useDispatch();
	// const people = useSelector((state) => state.peopleReducer);
	// const { success } = people;

	// const [notebook, setNotebook] = useState(displayNotes);

	// const handleClick = () => {
	// 	setTimeout(() => {
	// 		dispatch({ type: "addPerson", payload: "Ann" });
	// 	}, 5000);
	// };

	// useEffect(() => {
	// 	dispatch(getPeopleAction());
	// }, dispatch);

	return (
		<Flex className="App" height="100%" direction="column">
			{/* {people && success && <h1>Person Added</h1>}
			<Button onClick={handleClick} bg="green.300">
				Update
			</Button> */}
			<TopNavBar />
			<Flex height="100vh" width="100%" grow={1}>
				<SideBarButtons />
				<SidePanelsWrapper notes={displayNotes} />
				<MainEditorWindow grow={1} />
			</Flex>
		</Flex>
	);
}

export default App;
