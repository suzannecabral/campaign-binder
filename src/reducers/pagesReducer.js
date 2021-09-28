import * as types from "../constants/actionTypes.js";
import notebook from "../content/dummyNotebookTest";

const initialState = notebook;

export const pagesReducer = (currentState = initialState, action) => {
	switch (action.type) {
		case types.ADD_PAGE:
			// return currentState;

			return {
				...currentState,
				pages: [...currentState.pages, action.payload],
			};
		case types.GET_PAGES:
			return currentState;
		default:
			return currentState;
	}
};

export default pagesReducer;
