function Observer () {
	this.listeners = {};
}

Observer.prototype.addListener = function (evt, callback) {
        if (!this.listeners[evt]) {
            this.listeners[evt] = [];
        }
        this.listeners[evt].push(callback);
    }

Observer.prototype.triggerEvent = function (evt) {
        if (this.listeners[evt]) {
            this.listeners[evt].forEach(function (callback) {
                callback();
            })
        }
    }
