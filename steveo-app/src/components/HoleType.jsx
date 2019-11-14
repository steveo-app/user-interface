import React, { useState } from 'react';
import AbsoluteWrapper from './AbsoluteWrapper';

function HoleType(props) {


    return (
        <AbsoluteWrapper>
            <h1>Hole {props.hole}</h1>
            {props.players.map(player => {
                return (
                    <h2>{player.name}</h2>
                )
            })}
        </AbsoluteWrapper>
    )
}


export default HoleType;