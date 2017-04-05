'use strict';
var ListItemView = Backbone.View.extend({
	tagName: 'tr',
	template: _.template(tmplRowTable()),

	events: {
		'click .more': 'showInfoStudent',
		'click .edit': 'showEditForm'
	},

	initialize: function () {
		this.render();
		this.listenTo(this.model, 'change', this.render);
	},

	render: function () {
		this.$el.html( this.template(this.model.toJSON() ) );
		return this;
	},

	showInfoStudent: function () {
		mediator.pub('getStudentData', this.model);
	},

	showEditForm: function () {
		mediator.pub('editStudentData', this.model);
	}
});