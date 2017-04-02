'use strict';
var StudentsList = Backbone.Collection.extend({
	model: Student,
	url: './students',

	getStudentList: function () {
		var studentList = [],
		    studentJSON;

		this.forEach(function (item) {
            studentJSON = item.toJSON();
            studentList.push(studentJSON);
		})
		return studentList;
	} 
}); 


