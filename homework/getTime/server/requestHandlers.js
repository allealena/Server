function getMyTime () {
    var date = new Date(),
        hours = date.getHours(),
        min = date.getMinutes(),
        sec = date.getSeconds(),
        time;
        hours = checkTime(hours);
        min = checkTime(min);
        sec = checkTime(sec);

    time = hours.toString() +':' + min.toString() + ':' + sec.toString();

    function checkTime (value) {
    	if (value < 10) {
    		value = '0' + value;
    	}
    	return value;
    }

    return time;
}

exports.getMyTime = getMyTime;

