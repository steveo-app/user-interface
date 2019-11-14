import React, { useState } from 'react';
import AbsoluteWrapper from './AbsoluteWrapper';
import HoleType from './HoleType';
import { connect } from 'react-redux';

function Game(props) {

    let [hole, setHole] = useState(1);

    const { location, holes, players } = props.game;

    const nextHole = event => {
        event.preventDefault();

        hole++;

        setHole(hole);

        console.log(hole);
    }

    return (
        <AbsoluteWrapper>
            <button onClick={nextHole}>NEXT HOLE</button>
            <HoleType hole={hole} players={players} location={location}/>
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
