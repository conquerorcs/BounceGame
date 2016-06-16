/**
 * 
 */
angular.module('BounceGame').factory('Wall', function(Brick, GameConstants) {
	return {
		init: function(posX, posY, row, column) {
			this.wall = [];
			
			var startX = posX;
			var startY = posY;
			
			for (var idx = 0; idx < row; idx++) {
				startX = posX;
				startY += GameConstants.BRICK_HEIGHT + 10;
				for (var idy = 0; idy < column; idy++) {
					startX += GameConstants.BRICK_WIDTH + 10; 
					
					this.wall.push(Brick.create(startX, startY, Math.floor(Math.random() * 3) + 1));
				}
			}
		},
		
		getBricks: function() {
			return this.wall;
		},
		
		render: function() {
			for (var idx = 0; idx < this.wall.length; idx++) {
				Brick.render(this.wall[idx]);
			}
		}
	}
})