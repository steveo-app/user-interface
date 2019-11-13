import React from 'react';
import AbsoluteWrapper from './AbsoluteWrapper';
import { connect } from 'react-redux'
import '../css/newgame.css';
import { Spring } from 'react-spring/renderprops';

function Holes(props) {


  document.body.style.backgroundColor = "lightblue";

  return (
    <AbsoluteWrapper>
        <div className="holes">
            <h1 className="howMany">How many holes?</h1>
            <Spring
                from={{ opacity: 0 }}
                to={{ opacity: 1 }}
                delay='1500'>
                {props => <div style={props}><button className="nine">
                    9 Holes
                </button></div>}
            </Spring>
            <Spring
                from={{ opacity: 0 }}
                to={{ opacity: 1 }}
                delay='2500'>
                {props => <div style={props}><button className="eighteen">
                    18 Holes
                </button></div>}
            </Spring>
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
    )(Holes)
);
