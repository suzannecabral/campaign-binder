import * as types from "../constants/actionTypes.js";
import { notebooks } from "../content/dummyNotebookSimple";

// TODO use data from server in payload once server is implemented

// async/await goes in actions
export const getActiveNotebook = () => (dispatch) => {
	// add to UI state loading:true

	dispatch({ type: types.GET_ACTIVE_NOTEBOOK, payload: notebooks });

	// await fetch
	// catch in case there's a server error
	// get pages fail (send error message/state to ui)
};

export const addPages = (content) => (dispatch) => {
	dispatch({ type: types.ADD_PAGE, payload: content });
};

// TODO later: payload will be for specific notebook
export const getNotes = () => (dispatch) => {
	dispatch({ type: types.GET_NOTES });
};

export const setActiveNotebook = (notebook) => (dispatch) => {
	dispatch({ type: types.SET_ACTIVE_NOTEBOOK, payload: notebook });
};

// every server action has 3 cases
// request/success/fail
// usually separate reducer functions for each, then bring together in combineReducers
