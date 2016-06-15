/**
 * RenderingEngine service is responsible to handle all rendering operation in BounceGame.
 * 
 * @author S. Fatih ISLER 
 */
angular.module('BounceGame').factory('RenderingEngine', function(GameConstants) {
	return {
		/**
		 * Get the canvas context from DOM
		 */
		init: function() {
			this.context = document.getElementById('gameCanvas').getContext('2d');
		},
		
		/**
		 * Responsible to clear scene for each frame updates
		 */
		clearScene: function() {
			this.context.clearRect(0, 0, GameConstants.WINDOW_WIDTH, GameConstants.WINDOW_HEIGHT);
		},
		
		/**
		 * Renders a simple circle with specified position, radius and color
		 * 
		 * @param posX: The X-position of circle to be rendered
		 * @param posY: The Y-position of circle to be rendered
		 * @param radius: The radius of circle
		 * @param color: The color of circle
		 */
		renderCircle: function(posX, posY, radius, color) {
			this.context.beginPath();
			
			// Render the circle with specified parameters
			this.context.arc(posX, posY, radius, 0, Math.PI * 2);
			this.context.fillStyle = color;
			this.context.fill();
			
			this.context.closePath();
		}
	}
});