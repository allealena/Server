'use strict';
var ColorCounter = Backbone.Model.extend({
    defaults: {
    	color: '',
	    currentCount: 0
    },

    events: {
    	'click div.button': 'countClick'
    },

    countClick: function () {
    	var count = this.toJSON().currentCount;
    	count ++;
    	this.set('currentCount', count);
    }
});
   
