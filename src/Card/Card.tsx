import React, { useEffect, useState } from 'react';
import './Card.css';
import { CardType } from '../utils';

export default function Card(props: { data: CardType, updateScore: Function }) {
    const [showing, setShowing] = useState("front")
    const [guess, setGuess] = useState("")
    const [clickable, setClickable] = useState(true)
    const [correctAnswer, setCorrectAnswer] = useState("")

    useEffect(() => {
        setCorrectAnswer(cleanAnswer(props.data.answer.toLowerCase()))
    }, [])

    const handleClick = () => {
        if (clickable) {
            setShowing("back")
        }
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setGuess(e.target.value)
    }

    const handleSubmit = () => {
        const guessIsCorrect = guess.toLowerCase() == correctAnswer
        const value = props.data.value ? props.data.value : 0
        const scoreToAdd = guessIsCorrect ? value : value * -1
        props.updateScore(scoreToAdd)
        setShowing("front")
        setClickable(false)
    }

    const cleanAnswer = (answer: string) => {
        const substringsToRemove = ["<i>", "</i>", "a ", "the "]
        substringsToRemove.forEach(substring => {
            answer.replace(substring, "")
        })
        answer.replace("/'", "'")
        return answer
    }

    return (
        <div className="Card" >
            <div className={`card-front ${showing === "back" ? "hidden" : ""}`} onClick={handleClick} style={{ color: clickable ? "" : "white" }}>
                <h4 className="card-value">{props.data.value}</h4>
                <p className={`answer ${clickable ? "hidden" : ""}`}>Answer: {correctAnswer}</p>
            </div>
            <div className={`card-back ${showing === "front" ? "hidden" : ""}`}>
                <p className="card-question">{props.data.question}</p>
                <input type="text" name="answer-box" onChange={(e) => handleChange(e)} />
                <button onClick={() => handleSubmit()}>Guess!</button>
            </div>
        </div>
    )

}
