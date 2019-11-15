import React from 'react';
import AbsoluteWrapper from './AbsoluteWrapper';
import { connect } from 'react-redux';

function EndGame(props) {

    const { location, players, holes } = props.game;


    return (
        <AbsoluteWrapper>
            end of the game!!!
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
