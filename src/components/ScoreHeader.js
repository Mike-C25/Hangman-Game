import React from 'react';
import { connect } from 'react-redux';

let ScoreHeader = ({ attemptCount = 0, maxAttempts = 0, wordLength = 0, foundLetters = 0 }) => {
    return (
        <div className="header-stats">
        <h1 className="header">Hangman Game!</h1>
            <h1>
        		<span className="attempt-count">Attempts: { attemptCount } / { maxAttempts }</span>
        		<span className="letter-count">Letters: { foundLetters } / { wordLength }</span>
        	</h1>
        </div>
    );
}

const mapStateToProps = (state, ownProps) => {
    // 8: New state was created by the reducer. 
    // Update props for Game component based on new state
    // After returning new props, render will be called
    let { game } = state;
    let { stats } = game;

    return Object.assign({}, stats);
}

export default connect(mapStateToProps)(ScoreHeader);