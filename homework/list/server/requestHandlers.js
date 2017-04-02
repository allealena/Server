var characters = require('./characters');

function getCharacters () {
	var namesList = JSON.stringify(characters);
    return namesList;   
}

exports.getCharacters = getCharacters;

