const game = (state = { letters: [] }, action) => {
    switch (action.type) {
        case 'LETTER_GUESS':
            // 6: Generate new state with ALL new variables
            let letters = [].concat(state.letters);
            if (letters.indexOf(action.letter) === -1) {
                letters.push(action.letter);
            }
            // 7: Return the new state object
            // Go back to Game component
            return Object.assign({}, state, { letters: letters });

        default:
            return state
    }
}

export default game