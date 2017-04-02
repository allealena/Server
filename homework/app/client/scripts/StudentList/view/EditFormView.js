'use strict';
var EditFormView = Backbone.View.extend({
    tagName: 'div',
    template: _.template(tmplForm()),

    render: function () {
        this.$el.html( this.template(this.model.toJSON() ) );
        return this;
    },

    events: {
        'click button.button_save' : 'saveChanges',
        'click button.button_close' : 'hideEdit',
    },

    hideEdit: function () {
        this.remove();
    },

    saveChanges: function () {
        var editData = {},
            property;

        [].forEach.call($('input'), function (item) {
            property = item.name;           
            editData[property] = item.value;
        });

        this.model.save(editData);
        this.remove();
    }
});