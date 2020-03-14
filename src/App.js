import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';

function App() {
  return (
    <div>
      <Header></Header>
      <Shop></Shop>

      <div className="footer">
      <p>©Ema-Jhon Online Shop (ReactJS). Editor: A Hadi </p>
      </div>
    </div>

    
  );
}

export default App;
