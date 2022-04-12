import React, { useState } from 'react';
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

    return (
        <div className="Card" >
            <div className={`card-front ${showing === "back" ? "hidden" : ""}`} onClick={handleClick}>
                {/* CARD VALUE HERE */}
            </div>
            <div className={`card-back ${showing === "front" ? "hidden" : ""}`}>
                {/* CARD QUESTION HERE */}
            </div>
        </div>
    )

}
