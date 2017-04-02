'use strict';
var ViewNavigation = Backbone.View.extend({
    tagName: 'div',
    navigation: tplNav(),

    initialize: function () {
        this.render();
    },

    render: function () {
        this.$el.html(this.navigation);
        return this;
    },

    events: {
        'click button' : 'showCountries'
    },

    showCountries: function () {
        var continent = event.target.name;
        mediator.pub('getContinent', continent);
    } 
});

