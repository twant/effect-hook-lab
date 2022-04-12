import React, { useEffect, useState } from 'react';
import './App.css';
import Board from "../Board/Board"
import { callAPI, cleanData } from '../utils';
import data from "../sample_data.json"

function App() {
  const cleanedData = cleanData(data)
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="title"> Welcome to Jeopardy! </h1>
        <div className="score-box">
          <h2>Score: </h2>
        </div>
      </header>
      <Board categories={cleanedData} />
    </div>
  );
}

export default App;
