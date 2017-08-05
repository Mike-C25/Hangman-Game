export const onLetterGuess = (letter) => {
	// 5: Build an action object for the reducer to build new state
	// Goto reducers/game.js
	return {
		type: 'LETTER_GUESS',
		letter: letter.toLowerCase()
	};
};