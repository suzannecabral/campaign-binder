import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
//import constants for action types
import { getPeopleAction } from "./actions/peopleActions";
import { Button, Flex, chakra } from "@chakra-ui/react";
import "./App.css";
import MainEditorWindow from "./components/MainEditorWindow";
import SidePanelsWrapper from "./components/SidePanelsWrapper";
import SideBarButtons from "./components/SideBarButtons";
import TopNavBar from "./components/TopNavBar";

function App() {
	const dispatch = useDispatch();
	const people = useSelector((state) => state.peopleReducer);
	const { success } = people;

	const handleClick = () => {
		setTimeout(() => {
			dispatch({ type: "addPerson", payload: "Ann" });
		}, 5000);
	};

	useEffect(() => {
		dispatch(getPeopleAction());
	}, dispatch);

	return (
		<Flex className="App" height="100%" direction="column">
			{/* {people && success && <h1>Person Added</h1>}
			<Button onClick={handleClick} bg="green.300">
				Update
			</Button> */}
			<TopNavBar />
			<Flex height="100%" width="100%" grow="1">
				<SideBarButtons />
				<SidePanelsWrapper />
				<MainEditorWindow grow="1" />
			</Flex>
		</Flex>
	);
}

export default App;
