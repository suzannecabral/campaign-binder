import * as types from "../constants/actionTypes.js";
import notebook from "../content/dummyNotebookSimple";

const initialState = notebook;
export const pagesReducer = (currentState = initialState, action) => {
	switch (action.type) {
		case types.ADD_PAGE:
			const updatedPages = { ...currentState.sections[0].tabs[0].pages };
			console.log(updatedPages);
			updatedPages.push(action.payload);
			return {
				pages: updatedPages,
				...currentState,
			};
		case types.GET_PAGES:
			return {
				currentState,
				// ...state,
				// pages: action.payload,
			};
		default:
			return currentState;
	}
};

export default pagesReducer;
