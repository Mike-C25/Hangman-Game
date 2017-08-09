const randomElem = (array) => {
	return array[Math.floor(Math.random() * array.length)]
}

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

    var answers = {
    	movies: ['The Godfather'],
    	foods: ['Hamburger']
    }

    var cats = Object.keys(answers);
    var randomCat = randomElem(cats);

    var catAnswers = answers[randomCat];
    var randomAnswer  = randomElem(catAnswers);



    let movies = ["The Godfather", "The Shawshank Redemption", "Pulp Fiction", "Star Wars", 
    "Forrest Gump", "The Dark Knight", "GoodFellas", "Fight Club", 
    "Schindlers List", "Star Wars", "Indiana Jones", "The Matrix", 
    "Saving Private Ryan", "Gladiator", "Back to the Future", "The Silence of the Lambs", "One Flew Over the Cuckoos Nest", 
    "Casablanca", "Braveheart", "Apocalypse Now", "Citizen Kane", "The Shining", "Inception", "Seven", 
    "Titanic", "Jaws", "Jurassic Park", "The Usual Suspects", "Taxi Driver", 
    "Die Hard", "Rocky", "A Clockwork Orange", "Full Metal Jacket", "The Terminator", 
    "Psycho", "The Green Mile", "The Big Lebowski", "The Departed", 
    "Alien", "A Space Odyssey", "The Wizard of Oz", "Toy Story"];
    let food = [];
    return {
        type: 'START_NEW_GAME',
        category: randomCat,
        answer: randomAnswer
    };
};