import React from 'react';
import AbsoluteWrapper from './AbsoluteWrapper';
import { connect } from 'react-redux'
import '../css/newgame.css';

function Holes(props) {


  document.body.style.backgroundColor = "lightblue";

  return (
    <AbsoluteWrapper>
        <div className="holes">
            how many holes
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
