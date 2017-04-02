'use strict';
function ControllerCountry () {
    var countries = new Countries(),
        viewNav = new ViewNavigation(),
        viewCountries;

    viewCountries = new ViewCountries({collection: countries});    
    showNavigation();

    function showNavigation () {
        var navigationCountry = viewNav.el;
        implement('navigation', navigationCountry)
    }

    function showCountries (continent) {
        var countriesCont = viewCountries.render(continent).el;
    	implement('countriesList', countriesCont)
    }
    function removeCountry (country) {
        countries.removeItem(country);
    }

    function implement (name, view) {
        var coord,
            adress,
            location;
        coord = {
            navigation: '.buttons',
            countriesList: '.countries'
        }
        adress = coord[name];
        location = $(adress).append(view);
    }

    mediator.sub('getContinent', showCountries);
    mediator.sub('deleteCountry', removeCountry);
}