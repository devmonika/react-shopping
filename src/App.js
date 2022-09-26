
import { useState } from 'react';
import AllMovie from './AllMovie/AllMovie';
import './App.css';
import Navbar from './navbar/Navbar';

function App() {
  const[count, setCount] = useState(0);
  function countIncrease(){
    setCount(count + 1);
  }
  
  return (
    <div className="App">
      {/* <Counter></Counter> */}
      <Navbar count={count}></Navbar>
      <AllMovie countIncrease={countIncrease}> </AllMovie>
    </div>
  );
}

export default App;
