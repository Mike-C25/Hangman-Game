import React, { Component } from 'react';
import { connect } from 'react-redux';

import { onLetterGuess } from '../actions/game'

class GameLogic extends Component {
    // constructor(props) {
    //     super(props);
    // }

    componentDidMount() {
        document.addEventListener('keydown', this.props.onKeyDown);
    }

    componentWillUnmount() {
        document.removeEventListener('keydown', this.props.onKeyDown);
    }

    render() {
        return ( <div></div> );
    }
}

GameLogic.defaultProps = {
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
export default connect(mapStateToProps, mapDispatchToProps)(GameLogic);