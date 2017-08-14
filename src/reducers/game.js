const calculateGameStats = (state) => {

    let { answer, guesses, lives, guessStatus } = state;

    if (!answer || !guesses)
        return {};


    let foundLetters = answer.split('').reduce((acc, val) => {
        if (val === ' ') {
            return acc;
        } else {
            if (guesses.indexOf(val.toLowerCase()) !== -1) {
                return acc + 1;
            } else {
                return acc;
            }
        }
    }, 0)




    let incorrectGuesses = guesses.reduce((acc, val) => {

        if (answer.toLowerCase().indexOf(val.toLowerCase()) === -1) {
            acc.push(val);
        }
        return acc;
    }, [])

    let attemptCount = incorrectGuesses.length;
    // let lives = 6;
    // console.log(attemptCount);

    // lives = lives - attemptCount;
    // console.log(lives);

    // console.log(guessStatus);
    if (guessStatus === "incorrect") {
        lives -= 1;
    }

    lives = lives < 0 ? 6 : lives;

    let tA = answer;
    tA = tA.replace(/\s/g, '');;
    let wordLength = tA.length;



    return {
        attemptCount,
        lives,
        wordLength,
        foundLetters,
        incorrectGuesses
    };
}




const game = (state = { guesses: [], lives: 6, guessStatus: "invalid"}, action) => {
    switch (action.type) {
        case 'LETTER_GUESS':
            {

                // console.log(guessed);
                // 6: Generate new state with ALL new variables
                let guesses = [].concat(state.guesses);
                let gStatus = "";
                if (state.answer.toLowerCase().indexOf(action.letter) === -1) {
                    gStatus = "incorrect";
                } else {
                    // console.log(guesses, action.letter);
                    if (guesses.indexOf(action.letter) === -1) {
                        gStatus = "correct";
                    } else {
                        gStatus = "invalid";
                    }
                }

                if (guesses.indexOf(action.letter) === -1) {
                    guesses.push(action.letter);
                }
                // 7: Return the new state object
                // Go back to Game component



                let newState = Object.assign({}, state, { guesses: guesses });
                newState.stats = calculateGameStats(newState);
                newState.lives = newState.stats.lives;
                newState.guessStatus = gStatus;



                if (newState.lives  === 0) {
                    newState.status = 'lost';
                }
                if (newState.lives > 0 && newState.stats.foundLetters === newState.stats.wordLength) {
                    newState.status = 'won'
                    newState.lives++;

                }

                return newState;

            }

        case 'START_NEW_GAME':
            {
                let newState = Object.assign({}, state, {
                    answer: action.answer,
                    category: action.category,
                    status: 'playing',
                    lives: state.lives === 0 ? 6 : state.lives,
                    guessStatus: "invalid",
                    guesses: []
                });
                newState.stats = calculateGameStats(newState);
                return newState;
            }


        default:
            return state;
    }
}

export default game