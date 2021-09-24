import {useSelector, useDispatch} from 'react-redux';
import {useEffect} from 'react';
//import constants for action types
import {getPeopleAction} from './actions/peopleActions';
import './App.css';

function App() {
  const dispatch = useDispatch();
  const people = useSelector((state)=>state.peopleReducer);
  const {success} = people;

  const handleClick = () => {
    
    setTimeout(()=>{
      dispatch({type:'addPerson', payload:'Ann'});
    },5000);
  };

  useEffect(()=>{
    dispatch(getPeopleAction());
  },[]);

  return (
    <div className="App">
      {people && success && <h1>Person Added</h1>}
      <button onClick={handleClick}>Update</button>
    </div>
  );
}

export default App;
