import React, { useEffect, useState } from 'react';
import './App.css';
import Board from "../Board/Board"
import { callAPI, cleanData } from '../utils';
import NewGameButton from '../NewGameButton/NewGameButton';
import data from "../sample_data.json"

const newGame = () => {
  return ("hi")
}

function App() {
  const [score, setScore] = useState(0)
  const [data, setData] = useState({})

  const updateScore = (scoreToAdd: number) => {
    setScore(score + scoreToAdd)
  }
  useEffect(() => {
    callAPI()
      .then(data => {
        console.log(data)
        const cleanedData = cleanData(data)
        setData(cleanedData)
      })
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="title"> Welcome to Jeopardy! </h1>
        <h2>Score: {score}</h2>
      </header>
      <Board updateScore={updateScore} categories={data} />
      <NewGameButton clickHandler={newGame} />
    </div>
  );
}

export default App;