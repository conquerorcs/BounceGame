/**
 * 
 */
angular.module('BounceGame').factory('GameEngine', function(GameConstants, RenderingEngine, KeyboardService, Ball, Paddle, Brick, Wall) {
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
		this.redBall = Ball.createItem(GameConstants.WINDOW_WIDTH / 2, GameConstants.WINDOW_HEIGHT - 10, 10, 2, 2, 'red');
		
		this.greenBall = Ball.createItem(200, 200, 10, 2, 2, '#00FF00');
		
		this.paddle = Paddle.createItem(GameConstants.WINDOW_WIDTH / 2, 
									  (GameConstants.WINDOW_HEIGHT - GameConstants.PADDLE_HEIGHT),
									  GameConstants.PADDLE_WIDTH, GameConstants.PADDLE_HEIGHT, 3, 3, GameConstants.PADDLE_COLOR);
		
		this.wall = Wall.init(50, 50, 5, 6);
	}
	
	function control(ball, paddle) {
		if (ball.posY > paddle.posY) {
			if (ball.posX < paddle.posX || ball.posX > (paddle.posX + paddle.w)) {
				ball.state = 'dead';
			}
		}
	}
	
	function checkCollision(bricks, ball) {
		for (var idx = 0; idx < bricks.length; idx++) {
			if (bricks[idx].state > 0 && ball.state == 'alive') {
				if (ball.posX > bricks[idx].posX && ball.posX < bricks[idx].posX + GameConstants.BRICK_WIDTH && 
						ball.posY > bricks[idx].posY && ball.posY < bricks[idx].posY + GameConstants.BRICK_HEIGHT) {
						ball.dy = -ball.dy;
						
						bricks[idx].state -= 1;
					}	
			}
		}
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
			//Ball.update(this.greenBall, frameCount);
			
			//console.log(frameCount);
			
			Paddle.update(this.paddle,frameCount);
			
			control(this.redBall, this.paddle);
			
			checkCollision(Wall.getBricks(), this.redBall);
			
			Wall.render();
		},
		
		run: function() {
			init();
			
			setInterval(this.update, GameConstants.UPDATE_RATE_MSEC)
		}
	
	
	}
});