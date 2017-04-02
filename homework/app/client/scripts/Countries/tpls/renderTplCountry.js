'use strict';
function renderTplCountry (tpl, country) {
	var dataCountry = tpl(),
	    item,
	    countryData;

    for (var key in country) {
    	item = key + ':';
    	countryData = country[key];
    	dataCountry = dataCountry.replace(item, countryData);
    }
    return dataCountry;
}