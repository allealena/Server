'use strict';
var EditFormView = Backbone.View.extend({
    tagName: 'div',
    template: _.template(tmplForm()),

    render: function () {
        this.$el.html(this.template(this.model.toJSON()));
        return this;
    },

    events: {
        'click button.button_save' : 'saveChanges'
    },

    saveChanges: function () {
        var editData = {},
            property;

        [].forEach.call($('input'), function (item) {
            property = item.name;           
            editData[property] = item.value;
        });
        console.log(this.model);
        console.log(editData);

        this.model.set(editData);
        this.remove();
    }
});