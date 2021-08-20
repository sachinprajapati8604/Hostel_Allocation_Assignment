import logo from './logo.svg';
import './App.css';
import Login from './component/Login'
import Welcome from './component/Welcome'
import ChooseHostel from './component/ChooseHostel'
import { useState } from 'react';


function App() {

  return (
    <div className="App">
      <h2>Hostel Allocation </h2>   
      <Welcome />
      <Login />
      <ChooseHostel/>
    </div>
  );
}

export default App;
