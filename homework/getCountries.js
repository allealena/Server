window.addEventListener('load', appCountryList, false);

function appCountryList () {
    var buttonCountries = document.querySelector('button[name = "countries"]'),
        res;

    buttonCountries.addEventListener('click', getCountries, false);

    function getCountries () {
        var xhr;

        if(window.XMLHttpRequest) {
            xhr = new XMLHttpRequest();
        } else {
            xhr = new ActiveXObject('Microsoft.XMLHTTP');
        }

        xhr.open('GET', 'countries', true);

        xhr.addEventListener('readystatechange', getResponse, false);

        function getResponse() {
            if((xhr.readyState === 4) && (xhr.status == 200)){
                var res = xhr.responseText,
                    countries = document.querySelector('div.countries_temp'),
                    countryList = showCountries(JSON.parse(res));

                countries.innerHTML = '';
                countries.appendChild(countryList);
                console.log(res);
            }
         }
    
        xhr.send();
    }

    function showCountries (countries) {
        var container = document.createElement('ul');

        countries.forEach(function (country) {
            var li = document.createElement('li');
            li.innerHTML = country.continent + " " + country.name + " " + country.area + " " + country.population;
            container.appendChild(li);
        })

        return container;
    }
}