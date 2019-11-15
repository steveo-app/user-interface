import React from 'react';
import AbsoluteWrapper from './AbsoluteWrapper';
import { connect } from 'react-redux';
import '../css/endgame.css';

function EndGame(props) {

    const { location, players, holes } = props.game;


    document.body.style.backgroundColor = "#4392F1";

    console.log(players);

    const biggest = Math.max.apply(Math, players.map(function(x) { return x.score; }))

    const winner = players.filter(player => {
        return player.score === biggest;
    })

    console.log(winner)

    return (
        <AbsoluteWrapper>
            <div className="endGame">
                <h1>GAME OVER</h1>
                <h2>Congrats {winner.name}!</h2>
                <div className="allScores">
                    {players.map(player => {
                        return (
                            <div className="finalCard">
                                <h3>{player.name}</h3>
                                <h4>Final score:{player.score}</h4>
                            </div>
                        )
                    })}
                </div>


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
    
}

export default(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(EndGame)
);
