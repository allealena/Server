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
    countries.forEach(function (country, i) {
       
       if(id === country.id) {
           countries.splice(i, 1);
       }
    })
}

function changeData (id, data) {
    students.forEach(function (student, i) {
    	
    	if(id === student.id) {
    		var studentData = JSON.parse(data);
    		students.splice(i, 1, studentData);
    	}
    })
}

exports.getCountries = getCountries;
exports.getStudents = getStudents;
exports.removeCountry = removeCountry;
exports.changeData = changeData;

