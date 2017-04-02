'use strict';
var Country = Backbone.Model.extend({
    defaults: {
        continent: '',
        name: '',
        area: '',
        population: ''
    },

    isOwnContinent: function (cont) {
        var myContinent = this.toJSON().continent;
        if (cont == myContinent) {
            return true;
        }
    }
});