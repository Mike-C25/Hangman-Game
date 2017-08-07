import React from 'react';
import { connect } from 'react-redux';

let Screen = ({ board = [] }) => {
    return (
        <div className = { "screen-word" } >
        	<div className={ 'letters'}>
        		{ board.map((letter) => (
        			<span>{ letter }</span>
        		))}
        	</div>
        </div>
    )
}

const mapStateToProps = (state, ownProps) => {
    // 8: New state was created by the reducer. 
    // Update props for Game component based on new state
    // After returning new props, render will be called
    let { game } = state;
    let { answer, guesses } = game;

    if (!answer)
    	return {}

    let board = answer.split('').map((letter) => {
            if (letter === ' ') {
                return ' ';
            } else {
                if (guesses.indexOf(letter) !== -1) {
                    return letter + ' ';
                } else {
                    return '_    ' ;
                }
            }
        })


    return Object.assign({}, {
        board
    });
}

export default connect(mapStateToProps)(Screen);