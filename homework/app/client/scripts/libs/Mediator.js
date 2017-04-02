function Mediator () {
	this.listeners = {
        getStudentData: [],
        editStudentData: []
	};

	this.sub = function (evt, callback) {
        if (!this.listeners[evt]) {
            this.listeners[evt] = [];
        }
        this.listeners[evt].push(callback);
    }

    this.pub = function (evt, data) {
        if (this.listeners[evt]) {
            this.listeners[evt].forEach(function (callback) {
                callback(data);
            })
        }
    }
}