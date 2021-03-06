import React, { Component } from 'react';
import { connect } from 'react-redux';


import GameOverScreen from './GameOverScreen'
import GameLogic from './GameLogic'
import GameMainMenu from './GameMainMenu'
import Screen from './Screen'

import { startNewGame } from '../actions/game'

class Game extends Component {
    // constructor(props) {
    //     super(props);

    // }

    componentDidMount() {
        this.props.startNewGame()
    }

    render() {

        let { gameState, answer, category } = this.props;

    	// 9: Either the state or props were changes
    	// So rerender
        return (
            <div className={ 'game-container' }>

                { gameState === 'menu' ? (
                    <GameMainMenu />
                ) : null }

                { gameState === 'playing' ? (
                    <div>
                        <GameLogic />
                        <Screen category={category}>
                        </Screen>
                       
                    </div>
                ) : null }

                { gameState === 'won' || gameState === 'lost' ? (
                    <GameOverScreen status={ gameState } answer={ answer }/>
                ) : null }
			</div>
            // <Source />

        );
    }
}


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
        category: game.category,
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