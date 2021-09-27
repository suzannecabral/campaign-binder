import * as types from "../constants/actionTypes.js";

export const getPages = () => (dispatch) => {
	dispatch({ type: types.ADD_PAGE /*, payload: content */ });
};
