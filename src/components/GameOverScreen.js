import React, { Component } from 'react';


import { connect } from 'react-redux';
import { startNewGame } from '../actions/game'


class GameOverScreen extends Component {
   
    // constructor(props) {
    //     super(props);
    // }

    componentDidMount(){
    	document.addEventListener('click', this.props.onClick)
    }

    componentWillUnmount(){
    	document.removeEventListener('click', this.props.onClick)
    }	

 
    render() {
        let { status, answer } = this.props;

        return (
            <div className={ 'game-over' }>
			{ status  === 'won' ? (
	        	<div className={ "end-screen won" }>
					<h1>You { status } !</h1>
					<h4>You guessed the right answer: "{ answer }"</h4>
                    <div className="reward">You've gained 1 <div className="heart"></div></div>
					<h2> Click anywhere to continue</h2>

				</div>
        		) : (
	        	<div className={ "end-screen lost" } >
					<h1>You { status } !</h1>
					<h4>The right answer was: "{ answer }"</h4>
					<h2>Click anywhere to start a new game</h2>
				</div>
        		)
    		}
		</div>


        )
    }




}



const mapDispatchToProps = (dispatch) => {
	return{
		onClick: (event) => {
			dispatch(startNewGame());
		}
	}
}



export default connect(null, mapDispatchToProps)(GameOverScreen);