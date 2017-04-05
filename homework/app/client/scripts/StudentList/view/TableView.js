'use strict';
var TableView = Backbone.View.extend({
    tagName: 'table',
    className: 'studentsList',

    initialize: function () {
        this.collection.fetch();
        this.collection.on('add', this.renderItem, this);
    },

    render: function () {
    	var header = tmplTableHeader();
    	this.$el.append(header);

        return this;
    },

    renderItem: function (student) {
        var studentView = new ListItemView({model: student});
        this.$el.append(studentView.render().el);
    }
});