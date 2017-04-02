'use strict';
var ListItemView = Backbone.View.extend({
	tagName: 'li',
	template: _.template(tplListItem()),

	events: {
		'click button.add': 'count',
		'click button.edit': 'showEditForm'
	},

	initialize: function () {
		this.render();
		this.listenTo(this.model, 'change', this.render);
	},

	render: function () {
		this.$el.html( this.template(this.model) );
		return this;
	},

	count: function () {
		this.model.getCount();
	},

	showEditForm: function () {
		mediator.pub('editCharacterData', this.model);
	}
});