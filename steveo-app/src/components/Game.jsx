import React from 'react';
import AbsoluteWrapper from './AbsoluteWrapper';
import HoleType from './HoleType';
import { connect } from 'react-redux';

function Game(props) {

    const { location, players, holes } = props.game;


    const nextHole = event => {

    if((Number(props.match.params.id) + 1) > holes) {
        props.history.push('/endgame')
    } else {
        props.history.push(`/game/${Number(props.match.params.id) + 1}`);

    }
}


    return (
        <AbsoluteWrapper>
            <HoleType hole={props.match.params.id} history={props.history} nextHole={nextHole} players={players} location={location}/>
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
    )(Game)
);
