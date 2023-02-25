import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home';
import Counter from './Components/Counter';
import About from './Pages/About';
import { useState } from 'react';

function App() {

  const [isHome, setIsHome] = useState(true)

  const onClickHandler=()=>{
    setIsHome((preState)=>!preState);
  }

  return (
    <>
    <button onClick={onClickHandler}>{isHome?"Go to About":"Go to Home"}</button>
    {isHome?<Home />:<About />}
    </>
  );
}

export default App;
