export const getPeopleAction = () => dispatch => {
  dispatch({type:'getPeople',payload:['Tim','Joe','Jimmy']});
}