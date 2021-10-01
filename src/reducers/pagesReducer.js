import * as types from "../constants/actionTypes.js";
// import notebooks from "../content/dummyNotebookTest";

// const initialState = notebooks;

export const pagesReducer = (currentState = { pages: [] }, action) => {
	switch (action.type) {
		case types.ADD_PAGE:
			// return currentState;
			return {
				...currentState,
				pages: [...currentState.pages, action.payload],
			};
		case types.SET_ACTIVE_NOTEBOOK:
			return {
				...currentState,
				activeNotebook: action.payload,
			};
		case types.GET_PAGES:
			return {
				...currentState,
				pages: action.payload,
			};
		default:
			return currentState;
	}
};
// wait for server response successful post
// add success: true
// useEffect listens for .success
// useEffect triggers a get request to the server to refresh data

// get pages success
// - error
// - fail
