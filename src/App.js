import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import Header from './components/Header/Header'
import Buttons from './components/Buttons/Buttons'

function App() {

    const [clickBtn, setClickBtn] = useState(0);
    const clickBtnHandler = (btn) => {
       if( clickBtn === 0 && btn !== ','){ 
         setClickBtn(btn)
      }
        else{ 
          btn = clickBtn + btn 
        }
        setClickBtn(btn)
    }


  return (
    <div className="App">
      <Header value={clickBtn} />
      <Buttons onClick={(btn)=>{clickBtnHandler(btn)}}/>
    </div>
  );
}

export default App;
