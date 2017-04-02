'use strict';
var CounterView = Backbone.View.extend({
    tagName: 'div',
    template: _.template(tplCounter()),

    initialize: function () {
        this.listenTo(this.model, 'change', this.render);
    },

    render: function () {
        var counter = this.model.toJSON();
        this.$el.html(this.template(counter) );
        return this;
    }
});     
