import React from 'react';
import logo from './logo.svg';
import './App.css';

import CardBook from './components/CardBook'
import Navbar from './components/Navbar'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <CardBook />
      </header>
    </div>
  );
}

export default App;
