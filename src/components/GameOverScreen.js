import React, { Component } from 'react';


import { connect } from 'react-redux';
import { onLetterGuess, startNewGame } from '../actions/game'


class GameOverScreen extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        document.addEventListener('keydown', this.props.onKeyDown);
        
    }

    componentWillUnmount() {
        document.removeEventListener('keydown', this.props.onKeyDown);
        
    }



    render() {
        let { status, answer } = this.props;

        return (
            <div className={ 'game-over' }>
			{ status  === 'won' ? (
	        	<div className="end-screen">
					<h1>You { status }</h1>
					<h2>Click anywhere to start a new game</h2>

				</div>
        		) : (
	        	<div className="end-screen">
					<h1>You { status }</h1>
					<h2>Click anywhere to start a new game</h2>
					<h2>The answer was { answer }</h2>
				</div>
        		)
    		}
		</div>


        )
    }




}

const mapStateToProps = (state, ownProps) => {
    let { game } = state;
    let { status, answer } = game;

    return Object.assign({}, status, answer)
}

const mapDispatchToProps = (dispatch) => {
    return {
        startNewGame: () => { dispatch(startNewGame());}
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(GameOverScreen);