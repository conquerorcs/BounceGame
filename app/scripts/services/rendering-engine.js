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
		 * Loads sprite image for the object that is located in specified path
		 * 
		 * @param spritePath:
		 *            The relative path of sprite image
		 * @param width:
		 *            The width of each sprite in sprite sheet
		 * @param height:
		 *            The height of each sprite in sprite sheet
		 * 
		 * @return Returns a sprite object that contains information about
		 *         loaded sprite such as number of image in each row or column
		 */
		loadSprite: function(spritePath, width, height) {
			var spriteImage = new Image();
			spriteImage.src = spritePath;
			
			return {
				image: spriteImage,
				w: width,
				h: height,
				numOfElementInRow: spriteImage.width / width,
				numOfElementInCol: spriteImage.height / height,
				totalElement: spriteImage.width / width * spriteImage.height / height
			}
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
		},
		
		/**
		 * Renders a rectange on canvas with specified position, width, height
		 * and color
		 * 
		 * @param posX: The X-position of rectangle to be rendered
		 * @param posY: The Y-position of rectangle to be rendered
		 * @param width: The width of rectangle
		 * @param height: The height of rectangle
		 * @param color: The color of rectangle
		 * 
		 */
		renderRectangle: function(posX, posY, width, height, color) {
			this.context.beginPath();
			
			this.context.rect(posX, posY, width, height);
			this.context.fillStyle = color;
			this.context.fill();
			
			this.context.closePath();
		},
		
		/**
		 * Renders a sprite image in specified location on canvas. In order to
		 * animate image, it takes frame count and computes the next sprite
		 * image to be rendered.
		 * 
		 * @param sprite:
		 *            The sprite object
		 * @param posX:
		 *            The X-position that the sprite will be rendered on canvas
		 * @param posY:
		 *            The Y-position that the sprite will be rendered on canvas
		 * @param frameCount:
		 *            The current frame count in running application
		 * 
		 */
		renderSprite: function(sprite, posX, posY, frameCount) {
			var scaledFrameCount = Math.floor(frameCount % sprite.totalElement);;
			
			this.context.drawImage(sprite.image, 
					sprite.w * Math.floor(scaledFrameCount / sprite.numOfElementInRow), 
					sprite.h * Math.floor(scaledFrameCount / sprite.numOfElementInCol), 
					sprite.w, sprite.h, 
					posX, posY, 
					sprite.w, sprite.h);
		}
	}
});