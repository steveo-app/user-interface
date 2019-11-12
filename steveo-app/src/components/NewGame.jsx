import React from 'react';
import AbsoluteWrapper from './AbsoluteWrapper';
import { connect } from 'react-redux'
import '../css/newgame.css';

function NewGame(props) {

    const toHolesAmount = event => {
        event.preventDefault();

        props.history.push('/holes')
    }  

  document.body.style.backgroundColor = "lightblue";

  return (
    <AbsoluteWrapper>
        <div className="locationInput">
            <h2>Where are you playing?</h2>
            <form onSubmit={toHolesAmount}>
                <input type="text" placeholder="Location/Park" />
                <button type="submit">Next >></button>
            </form>
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
    )(NewGame)
);
