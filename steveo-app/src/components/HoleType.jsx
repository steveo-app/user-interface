import React, { useState } from 'react';
import AbsoluteWrapper from './AbsoluteWrapper';
import '../css/holestyles.css';
import { connect } from 'react-redux';
import { scoresToStore } from '../actions/index';

function HoleType(props) {

    const [ updatedPlayers, updatePlayers ] = useState(props.players);

    const [ playerScore, setPlayerScore ] = useState();

    const [ count, setCount ] = useState(0);

    const [ cPlayer, setCPlayer ] = useState([{name: '', score: 0}]);

    const [ playerCard, setPlayerCard ] = useState(false);

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
                console.log(player.score)
                return { ...player, score: (Number(player.score) + Number(playerStroke)) }
            } else {
                return player;
            }
        })

        const redoScore = updatedPlayers.map(player => {
            if(player.name === event.target.name) {
                return { ...player, score: 0 }
            } else {
                return player;
            }
        })


        if(event.target.innerHTML === 'ADD SCORE') {
            updatePlayers(newArr);
            setCount(prev => prev + 1);
            console.log(count);
            event.target.style.backgroundColor = '#00ff00';
            event.target.innerHTML = 'ADDED';

            console.log(updatedPlayers)
        } else {
            updatePlayers(redoScore);
            event.target.style.backgroundColor = 'rgb(112, 198, 255)';
            event.target.innerHTML = 'ADD SCORE';
        }
        
    }

    //sends scores to store

    const submitScores = event => {
        event.preventDefault();

        const greenButtons = Array.from(document.getElementsByClassName("successAdd"));

        const allEqual = arr => arr.every( v => v.innerHTML === arr[0].innerHTML)
        
        if(allEqual(greenButtons)) {
            props.scoresToStore(updatedPlayers)
            document.getElementsByClassName('allset').className = 'successAdd';
            props.nextHole();
        } else {
            console.log('Need to add all scores')
        }
           
        }

    const showPlayerScore = event => {
        event.preventDefault();

        const currentPlayer = props.players.filter(player => {
            return player.name === event.target.name
        })

        document.getElementsByClassName('showPlayerScore').id = `${event.target.name}`;

        document.getElementsByClassName('showPlayerScore').title = `${event.target.score}`;

        setCPlayer(currentPlayer);
        setPlayerCard(true);


    }

    const hidePlayerScore = event => {
        event.preventDefault();

        setPlayerCard(false);
    }

    document.body.addEventListener('click', hidePlayerScore, true);
    
    document.body.style.backgroundColor = "#50C9CE";


    return (
        <AbsoluteWrapper>
            <div className="holeBox">
                <h1>{props.location}</h1>
                <h2>Hole {props.hole}</h2>
                <div className="playersScores">
                <div style={playerCard ? {display: 'block'} : {display: 'none'}} className="showPlayerScore">{cPlayer[0].name} {cPlayer[0].score}</div>
                    {props.players.map((player, i) => {
                        return (
                            <div key={i} className="playerAndScore">
                                <button name={player.name} title={player.score} onClick={showPlayerScore} className="playerButton">{player.name}</button>
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
                <button style={(props.players.length === count) ? {display: "block"} : {display: "none"}}
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
