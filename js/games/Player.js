
/** 
* Player Class
*/
games.Player = (function(screen, Ball) {

	/**
	 * Closure to the Player class 'this'
	 */
	var _that;

	/**
	 * Closure to the canvas context
	 */
	var _screen;

	/**
	 * Will Clear the Player if it was a movement and a redraw is required.
	 */
	var _clearPlayer = function () {
		_screen.clearRect(_that.coordinates.x, _that.coordinates.y, 30, 30);
	};

	/**
	 * Player Constructor.
	 * @param {[type]} screen            [description]
	 * @param {[type]} playerName        [description]
	 * @param {[type]} gameSize          [description]
	 * @param {[type]} playerCoordinates [description]
	 * @param {[type]} playerFillStyle   [description]
	 */
	var Player = function( screen, playerName, gameSize, playerCoordinates, playerFillStyle ) {

		_that = this;

		_screen = screen;

		this.name = playerName;

		this.gameSize = gameSize;

		this.size = { x: 30, y: 30 };

		this.center = {
			x: gameSize.x / 2,
			y: gameSize.y - this.size.x
		};

		this.coordinates = playerCoordinates;

		this.fillStyle = playerFillStyle;

		this.keyboard = new Keyboard();

	};

	/**
	 * Basic draw method of the player, it determines the position of the Player on the
	 * Screen and call canvas drawRect.
	 */
	Player.prototype.draw = function() {

		// Update the coordinates if the app user did something
		if ( this.keyboard.isDown(this.keyboard.KEYS.UP) ) {
			_clearPlayer();
			this.coordinates.y += 2;
		} else if ( this.keyboard.isDown(this.keyboard.KEYS.DOWN) ) {
			_clearPlayer();
			this.coordinates.y -= 2;
		}

		if ( this.keyboard.isDown( this.keyboard.KEYS.SPACE ) ) {
			console.log('lalalla')
			var ball = new Ball( { x: this.center.x, y: this.center.y - this.size.x }, _screen, this.gameSize );
		}


		_screen.fillStyle = this.fillStyle;
		_screen.fillRect(this.coordinates.x, this.coordinates.y, 30, 30);
	}

	return Player;

})(screen, games.Ball);