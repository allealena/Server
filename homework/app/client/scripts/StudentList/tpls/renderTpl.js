'use strict';
function renderTpl (tmpl, studentJSON) {
	var dataStudent = tmpl,
	    item,
	    studentProp;

    for (var key in studentJSON) {
    	item = key + ':';
    	studentProp = studentJSON[key];
    	dataStudent = dataStudent.replace(item, studentProp);
    }
    return dataStudent;
}