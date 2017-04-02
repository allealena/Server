window.addEventListener('load', startTime, false);

function startTime () {
    var buttonTime = document.querySelector('button[name = "getTime"]'),
        time = document.querySelector('span.time'),
        res;

    buttonTime.addEventListener('click', getMyTime, false);

    function getMyTime () {
        var xhr;

        if(window.XMLHttpRequest) {
            xhr = new XMLHttpRequest();
        } else {
            xhr = new ActiveXObject('Microsoft.XMLHTTP');
        }

        xhr.open('GET', '/getTime', true);

        xhr.onreadystatechange = function() {
            if((xhr.readyState === 4) && (xhr.status == 200)){
                res = xhr.responseText;
                time.innerHTML = res;
            } else { 
                time.innerHTML = 'sorry'; 
            }
        }

        xhr.send();
    }
}

