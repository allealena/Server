'use strict';
var Countries = Backbone.Collection.extend({
    model: Country,
    url: './countries',

    getCountries: function (cont) {
        var continentCountries = [],
            countryJSON,
            myContinent;
        
        this.forEach(function (item) {
            myContinent = item.isOwnContinent(cont);
            countryJSON = item.toJSON();
            
            if (cont === 'All' || myContinent) {
                continentCountries.push(item);
            } 
        })
        return continentCountries;
    }
});
