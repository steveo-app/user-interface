import React, { useState } from 'react';
import AbsoluteWrapper from './AbsoluteWrapper';
import '../css/newgame.css';

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

        console.log(players)
    }

  return (
    <AbsoluteWrapper>
        <div className="playersBox">
            <h1>Which hogs are playing today?</h1>
            <form onSubmit={addPlayers}>
                <input type="text" name="player" onChange={changeHandler} />
                <button type="submit">Add Player</button>
            </form>
            <div className="addingPlayers">
                {players.map(player => {
                    return (
                        <h1>{player}</h1>
                    )
                })}
            </div>
        </div>
    </AbsoluteWrapper>
  );
}

export default Players;
