import React from 'react';
import { connect } from 'react-redux';

import Guesses from './Guesses'
import ScoreHeader from './ScoreHeader'

let Screen = ({ board = [], category = "" }) => {

    return (

        <div className ={ `screen-word ${category}`}>
            <ScoreHeader />
            <div className="theme-text">
                <h3>The theme is currently <span>{ category }</span></h3>
            </div>
            <div className={`${category}`}> </div>
            <div className={ 'letters'}>
                { board.map((letter, index) => (
                    <span key={ index }>{ letter === ' ' ? '\u00A0\u00A0\u00A0': letter}</span>
                ))}     
            </div>
            <Guesses />
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
                return '_ ';
            }
        }
    })


    return Object.assign({}, {
        board
    });
}

export default connect(mapStateToProps)(Screen);