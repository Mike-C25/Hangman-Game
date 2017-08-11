import React from 'react';
import { connect } from 'react-redux';


const Guesses = ({ guesses = [] }) => (
    <div className={'guesses'} >
		<h1>Guesses</h1>
		<div className={ 'guess-letters' }>
			{ guesses.join(',') }
		</div>
	                  </div>
);

const mapStateToProps = (state, ownProps) => {
    // 8: New state was created by the reducer. 
    // Update props for Game component based on new state
    // After returning new props, render will be called
    let { game } = state;
    let { answer, guesses } = game;

    if (!answer)
        return {}


    return Object.assign({}, {
        guesses
    });
}

export default connect(mapStateToProps)(Guesses);