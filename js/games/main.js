
(function(window) {

	/** 
	* Id of the canvas. 
	*/
	var canvasContainerId = "js-game-canvas";

	games.main = (function( canvasContainerId ) {

		/**
		* Holds a reference to the game
		*/
		var _game;

		// Public Interface of the main module
		return {
			init: function() {
				_game = new games.Pong(canvasContainerId);
				_game.start();
			}
		};

	})( canvasContainerId );

	window.onload = function() {
		games.main.init();
	};

})(window);

