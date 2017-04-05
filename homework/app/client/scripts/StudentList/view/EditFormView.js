'use strict';
var EditFormView = Backbone.View.extend({
    tagName: 'div',
    template: _.template(tmplForm()),

    render: function () {
        this.$el.html(this.template(this.model.toJSON()));
        return this;
    },

    events: {
        'click .button_save' : 'saveChanges',
        'click .button_close' : 'hideEdit',
    },

    hideEdit: function () {
        this.remove();
    },

    saveChanges: function () {
        var editData = {},
            property;

        this.$('input').each(function (i, item) {
            property = item.name;           
            editData[property] = item.value;
        });
        console.log(editData);

        this.model.save(editData);
        this.remove();
    }
});