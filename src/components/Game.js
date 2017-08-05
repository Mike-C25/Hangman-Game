import React, { Component } from 'react';
import { connect } from 'react-redux';

import ScoreHeader from './ScoreHeader';
import Screen from './Screen';

import { onLetterGuess } from '../actions/game'

class Game extends Component {
    constructor(props) {
        super(props);
    }

	// 2: Component mounted
    componentDidMount() {
		// 3: Listen for keydown on document
		// Call onKeyDown dispatch handler 
    	document.addEventListener('keydown', this.props.onKeyDown);
    }

    componentWillUnmount() {
    	document.removeEventListener('keydown', this.props.onKeyDown);
    }

    render() {
    	// 9: Either the state or props were changes
    	// So rerender
        return (
            <div>
            	<ol>
            		{ this.props.letters.map((a, i) => (
            			<li key={ i }>{ a }</li>
            		)) }
            	</ol>
				<ScoreHeader 
					attemptCount={ this.props.letters.length } 
					maxAttempts={15} 
					wordLength={0} 
					foundLetters={0} />

				<Screen 
					word={'hi'} 
					numberOfSpaces={9} />
			</div>
        );
    }
}

Game.defaultProps = {
	letters: []
}

const mapStateToProps = (state, ownProps) => {
	// 8: New state was created by the reducer. 
	// Update props for Game component based on new state
	// After returning new props, render will be called
	let { game } = state;
    return Object.assign({}, {
    	letters: game.letters
    });
}

const mapDispatchToProps = ( dispatch ) => {
    return {
    	onKeyDown: (event) => {
    		// 4: Check is event is valid and dispatch onLetterGuess action
    		// Goto actions/game.js
    		if (/^[a-zA-Z]$/.test(event.key)) {
	    		dispatch(onLetterGuess(event.key));
    		}
    	}
    }
}

// 1: Connect Game component to redux store
export default connect(mapStateToProps, mapDispatchToProps)(Game);