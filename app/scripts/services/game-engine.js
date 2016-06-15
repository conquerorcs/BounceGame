/**
 * 
 */
angular.module('BounceGame').factory('GameEngine', function(GameConstants, RenderingEngine, KeyboardService, Ball, Paddle) {
	var frameCount = null;
	
	/**
	 * Responsible to make all initialization for the game
	 */
	function init() {
		frameCount = 0;
		
		// Initialize Rendering Engine
		RenderingEngine.init();
		
		// Initialize Keyboard Engine to handle keyboard events
		KeyboardService.init();
		
		// Initialize Game Objects (Ball, Paddle and Brick-Walls)
		this.redBall = Ball.createItem(100, 100, 10, 2, 2, 'red');
		
		this.greenBall = Ball.createItem(200, 200, 10, 2, 2, '#00FF00');
		
		this.paddle = Paddle.createItem(GameConstants.WINDOW_WIDTH / 2, 
									  (GameConstants.WINDOW_HEIGHT - GameConstants.PADDLE_HEIGHT),
									  GameConstants.PADDLE_WIDTH, GameConstants.PADDLE_HEIGHT, 2, 2, GameConstants.PADDLE_COLOR);
		
	}
	
	return {
		/**
		 * This method updates the game state and all objects' status while the
		 * game is still running.
		 */
		update: function() {
			frameCount++;
			
			// Update Game Objects
			
			RenderingEngine.clearScene();
			
			// Make all rendering
			Ball.update(this.redBall, frameCount);
			Ball.update(this.greenBall, frameCount);
			
			//console.log(frameCount);
			
			Paddle.update(this.paddle,frameCount);
		},
		
		run: function() {
			init();
			
			setInterval(this.update, GameConstants.UPDATE_RATE_MSEC)
		}
	
	
	}
});