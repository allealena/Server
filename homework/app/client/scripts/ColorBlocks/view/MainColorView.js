'use strict';
var MainColorView = Backbone.View.extend({
	initialize: function(color) {
		var mainColor = $('.mainColor'),
 	    colorDel,
 	    colorClass='';

 	    colorClass += 'mainColor_' + color;       
        mainColor.css('background-color', color);  
        console.log(mainColor);  
	}
});