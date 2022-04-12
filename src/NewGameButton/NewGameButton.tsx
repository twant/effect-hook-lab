import React, { useState } from 'react';

export default function NewGameButton(props: { clickHandler: Function }) {

    return (
        <div className="NewGameButton">
            <button onClick={() =>props.clickHandler()}>New Game</button>
        </div>
    )

}
