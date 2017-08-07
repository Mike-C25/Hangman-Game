import React from 'react';
import { connect } from 'react-redux';

let ScoreHeader = ({ attemptCount = 0, maxAttempts = 0, wordLength = 0, foundLetters = 0 }) => {
    return (
        <h1>
			<span>Attempts: { attemptCount } / { maxAttempts }</span>
			<br/>
			<span>Letters: { foundLetters } / { wordLength }</span>
		</h1>
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