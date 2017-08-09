import React from 'react';
import { connect } from 'react-redux';

let Screen = ({ board = [], category = "" }) => {

    return (
        <div className = { "screen-word" } >
            <h3>The themes are currently { category }</h3>
        	<div className={ 'letters'}>
        		{ board.map((letter, index) => (
        			<span key={ index }>{ letter === ' ' ? '\u00A0\u00A0\u00A0': letter}</span>
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
                if (guesses.indexOf(letter.toLowerCase()) !== -1) {
                    return letter + ' ';
                } else {
                    return '_ ' ;
                }
            }
        })


    return Object.assign({}, {
        board
    });
}

export default connect(mapStateToProps)(Screen);