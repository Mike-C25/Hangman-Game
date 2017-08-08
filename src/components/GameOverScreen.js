import React, { Component } from 'react';


import { connect } from 'react-redux';
import { onLetterGuess, startNewGame } from '../actions/game'


class GameOverScreen extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let { status, answer } = this.props;

        return (
            <div className={ 'game-over' }>
			{ status  === 'won' ? (
	        	<div className={ "end-screen" }>
					<h1>You { status }</h1>
					<h2>Click anywhere to start a new game</h2>

				</div>
        		) : (
	        	<div className={ "end-screen" } onClick={ console.log("hi") }>
					<h1>You { status }</h1>
					<h4>The answer was "{ answer }"</h4>
					<h2>Click anywhere to start a new game</h2>
				</div>
        		)
    		}
		</div>


        )
    }




}


export default GameOverScreen;