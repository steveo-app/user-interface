import React, { useState } from 'react';
import AbsoluteWrapper from './AbsoluteWrapper';

function HoleType(props) {

    return (
        <AbsoluteWrapper>
            <div className="holeBox">
                <h2>{props.location}</h2>
                <h1>Hole {props.hole}</h1>
                {props.players.map(player => {
                    return (
                        <div className="playerAndScore">
                            <h2>{player.name}</h2>
                            <input 
                                type="number" 
                                placeholder="strokes" 
                                name={player.name} 
                            />
                            <h3>Score: {player.score}</h3>
                            <button name={player.name}>ADD SCORE</button>
                        </div>
                    )
                })}
                <button onClick={props.nextHole}>NEXT HOLE</button>
            </div>
        </AbsoluteWrapper>
    )
}


export default HoleType;