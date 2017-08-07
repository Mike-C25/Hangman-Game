import React from 'react';

const GameOverScreen = ({ status }) => (
    <div className="end-screen">
		<h1>You { status }</h1>
	</div>
);

export default GameOverScreen;