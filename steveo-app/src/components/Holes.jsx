import React, { useState } from 'react';
import AbsoluteWrapper from './AbsoluteWrapper';
import { connect } from 'react-redux'
import '../css/newgame.css';
import { Spring } from 'react-spring/renderprops';
import { addHoles } from '../actions/index';

function Holes(props) {
  
  const toPlayers9 = event => {

      event.preventDefault();

      props.addHoles(9)

      props.history.push('/players');
  }

  const toPlayers18 = event => {

      event.preventDefault();

      props.addHoles(18)

      props.history.push('/players');
  }

  document.body.style.backgroundColor = "lightblue";

  return (
    <AbsoluteWrapper>
        <div className="holes">
            <h1 className="howMany">How many holes?</h1>
            <Spring
                from={{ opacity: 0 }}
                to={{ opacity: 1 }}
                delay='1500'>
                {props => <div style={props}><button onClick={toPlayers9} className="nine">
                    9 Holes
                </button></div>}
            </Spring>
            <Spring
                from={{ opacity: 0 }}
                to={{ opacity: 1 }}
                delay='2500'>
                {props => <div style={props}><button onClick={toPlayers18} className="eighteen">
                    18 Holes
                </button></div>}
            </Spring>
        </div>
    </AbsoluteWrapper>
  );
}


const mapDispatchToProps = {
    addHoles: addHoles
}

export default(
    connect(
        null,
        mapDispatchToProps
    )(Holes)
);