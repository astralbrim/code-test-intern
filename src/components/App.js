import React from 'react';
import Header from './header';
import RadioButtons from './radioButtons';
import Chart from './chart';
import { apiKey } from "../config"

import './App.css';

function App() {

  return (
    <div className="App">
        <Header />
        <RadioButtons />
        <Chart />
    </div>
  );
}

export default App;
