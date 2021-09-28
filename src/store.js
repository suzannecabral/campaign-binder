import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
// import {reducers} from reducer files
// import { peopleReducer } from "./reducers/peopleReducers";
import { pagesReducer } from "./reducers/pagesReducer";
import { notebook } from "./content/dummyNotebookSimple";
// each key-value pair is a different reducer
// can be accessed as part of state
// can use react-redux (useSelector, useDispatch) instead of mapStateToProps
const reducer = combineReducers({ pagesReducer });

const initialState = notebook;

const middleware = [thunk];

const store = createStore(
	reducer,
	initialState,
	composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
