
/** 
* Player Class
*/
games.Player = (function(screen) {

	var _that;

	var _screen;

	var Player = function( screen, playerName, gameSize, playerCoordinates ) {

		_that = this;

		_screen = screen;

		this.name = playerName;

		this.gameSize = gameSize;

		this.coordinates = playerCoordinates;

	};

	return Player;

})(screen);