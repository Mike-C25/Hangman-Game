const calculateGameStats = (state) => {

    let { answer, guesses } = state;

    if (!answer || !guesses)
        return {};

    let foundLetters = answer.split('').reduce((acc, val) => {
        if (val === ' ') {
            return acc;
        } else {
            if (guesses.indexOf(val) !== -1) {
                return acc + 1;
            } else {
                return acc;
            }
        }
    }, 0)


    let incorrectGuesses = guesses.reduce((acc, val) => {
        if (answer.indexOf(val) === -1) {
            acc.push(val);
        }
        return acc;
    }, [])

    let attemptCount = incorrectGuesses.length;
    let maxAttempts = 15;
    let wordLength = answer.length;


    return {
        attemptCount,
        maxAttempts,
        wordLength,
        foundLetters,
        incorrectGuesses
    };
}




const game = (state = { guesses: [] }, action) => {
    switch (action.type) {
        case 'LETTER_GUESS':
            // 6: Generate new state with ALL new variables
            let guesses = [].concat(state.guesses);
            if (guesses.indexOf(action.letter) === -1) {
                guesses.push(action.letter);
            }
            // 7: Return the new state object
            // Go back to Game component

            let newState = Object.assign({}, state, { guesses: guesses });
            newState.stats = calculateGameStats(newState);

            if (newState.stats.attemptCount === 15) {
                newState.status = 'lost';
            }
            if (newState.stats.attemptCount < 15 && newState.stats.foundLetters.length === newState.stats.wordLength.length){
                newState.status = 'won'
            }

            return newState;

        case 'START_NEW_GAME':
            return Object.assign({}, state, {
                answer: action.value,
                gameState: 'playing'
            });

        default:
            return state
    }
}

export default game