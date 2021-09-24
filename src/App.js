import {useSelector, useDispatch} from 'react-redux';
import {useEffect} from 'react';
//import constants for action types
import {getPeopleAction} from './actions/peopleActions';
import {Button} from '@chakra-ui/react';
import './App.css';
import MainEditorWindow from './components/MainEditorWindow';
import SidePanelsWrapper from './components/SidePanelsWrapper';
import SideBarButtons from './components/SideBarButtons';


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
      <Button onClick={handleClick}>Update</Button>
      <SideBarButtons />
      <SidePanelsWrapper />
      <MainEditorWindow />
    </div>
  );
}

export default App;
