/**
 * 
 */
angular.module('BounceGame').factory('Brick', function(RenderingEngine, GameConstants) {
	return {
		create: function(posX, posY, state) {
			var brick = {
				posX: posX,
				posY: posY,
				w: GameConstants.BRICK_WIDTH,
				h: GameConstants.BRICK_HEIGHT,
				color: 'green',
				state: state	
			}
			
			return brick;
		},
		
		createItem: function(posX, posY, width, height, color) {
			var brick = {
				posX: posX,
				posY: posY,
				w: width,
				h: height,
				color: color,
				state: 1
			}
			
			return brick;
		},
		
		/**
		 * Handle rendering operations for the given ball item.
		 * 
		 * @param ball: The ball to be rendered by RenderingEngine
		 */
		render: function(brick) {
			var color = 'red';
			if (brick.state > 0) {
				switch (brick.state) {
				case 3:
					color = 'green';
					break;
				case 2:
					color = 'yellow'
				default:
					break;
				}
								
				RenderingEngine.renderRectangle(brick.posX, brick.posY, brick.w, brick.h, color);
					
			}
		},
		
		update: function(brick, ball) {
			// TODO check whether ball hits to brick or not
			
			this.render(brick);
		}
		
	}
});