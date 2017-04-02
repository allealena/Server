'use strict';
var ViewCountries = Backbone.View.extend({
    tagName: 'div',

    initialize: function () {
        this.collection.fetch();
        this.collection.on('sync', this.render, this);
    },

    render: function (continent) {
        this.$el.html('<h1>' + continent + '</h1>');
        var countries = this.collection.getCountries(continent);
        console.log(countries);

        countries.forEach(function (country) {
            var countryView = new ViewCountryItem({model: country});
            this.$el.append(countryView.render().el);
        }, this);

        return this;
    }
});

