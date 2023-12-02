import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import {Inc,Dec}from './states/reducers/index'
function App() {
  const curState=useSelector((state)=>state.number)
  const dispatch=useDispatch();
  return (
    <div className="App">
     <h1>React Redux tutroial</h1>
     <p>{curState}</p>
     <button onClick={()=>dispatch(Inc(10))}>Inc</button>
     <button  onClick={()=>dispatch(Dec(4))}>Dec</button>
    </div>
  )}export default App;