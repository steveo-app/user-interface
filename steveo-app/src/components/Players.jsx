import React, { useState } from 'react';
import AbsoluteWrapper from './AbsoluteWrapper';
import '../css/players.css';
import { addPlayers } from '../actions/index';
import { connect } from 'react-redux';

function Players(props) {
    
    const [player, setPlayer] = useState({name: '', score: 0});
    const [players, setPlayers] = useState([]);

    const changeHandler = event => {
        event.preventDefault();

        setPlayer({ name: event.target.value, score: 0 });

    }

    const addPlayers = event => {
        event.preventDefault();

        if(players.length <= 5) {
            setPlayers(prev => [...prev, player]);

            setPlayer({name: '', score: 0});
        } else {
            setPlayers([]);

            setPlayer({name: '', score: 0});
        }

    }

    const removePlayer = event => {
        event.preventDefault();

        setPlayers(players.filter(player => event.target.value !== player.name))
        
        console.log(players);
    }

    const toGame = event => {
        event.preventDefault();

        props.addPlayers(players);

        props.history.push('/game')
    }

    document.body.style.backgroundColor = "#4392F1";

  return (
    <AbsoluteWrapper>
        <div className="playersBox">
            <h1>Which hogs are playing today?</h1>
            <form onSubmit={addPlayers}>
                <input type="text" name="player" value={player.name} placeholder="Name" onChange={changeHandler} />
                <button className="addPlayerButton" type="submit">Add Player</button>
            </form>
            <div className="addingPlayers">
                {players.map(player => {
                    return (
                        <div className="playerBlock">
                            <div className="playerName">{player.name}</div>
                            <button className="removePlayer" value={player.name} onClick={removePlayer} />
                        </div>
                    )
                })}
            </div>
            <button onClick={toGame} className="playersNext">Next</button>
        </div>
    </AbsoluteWrapper>
  );
}

const mapDispatchToProps = {
    addPlayers: addPlayers
}

export default(
    connect(
        null,
        mapDispatchToProps
    )(Players)
);
