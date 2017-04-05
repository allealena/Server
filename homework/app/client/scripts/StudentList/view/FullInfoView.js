'use strict';
var FullInfoView = Backbone.View.extend({ 
    tagName: 'div',
    template: _.template(tmplFullForm()),

	render: function () {
		this.$el.html(this.template(this.model.toJSON() ));
		return this;
	},

	events: {
		'click .closeFullForm' : 'removeInfoStudent'
	},

	removeInfoStudent: function () {
		this.remove();
	}
})
