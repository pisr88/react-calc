import React, { useReducer, useState } from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import Header from './components/Header/Header'
import Buttons from './components/Buttons/Buttons'

function App() {
    function reducer(state, action) {

      switch (action) {
      case '/': return ({...state, operation: '/', previousOperation: state.currentlyOperation, currentlyOperation: 0})
      case 'C': return {...state, currentlyOperation: 0, previousOperation:'', operation:''}

      case '0': if(state.currentlyOperation === 0){return {...state, currentlyOperation: action}}else {return {...state, currentlyOperation: state.currentlyOperation + action}} 

      case '+/-': return parseFloat({...state, currentlyOperation})*-1

      case '.': if(state.currentlyOperation == 0){return {...state, currentlyOperation: '0.'}} 
                if(state.currentlyOperation.indexOf('.') === -1){return {...state, currentlyOperation: state.currentlyOperation + action}} else {return {...state, currentlyOperation: state.currentlyOperation}} 

      default:
        if(state.currentlyOperation === 0){ console.log(state); return {currentlyOperation: action}} else {return {...state, currentlyOperation: state.currentlyOperation + action}} 
    } 
    }


    const [{currentlyOperation, previousOperation, operation}, dispatch] = useReducer(reducer, {currentlyOperation:0, previousOperation: '', operation:''})
    const clickBtnHandler = (btn) => {
      dispatch(btn)
    }

  return (
    <div className="App">
      <Header value={{currentlyOperation, previousOperation, operation}} />
      <Buttons onClick={(btn)=>{clickBtnHandler(btn)}}/>
    </div>
  );
}

export default App;
