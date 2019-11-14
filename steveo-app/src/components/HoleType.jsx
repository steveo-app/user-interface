import React, { useState } from 'react';
import AbsoluteWrapper from './AbsoluteWrapper';

function HoleType(props) {

    const [playerScore, setPlayerScore] = useState(0);

    const changeHandler = event => {
        event.preventDefault();

        setPlayerScore(event.target.value);

        const result = props.players.filter(player => {
            return player.name === event.target.name
          })

        console.log(result);
    }

    const addToScore = event => {

    }

    return (
        <AbsoluteWrapper>
            <div className="holeBox">
                <h2>{props.location}</h2>
                <h1>Hole {props.hole}</h1>
                {props.players.map(player => {
                    return (
                        <div className="playerAndScore">
                            <h2>{player.name}</h2>
                            <input type="number" placeholder="strokes" name={player.name} onChange={changeHandler} value={playerScore} />
                            <h3>Score: {player.score}</h3>
                        </div>
                    )
                })}
                <button onClick={props.nextHole}>NEXT HOLE</button>
            </div>
        </AbsoluteWrapper>
    )
}


export default HoleType;