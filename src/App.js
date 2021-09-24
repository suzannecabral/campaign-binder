import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
//import constants for action types
import { getPeopleAction } from "./actions/peopleActions";
import { Button, Flex } from "@chakra-ui/react";
import "./App.css";
import MainEditorWindow from "./components/MainEditorWindow";
import SidePanelsWrapper from "./components/SidePanelsWrapper";
import SideBarButtons from "./components/SideBarButtons";

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
	}, [getPeopleAction]);

	return (
		<div className="App">
			{people && success && <h1>Person Added</h1>}
			<Button onClick={handleClick} bg="red.a200">
				Update
			</Button>
			<Flex>
				<SideBarButtons />
				<SidePanelsWrapper />
				<MainEditorWindow />
			</Flex>
		</div>
	);
}

export default App;
