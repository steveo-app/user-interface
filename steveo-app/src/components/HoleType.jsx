import React, { useState } from 'react';
import AbsoluteWrapper from './AbsoluteWrapper';
import '../css/holestyles.css';
import { connect } from 'react-redux';
import { scoresToStore } from '../actions/index';

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
        
        event.target.style.backgroundColor = '#00ff00';
        event.target.innerHTML = 'ADDED';
    }

    //sends scores to store

    const submitScores = event => {
        event.preventDefault();

        const greenButtons = Array.from(document.getElementsByClassName("successAdd"));
        console.log(greenButtons);

        const allEqual = arr => arr.every( v => v.innerHTML === arr[0].innerHTML )
        
        console.log(allEqual(greenButtons));

            props.scoresToStore(updatedPlayers)
            props.nextHole();
           
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
                                    className="successAdd"
                                    name={player.name} 
                                    onClick={addScore}
                                >
                                    ADD SCORE
                                </button>
                            </div>
                        )
                    })}
                </div>
                <button 
                    className="nextHole" 
                    onClick={submitScores}
                >
                            NEXT HOLE
                </button>
            </div>
        </AbsoluteWrapper>
    )
}

const mapStateToProps = (state) => {
    return {
        game: state.game
    }
}

const mapDispatchToProps = {
    scoresToStore: scoresToStore
}

export default(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(HoleType)
);
