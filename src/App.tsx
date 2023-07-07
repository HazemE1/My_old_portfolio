import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from "./pages/Home";

function App() {



  return (
      <Home/>
  );
}

function LoadingScreen() {
  return <div className="App">
    <header className="App-header">
      <div className={"App-logo"}>
        <img src={logo} alt="logo"/>
        <p>
          Welcome <code>to</code> Hazem Elkhalil's Portfolio.
        </p>
      </div>
    </header>
  </div>
}

export default App;