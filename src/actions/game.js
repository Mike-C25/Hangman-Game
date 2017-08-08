export const onLetterGuess = (letter) => {
    // 5: Build an action object for the reducer to build new state
    // Goto reducers/game.js
    return {
        type: 'LETTER_GUESS',
        letter: letter.toLowerCase()
    };
};

export const startNewGame = () => {
    // 5: Build an action object for the reducer to build new state
    // Goto reducers/game.js


    let movies = ["The Godfather", "The Shawshank Redemption", "Pulp Fiction", "Star Wars", 
    "Forrest Gump", "The Dark Knight", "GoodFellas", "Fight Club", 
    "Schindlers List", "Star Wars", "Indiana Jones and the Raiders of the Lost Ark", "The Matrix", 
    "Saving Private Ryan", "Gladiator", "Back to the Future", "The Silence of the Lambs", "One Flew Over the Cuckoos Nest", 
    "Casablanca", "Braveheart", "Apocalypse Now", "Citizen Kane", "The Shining", "Inception", "Seven", 
    "Titanic", "Jaws", "Jurassic Park", "The Usual Suspects", "The Good, The Bad &amp; The Ugly", "Taxi Driver", 
    "Die Hard", "Rocky", "A Clockwork Orange", "Full Metal Jacket", "The Terminator", 
    "Psycho", "The Green Mile", "The Big Lebowski", "The Departed", 
    "Alien", "A Space Odyssey", "The Wizard of Oz", "Toy Story"];
    return {
        type: 'START_NEW_GAME',
        value: movies[Math.floor(Math.random() * movies.length) + 0].toLowerCase()
    };
};