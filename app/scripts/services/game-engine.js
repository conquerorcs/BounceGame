/**
 * 
 */
angular.module('BounceGame').factory('GameEngine', function(GameConstants, RenderingEngine, KeyboardService, CollisionDetector, Ball, Paddle, Brick, Wall) {
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
		
		// Initialize Game Items in Bounce Game
		initGameItems();
	}
	
	/**
	 * Creates and assigns the initial values to game objects.
	 */
	function initGameItems() {
		this.redBall = Ball.createItem(GameConstants.WINDOW_WIDTH / 2, 
									  GameConstants.WINDOW_HEIGHT - 50, 
									  2, 2, 'red', 'images/red.png');
		
		this.paddle = Paddle.createItem(GameConstants.WINDOW_WIDTH / 2, 
				  						(GameConstants.WINDOW_HEIGHT - GameConstants.PADDLE_HEIGHT),
				  						GameConstants.PADDLE_WIDTH, GameConstants.PADDLE_HEIGHT, 3, 3, GameConstants.PADDLE_COLOR);
	}
	
	return {
		/**
		 * This method updates the game state and all objects' status while the
		 * game is still running.
		 */
		update: function() {
			frameCount++;
			
			// Update scene until the ball is moving in secure location. 
			if (CollisionDetector.isValidCollision(this.redBall, this.paddle)) {
				RenderingEngine.clearScene();
				
				Ball.update(this.redBall, frameCount);
				Paddle.update(this.paddle,frameCount);
			}
		},
		
		run: function() {
			init();
			
			setInterval(this.update, GameConstants.UPDATE_RATE_MSEC)
		}
	
	
	}
});