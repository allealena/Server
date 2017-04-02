var countries = require('./countries');

function getCountries () {
    var countryList = JSON.stringify(countries);
    return countryList;   
}

exports.getCountries = getCountries;

