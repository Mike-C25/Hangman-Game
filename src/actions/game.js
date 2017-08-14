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
    	movies: ["The Godfather", "The Shawshank Redemption", "Pulp Fiction", "Star Wars", 
    "Forrest Gump", "The Dark Knight", "GoodFellas", "Fight Club", 
    "Schindlers List", "Star Wars", "Indiana Jones", "The Matrix", 
    "Saving Private Ryan", "Gladiator", "Back to the Future", "The Silence of the Lambs", "One Flew Over the Cuckoos Nest", 
    "Casablanca", "Braveheart", "Apocalypse Now", "Citizen Kane", "The Shining", "Inception", "Seven", 
    "Titanic", "Jaws", "Jurassic Park", "The Usual Suspects", "Taxi Driver", 
    "Die Hard", "Rocky", "A Clockwork Orange", "Full Metal Jacket", "The Terminator", 
    "Psycho", "The Green Mile", "The Big Lebowski", "The Departed", 
    "Alien", "A Space Odyssey", "The Wizard of Oz", "Toy Story"],
    	foods: ["asparagus", "apples", "avacado", "alfalfa", "acorn squash",
    "almond", "arugala", "artichoke", "applesauce", "antelope", 
    "ahi tuna", "albacore tuna", "Apple juice", "Avocado roll", "Bruscetta", 
    "bacon", "black beans", "bagels", "baked beans", "BBQ", "bison", 
    "barley", "beer", "bisque", "bluefish", "bread", "broccoli", "buritto", 
    "babaganoosh", "Cabbage", "cake", "carrots", "carne asada", "celery", 
    "cheese", "chicken", "catfish", "chips", "chocolate", "chowder", 
    "clams", "coffee", "cookies", "corn", "cupcakes", "crab", "curry", 
    "cereal", "chimichanga", "dates", "dips", "duck", "dumplings", 
    "donuts", "eggs", "enchilada", "eggrolls", "English muffins", "edimame", 
    "eel sushi", "fajita", "falafel", "fish", "franks", "fondue", 
    "French toast", "French dip", "Garlic", "ginger", "gnocchi", "goose", 
    "granola", "grapes", "green beans", "Guancamole", "gumbo", "grits", 
    "Graham crackers", "ham", "halibut", "hamburger", "honey", "huenos rancheros", 
    "hash browns", "hot dogs", "haiku roll", "hummus", "ice cream", "Irish stew", 
    "Indian food", "Italian bread", "jambalaya", "jam", "jerky", "jalapeño", 
    "kale", "kabobs", "ketchup", "kiwi", "kidney beans", "kingfish", 
    "lobster", "Lamb", "Linguine", "Lasagna", "Meatballs", "Moose", 
    "Milk", "Milkshake", "Noodles", "Ostrich", "Pizza", "Pepperoni", "Porter", 
    "Pancakes", "Quesadilla", "Quiche", "Reuben", "Spinach", "Spaghetti", 
    "Tater tots", "Toast", "Venison", "Waffles", "Wine", "Walnuts", "Yogurt", 
    "Ziti", "Zucchini"],
	countries: ["Afghanistan","Albania","Algeria","Andorra","Angola",
	"Anguilla","Antigua &amp; Barbuda","Argentina","Armenia",
	"Aruba","Australia","Austria","Azerbaijan",
	"Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium",
	"Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia","Botswana",
	"Brazil","British Virgin Islands","Brunei","Bulgaria","Burkina Faso",
	"Burundi","Cambodia","Cameroon","Cape Verde","Cayman Islands","Chad",
	"Chile","China","Colombia","Congo","Cook Islands","Costa Rica",
	"Cote D Ivoire","Croatia","Cuba","Cyprus","Czech Republic",
	"Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt",
	"El Salvador","Equatorial Guinea","Estonia","Ethiopia",
	"Falkland Islands","Faroe Islands","Fiji","Finland","France",
	"French Polynesia","Gabon","Gambia","Georgia","Germany",
	"Ghana","Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala",
	"Guernsey","Guinea","Guinea Bissau","Guyana","Haiti","Honduras",
	"Hong Kong","Hungary","Iceland","India","Indonesia","Iran","Iraq",
	"Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey",
	"Jordan","Kazakhstan","Kenya","Kuwait","Kyrgyz Republic","Laos",
	"Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania",
	"Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia",
	"Maldives","Mali","Malta","Mauritania","Mauritius","Mexico","Moldova","Monaco",
	"Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Namibia",
	"Nepal","Netherlands","Netherlands Antilles","New Caledonia","New Zealand",
	"Nicaragua","Niger","Nigeria","Norway","Oman","Pakistan","Palestine",
	"Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland",
	"Portugal","Puerto Rico","Qatar","Reunion","Romania","Russia",
	"Rwanda","Samoa","San Marino", "Saudi Arabia","Senegal","Serbia",
	"Seychelles","Sierra Leone","Singapore", "Slovakia","Slovenia","South Africa",
	"South Korea","Spain","Sri Lanka", "St. Lucia","Sudan","Suriname","Swaziland","Sweden",
	"Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand", "Togo","Tonga","Tunisia","Turkey",
	"Turkmenistan","Turks &amp; Caicos","Uganda","Ukraine","United Arab Emirates",
	"United Kingdom","Uruguay","Uzbekistan","Venezuela","Vietnam",
	"Virgin Islands","Yemen","Zambia","Zimbabwe"]

    }

    var cats = Object.keys(answers);
    var randomCat = randomElem(cats);

    var catAnswers = answers[randomCat];
    var randomAnswer  = randomElem(catAnswers);



    return {
        type: 'START_NEW_GAME',
        category: randomCat,
        answer: randomAnswer
    };
};