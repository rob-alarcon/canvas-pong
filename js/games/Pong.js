
/** 
* Main Game Class
*/
games.Pong = (function(Player) {

	var _that;

	var _canvas;

	/**
	* Screen where we're going to draw
	*/
	var _screen;

	/**
	* Reponsible of running the main game logic. 
	*/
	var _tick = function() 
	{
		_update();
		_draw( _screen, _that.size );
		requestAnimationFrame( _tick );
	};

	var _update = function()
	{
		
	};

	var _draw = function( screen, size ) 
	{
		for( var i = 0; i < _that.players.length; i++ ) {
			_screen.fillRect(_that.players[i].coordinates.x, _that.players[i].coordinates.y, 30, 30);
		}
	};

	/**
	* Game constructor function that will be returned as the only public 
	* interface.
	*/
	var Pong = function( canvasContainerId ) {

		_that = this;
		

		_canvas = document.getElementById( canvasContainerId );

		_screen = _canvas.getContext('2d');

		/**
		* Screen Size of the game
		*/
		this.size = {
			x: _canvas.width,
			y: _canvas.height
		};

		this.players = [
			new Player( _screen, 'Player 1', this.size, { x: 0, y: this.size.y / 2 }),
			new Player( _screen, 'Player 2', this.size, { x: this.size.x - 30, y: this.size.y / 2 })
		];

		_tick();

	};

	/** 
	* Explicitly starts the game.
	*/
	Pong.prototype.start = function() {
		console.log('should be called just once.')
	};

	return Pong;

})(games.Player);