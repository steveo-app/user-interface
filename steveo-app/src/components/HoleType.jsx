import React, { useState } from 'react';
import AbsoluteWrapper from './AbsoluteWrapper';

function HoleType(props) {

    const [holeScore, setHoleScore] = useState();
    const [playerScore, setPlayerScore] = useState();

    const changeHandler = event => {
        event.preventDefault();

        const currentPlayer = props.players.filter(player => {
            return player.name === event.target.name
          })

        setHoleScore(currentPlayer.tempScore);

    }

    const addToScore = event => {
        event.preventDefault();

        const currentPlayer = props.players.filter(player => {
            return player.name === event.target.name
          })

        setPlayerScore(currentPlayer.tempScore + currentPlayer.score)

        console.log(playerScore);
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
                            <input type="number" placeholder="strokes" name={player.name} onChange={changeHandler} value={holeScore} />
                            <h3>Score: {player.score}</h3>
                            <button name={player.name} onClick={addToScore}>ADD SCORE</button>
                        </div>
                    )
                })}
                <button onClick={props.nextHole}>NEXT HOLE</button>
            </div>
        </AbsoluteWrapper>
    )
}


export default HoleType;