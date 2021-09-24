// import constants for cases
// import * as actionTypes from '../constants.js'


export const peopleReducer = (state={}, action) => {
  switch(action.type){
    case 'getPeople':
      return {
        ...state,
        people:action.payload,
        success:false
        // payload is the people data from server
      }
    case 'addPerson':
      return {
        ...state,
        people:[...state.people,action.payload],
        success:true
        // not going to dispatch this until get success back from server
        // can set this action off with a useEffect
      }
    default: 
      return state
  }
};