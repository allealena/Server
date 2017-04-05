var countries = require('./countries'),
    students = require('./students');

function getCountries () {
	var countryList = JSON.stringify(countries);
    return countryList;   
}

function getStudents () {
	var studentList = JSON.stringify(students);
	return studentList;
}

function removeCountry (id) {
    var item = findId(countries, id);
    countries.splice(item, 1);
}

function changeData (id, data) {
    var item = findId(students, id),
        studentData = JSON.parse(data);
    
    students.splice(item, 1, studentData);
}

function findId (collection, id) {
    var findItem;
    collection.forEach(function (item, i) {
        if(id === item.id) {
            findItem = i;
        }
    })
    return findItem;
}

exports.getCountries = getCountries;
exports.getStudents = getStudents;
exports.removeCountry = removeCountry;
exports.changeData = changeData;

