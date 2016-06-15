/**
 * Paddle service is responsible to manage Paddle's creation and management in BounceGame.
 * 
 * @author S. Fatih ISLER
 */
angular.module('BounceGame').factory('Paddle', function(RenderingEngine, KeyboardService, GameConstants) {
	/**
	 * Handle rendering operations for the given ball item.
	 * 
	 * @param ball: The ball to be rendered by RenderingEngine
	 */
	function render(paddle) {
		RenderingEngine.renderRectangle(paddle.posX, paddle.posY, paddle.w, paddle.h, paddle.color)
	}
	
	return {
		/**
		 * This method initializes a paddle item with specified parameter
		 * 
		 * @param posX: The X-position of paddle
		 * @param posY: The Y-position of paddle
		 * @param deltaX: The delta value of paddle displacement on X-coordinate
		 * @param deltaY: The delta value of paddle displacement on Y-coordinate
		 * 
		 * @return A new paddle object
		 */
		createItem: function(posX, posY, width, height, deltaX, deltaY, color) {
			var paddle = {
				posX: posX,
				posY: posY,
				w: width,
				h: height,
				dx: deltaX,
				dy: deltaY,
				color: color
			}
			
			return paddle;
		},
		
		/**
		 * Updates the given paddle's state based on current frame
		 */
		update: function(paddle, frameCount) {
			if (KeyboardService.leftPress() && paddle.posX > 0) {
				paddle.posX -= paddle.dx;
			}
			
			if (KeyboardService.rightPress() && paddle.posX < (GameConstants.WINDOW_WIDTH - GameConstants.PADDLE_WIDTH)) {
				paddle.posX += paddle.dx;
			}
			
			render(paddle);
		}
	}
});