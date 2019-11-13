import React, { useState } from 'react';
import AbsoluteWrapper from './AbsoluteWrapper';
import '../css/players.css';

function Players(props) {
    
    const [player, setPlayer] = useState('');
    const [players, setPlayers] = useState([]);

    const changeHandler = event => {
        event.preventDefault();

        setPlayer(event.target.value);
    }

    const addPlayers = event => {
        event.preventDefault();

        setPlayers(prev => [...prev, player])

        setPlayer('');

        console.log(players)
    }

    document.body.style.backgroundColor = "#4392F1";

  return (
    <AbsoluteWrapper>
        <div className="playersBox">
            <h1>Which hogs are playing today?</h1>
            <form onSubmit={addPlayers}>
                <input type="text" name="player" value={player} placeholder="Name" onChange={changeHandler} />
                <button type="submit">Add Player</button>
            </form>
            <div className="addingPlayers">
                {players.map(player => {
                    return (
                        <h1>{player}</h1>
                    )
                })}
            </div>
            <button>Next</button>
        </div>
    </AbsoluteWrapper>
  );
}

export default Players;
