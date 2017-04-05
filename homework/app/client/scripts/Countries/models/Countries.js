'use strict';
var Countries = Backbone.Collection.extend({
    model: Country,
    url: '/countries',

    getCountries: function (cont) {
        var continentCountries = [],
            myContinent;
        
        this.forEach(function (item) {
            myContinent = item.isOwnContinent(cont);
            
            if (cont === 'All' || myContinent) {
                continentCountries.push(item);
            } 
        })
        return continentCountries;
    }
});
