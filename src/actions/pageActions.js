import * as types from "../constants/actionTypes.js";

// TODO use data from server in payload once server is implemented
export const getPages = () => (dispatch) => {
	dispatch({ type: types.GET_PAGES });
};

export const addPages = (content) => (dispatch) => {
	dispatch({ type: types.ADD_PAGE, payload: content });
};
