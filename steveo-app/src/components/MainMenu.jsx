import React from 'react';
import AbsoluteWrapper from './AbsoluteWrapper';
import { connect } from 'react-redux'
import '../css/mainmenu.css';
import piggy2 from '../img/piggy-bank.png';

function MainMenu(props) {

    const toNewGame = event => {
        event.preventDefault();

        props.history.push('/newgame')
    }

  document.body.style.backgroundColor = "#006494";

  return (
    <AbsoluteWrapper>
      <div className="mainMenu">
        <h1 className="welcome">Hey there, {props.user.firstname}!</h1>
        <img alt="piggy" className="piggyChar" src={piggy2} />
        <button className="friendsButton">Friends</button>
        <button className="scoresButton">Scores</button>
        <button onClick={toNewGame} className="newGame">NEW GAME</button>
      </div>
    </AbsoluteWrapper>
  );
}

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}

export default(
    connect(
        mapStateToProps,
        null
    )(MainMenu)
);
