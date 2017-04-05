'use strict';
var ViewCountries = Backbone.View.extend({
    tagName: 'div',

    initialize: function () {
        this.collection.fetch();
        this.collection.on('add', this.render, this);
    },

    render: function (continent) {
        this.$el.html('<h1>' + continent + '</h1>');
        var countries = this.collection.getCountries(continent);

        countries.forEach(this.renderItem, this);
        return this;
    },

    renderItem: function (country) {
        var countryView = new ViewCountryItem({model: country});
        this.$el.append(countryView.render().el);
    }
});

