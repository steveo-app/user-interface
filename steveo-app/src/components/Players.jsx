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

        if(players.length <= 5) {
            setPlayers(prev => [...prev, player])

            setPlayer('');
        } else {
            setPlayers([]);

            setPlayer('');
        }

    }

    const removePlayer = event => {
        event.preventDefault();

        setPlayers(players.filter(player => event.target.value !== player))
        
        console.log(players);
    }

    document.body.style.backgroundColor = "#4392F1";

  return (
    <AbsoluteWrapper>
        <div className="playersBox">
            <h1>Which hogs are playing today?</h1>
            <form onSubmit={addPlayers}>
                <input type="text" name="player" value={player} placeholder="Name" onChange={changeHandler} />
                <button className="addPlayerButton" type="submit">Add Player</button>
            </form>
            <div className="addingPlayers">
                {players.map(player => {
                    return (
                        <div className="playerBlock">
                            <div className="playerName">{player}</div>
                            <button className="removePlayer" value={player} onClick={removePlayer} />
                        </div>
                    )
                })}
            </div>
            <button className="playersNext">Next</button>
        </div>
    </AbsoluteWrapper>
  );
}

export default Players;
