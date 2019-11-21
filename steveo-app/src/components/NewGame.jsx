import React, { useState } from 'react';
import AbsoluteWrapper from './AbsoluteWrapper';
import { connect } from 'react-redux'
import '../css/newgame.css';
import { addLocation } from '../actions/index';

function NewGame(props) {

    const [location, setLocation] = useState('');

    const toHolesAmount = event => {
        event.preventDefault();

        props.addLocation(location);

        props.history.push('/holes');
    }  

    const changeHandler = event => {
        event.preventDefault();

        setLocation(event.target.value);

        console.log(location)
    }

  document.body.style.backgroundColor = "lightblue";

  return (
    <AbsoluteWrapper>
        <div className="locationInput">
            <h2>Where are you playing?</h2>
            <form onSubmit={toHolesAmount}>
                <input type="text" name="location" onChange={changeHandler} placeholder="Location/Park" />
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

const mapDispatchToProps = {
    addLocation: addLocation
}

export default(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(NewGame)
);
