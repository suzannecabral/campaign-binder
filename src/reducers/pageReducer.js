import * as types from "../constants/actionTypes.js";

export const pagesReducer = (state = {}, action) => {
	switch (action.type) {
		case types.GET_PAGES:
			return {
				...state,
				pages: action.payload,
			};
		case types.ADD_PAGE:
			return {
				...state,
				pages: [...state.pages, action.payload],
			};
		default:
			return state;
	}
};
