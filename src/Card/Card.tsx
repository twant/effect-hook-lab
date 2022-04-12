import React, { useEffect, useState } from 'react';
import './Card.css';
import { CardType } from '../utils';

export default function Card(props: { data: CardType }) {
    const [showing, setShowing] = useState("front")
    const [clickable, setClickable] = useState(true)


    const handleClick = () => {
        if (clickable) {
            setShowing("back")
        }
    }

    // use this function as a starter to clean answers before you check if the user's guess is correct! 
    const cleanAnswer = (answer: string) => {
        const substringsToRemove = ["<i>", "</i>", '"', "<", "a ", "the "]
        substringsToRemove.forEach(substring => {
            answer = answer.replace(substring, "")
        })
        return answer.trim()
    }

    return (
        <div className="Card" >
            <div className={`card-front ${showing === "back" ? "hidden" : ""}`} onClick={handleClick} style={{ color: clickable ? "" : "white" }}>
                {/* CARD VALUE HERE */}
            </div>
            <div className={`card-back ${showing === "front" ? "hidden" : ""}`}>
                {/* CARD QUESTION HERE */}
            </div>
        </div>
    )

}
