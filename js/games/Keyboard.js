

// from https://vimeo.com/105955605
var Keyboard  = function() {

	this.KEYS = {
		UP: 38,
		DOWN: 40,
		SPACE: 32
	};

	var keyState = {};

	window.onkeydown = function(event) {
		keyState[event.keyCode] = true;
	};

	window.onkeyup = function(event) {
		keyState[event.keyCode] = false;
	};

	this.isDown = function(keyCode) {
		return keyState[keyCode];
	};
};