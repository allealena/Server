'use strict';
function tplListItem () {
	var tplListItem = 
	'<span class="name"><%= name %></span> '+
	'<span class="value"> <%= value %> </span>'+
	'<button class="add">add</button> ' +
	'<button class="edit">edit</button>';
	return tplListItem;
}