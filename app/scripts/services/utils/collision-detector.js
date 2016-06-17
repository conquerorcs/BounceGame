/**
 * CollisionDetector service is a utility service in order to decide a collision
 * event between game object on scene.
 * 
 * @auther S. Fatih ISLER
 */
angular.module('BounceGame').factory('CollisionDetector', function(GameConstants) {
	/**
	 * This method checks whether the ball and paddle collide in some point(s)
	 * or not on X-coordinate. If there occurs a collission between two, then it
	 * returns true. Otherwise it returns false.
	 * 
	 */
	function checkCollision(ball, paddle) {
		return ball.posX + 2 * GameConstants.BALL_RADIUS > paddle.posX && 
			   ball.posX < paddle.posX + GameConstants.PADDLE_WIDTH
	}
	
	return {
		/**
		 * This method makes the required check for ball and paddle. When the
		 * ball and the paddle has a possibility of touching then check whether
		 * they are collided or not.
		 */
		isValidCollision: function(ball, paddle) {
			if (ball.posY + 2 * GameConstants.BALL_RADIUS >= paddle.posY) {
				return checkCollision(ball, paddle);
			}
			
			return true;
		}
	}
});