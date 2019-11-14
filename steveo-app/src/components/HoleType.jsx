import React, { useState } from 'react';
import AbsoluteWrapper from './AbsoluteWrapper';
import '../css/holestyles.css';

function HoleType(props) {

    const [ updatedPlayers, updatePlayers ] = useState(props.players);

    const [ playerScore, setPlayerScore ] = useState();

    const changeHandler = event => {
        event.preventDefault();

        const currentPlayer = props.players.filter(player => {
            return player.name === event.target.name
        })

        setPlayerScore(currentPlayer.score)
    }

    /// addscores to specific players current score then approves it

    const addScore = event => {
        event.preventDefault();

        const playerStroke = document.querySelector(`input[name=${event.target.name}]`).value;

        const newArr = updatedPlayers.map(player => {
            if(player.name === event.target.name) {
                return { ...player, score: (Number(player.score) + Number(playerStroke)) }
            } else {
                return player;
            }
        })

        updatePlayers(newArr);

        console.log(event.target)
        
        event.target.style.backgroundColor = 'red';
    }
    
    document.body.style.backgroundColor = "#50C9CE";

    return (
        <AbsoluteWrapper>
            <div className="holeBox">
                <h1>{props.location}</h1>
                <h2>Hole {props.hole}</h2>
                <div className="playersScores">
                    {props.players.map((player, i) => {
                        return (
                            <div key={i} className="playerAndScore">
                                <h3>{player.name}</h3>
                                <input 
                                    type="number" 
                                    placeholder="strokes" 
                                    name={player.name} 
                                    onChange={changeHandler}
                                    value={playerScore}
                                />
                                <button 
                                    name={player.name} 
                                    onClick={addScore}
                                >
                                    ADD SCORE
                                </button>
                            </div>
                        )
                    })}
                </div>
                <button onClick={props.nextHole}>NEXT HOLE</button>
            </div>
        </AbsoluteWrapper>
    )
}


export default HoleType;