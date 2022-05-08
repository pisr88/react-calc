import React, { useReducer, useState } from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import Header from './components/Header/Header'
import Buttons from './components/Buttons/Buttons'

function App() {
    function reducer(state, action) {

    switch (action) {
      case 'C': return state = 0
      default:
        if(state === 0 && action === 0 ){ console.log('action'); return state}
        return state = state + action 
    }


    }

    const [currentlyOperation, dispatch] = useReducer(reducer, 0)
    const [clickBtn, setClickBtn] = useState(0);
    
    const resetHeader = (btn) =>{
      if(btn === 'C'){ setClickBtn(0)}
    }

    const floadNumber = () => {
      
    }
    
    
    const clickBtnHandler = (btn) => {
      dispatch(btn)
      setClickBtn(clickBtn+btn)
    }

  return (
    <div className="App">
      <Header value={currentlyOperation} />
      <Buttons onClick={(btn)=>{clickBtnHandler(btn)}}/>
    </div>
  );
}

export default App;
