import React, { Component } from 'react';
import { connect } from 'react-redux';

import ScoreHeader from './ScoreHeader'
import GameOverScreen from './GameOverScreen'
import GameLogic from './GameLogic'
import GameMainMenu from './GameMainMenu'
import Guesses from './Guesses'
import Screen from './Screen'

import { onLetterGuess, startNewGame } from '../actions/game'

class Game extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.startNewGame()
    }

    render() {

        let { gameState, answer, guesses } = this.props;


        let incorrectGuesses = guesses.reduce((acc, val) => {
            if (answer.indexOf(val) === -1) {
                acc.push(val);
            }
            return acc;
        }, [])


    	// 9: Either the state or props were changes
    	// So rerender
        return (
            <div className={ 'game-container' }>
                <GameLogic />

                { gameState === 'menu' ? (
                    <GameMainMenu />
                ) : null }

                { gameState === 'playing' ? (
                    <div>
                        <ScoreHeader />
                        <Screen />
                        <Guesses />
                    </div>
                ) : null }

                { gameState === 'won' || gameState === 'lost' ? (
                    <GameOverScreen status={ gameState } />
                ) : null }
			</div>

        );
    }
}

/*
                <ol>
                    { this.props.letters.map((a, i) => (
                        <li key={ i }>{ a }</li>
                    )) }
                </ol>
                { (this.preops.attemptCount < 15) ? (
                    <ScoreHeader 
                        attemptCount={ this.props.letters.length } 
                        maxAttempts={15} 
                        wordLength={0} 
                        foundLetters={0} />
                ) : (
                   <GameOverHeader  />
                ) }

                <Screen 
                    word={'Movie'} 
                    numberOfSpaces={9} />
*/

Game.defaultProps = {
	letters: [],
    gameState: 'playing',
    answer: 'lorem ipsum'
}

const mapStateToProps = (state, ownProps) => {
	// 8: New state was created by the reducer. 
	// Update props for Game component based on new state
	// After returning new props, render will be called
	let { game } = state;
    return Object.assign({}, {
    	guesses: game.guesses,
        answer: game.answer,
        gameState: game.status
    });
}

const mapDispatchToProps = ( dispatch ) => {
    return {
        startNewGame: function() {
            dispatch(startNewGame());
        }
    }
}

// 1: Connect Game component to redux store
export default connect(mapStateToProps, mapDispatchToProps)(Game);