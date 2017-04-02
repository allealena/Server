'use strict';
function tplListItem () {
	var tplListItem = 
	'<span class="name"><%= name %></span>'+
	'<span class="area"><%= area %></span>'+
	'<span class="population"><%= population %></span>'+
	'<span class="icon like"></span>'+
	'<span class="icon dislike"></span>'+
	'<span class="icon kill"></span>';
	return tplListItem;
}