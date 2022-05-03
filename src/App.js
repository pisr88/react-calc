import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import Header from './components/Header/Header'
import Buttons from './components/Buttons/Buttons'

function App() {


  return (
    <div className="App">
      <Header />
      <Buttons />
    </div>
  );
}

export default App;
