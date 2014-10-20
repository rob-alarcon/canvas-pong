
/** 
* Ball Class
*/
games.Ball = (function(screen) {

	var _that;

	var _screen;

	var Ball = function( coordinates, screen, gameSize ) {

		_that = this;

		_screen = screen;

		this.size = {
			x: 10,
			y: 10
		}

		this.gameSize = gameSize;

		this.coordinates = coordinates;

		this.draw();

	};

	Ball.prototype.draw = function() {
		_screen.fillStyle = "000000";
		_screen.fillRect(this.coordinates.x, this.coordinates.y, this.size.x, this.size.y );
	}

	return Ball;

})(screen);