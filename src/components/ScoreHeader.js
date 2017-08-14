import React, { Component } from 'react';
import { connect } from 'react-redux';
import { TransitionGroup, Transition } from 'react-transition-group';

//change to

const duration = 750;
const defaultStyle = {
    transition: `opacity ${ duration }ms ease-in-out`,
    opacity: 1,

};
const transitionStyles = {
    entering: { opacity: 0 },
    exiting: { opacity: 0 },
};

class ScoreHeader extends Component {
    // constructor(props) {
    //     super(props);
    // }
    render() {
        let { lives = 6, wordLength = 0, foundLetters = 0 } = this.props;

        return (
            <div className="header-stats">
                <h1 className="header">Hangman Game!</h1>
                <h1>
                    <span className="attempt-count">Lives:
                        <TransitionGroup>
                            {
                                [...Array(Math.max(lives, 0))].map((_,i) => (
                                    <Transition key={i} timeout={ duration }>
                                        { (status) => (<div className="heart" style={{ 
                                            ...defaultStyle, 
                                            ...transitionStyles[status]
                                        }} />)}
                                    </Transition>
                                )) 
                            }
                        </TransitionGroup>
                    </span>
                    <span className="letter-count">Letters: { foundLetters } / { wordLength }</span>
                </h1>
            </div>
        );
    }
}

// let ScoreHeader = ({ lives = 6, attemptCount = 0, maxAttempts = 0, wordLength = 0, foundLetters = 0 }) => {

// }

const mapStateToProps = (state, ownProps) => {
    // 8: New state was created by the reducer. 
    // Update props for Game component based on new state
    // After returning new props, render will be called
    let { game } = state;
    let { stats } = game;

    return Object.assign({}, stats);
}

export default connect(mapStateToProps)(ScoreHeader);