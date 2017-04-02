'use strict';
var ButtonView = Backbone.View.extend({
    tagName: 'div',
    template: _.template(tplButton()),

    events: {
        'click div': 'pickColor'
    },

    render: function () {
        var colorBlock = this.model.toJSON();
        this.$el.html(this.template(colorBlock) );
        return this;
    },

    pickColor: function () {
        var color = this.model.toJSON().color,
            mainColor;
        this.model.countClick();
        mainColor = new MainColorView(color);
    }
});