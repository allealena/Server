'use strict';
var Character = Backbone.Model.extend({
    defaults: {
        name: '',
        value: ''
    },

    getCount: function () {
        var count = this.value;
        count ++;
        this.set('value', count);
    }
});