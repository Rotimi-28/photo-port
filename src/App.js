import React from 'react';
import logo from './logo.svg';
import './App.css';
import react from "react";
import Nav from "./components/Nav";
import About from "./components/About";

function App() {
    return (
      <div>
        <Nav></Nav>
        <main>
          <About></About>
        </main>
      </div>
    );
  }
  
  export default App;