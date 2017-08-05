import React from 'react';

let ScoreHeader = ({ attemptCount=0, maxAttempts=0, wordLength=0, foundLetters=0 }) => {
	return (
		<h1>
			<span>Attempts: { attemptCount } / { maxAttempts }</span>
			<br/>
			<span>Letters: { foundLetters } / { wordLength }</span>
		</h1>
	);
}

export default ScoreHeader;