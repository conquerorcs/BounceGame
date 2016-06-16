/**
 * Ball object is one of the fundamental item in BounceGame. This service is responsible
 * to manage Ball object.
 * 
 * @author S. Fatih ISLER
 * 
 */
angular.module('BounceGame').factory('Ball', function(RenderingEngine, GameConstants) {
	/**
	 * Handle rendering operations for the given ball item.
	 * 
	 * @param ball: The ball to be rendered by RenderingEngine
	 */
	function render(ball) {
		if (ball.state !== 'dead') {
			if (ball.posY >= ball.radius) {
				RenderingEngine.renderCircle(ball.posX, ball.posY - ball.radius / 2, ball.radius, ball.color);	
			} else {
				RenderingEngine.renderCircle(ball.posX, ball.radius, ball.radius, ball.color);
			}
		}
	}
	
	/**
	 * This method checks whether the ball moves in horizontal boundaries or not.
	 * 
	 * @returns Returns true if ball exits the horizontal boundaries. Otherwise, it
	 * returns false.
	 */
	function checkHorizontalMove(ball) {
		return (ball.posX + ball.radius) > GameConstants.WINDOW_WIDTH || 
			   (ball.posX - ball.radius) < 0
	}
	
	/**
	 * This method checks whether the ball moves in vertical boundaries or not.
	 * 
	 * @returns Returns true if ball exits the vertical boundaries. Otherwise, it
	 * returns false.
	 */
	function checkVerticalMove(ball) {
		return (ball.posY + ball.radius) > GameConstants.WINDOW_HEIGHT || 
			   (ball.posY - ball.radius) < 0
	}
	
	return {
		/**
		 * This method initializes a ball item with specified parameter
		 * 
		 * @param posX: The X-position of ball
		 * @param posY: The Y-position of ball
		 * @param radius: The radius of ball
		 * @param deltaX: The delta value of ball displacement on X-coordinate
		 * @param deltaY: The delta value of ball displacement on Y-coordinate
		 * 
		 * @return A new ball object
		 */
		createItem: function(posX, posY, radius, deltaX, deltaY, color) {
			var ball = {
				posX: posX,
				posY: posY,
				radius: radius,
				dx: deltaX,
				dy: deltaY,
				color: color,
				state: 'alive'
			}
			
			return ball;
		},
		
		/**
		 * Updates the given ball state based on current frame
		 */
		update: function(ball, frameCount) {
			// Horizontal Movement Check
			if (checkHorizontalMove(ball)) {
				ball.dx = -ball.dx;
			}
			
			// Vertical Movement Check
			if (checkVerticalMove(ball)) {
				ball.dy = -ball.dy;
			}
			
			// Update ball position on X and Y coordinates
			ball.posX += ball.dx;
			ball.posY += ball.dy;
			
			// Reflect ball update on scene
			render(ball);
		}
	}
});