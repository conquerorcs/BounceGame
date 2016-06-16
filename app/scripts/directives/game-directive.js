/**
 * BounceGame directive is responsible to make initial settings on Game window
 * and triggers the game engine to start.
 * 
 * @author S. Fatih ISLER
 */
angular.module('BounceGame').directive('bounceGame', function(GameConstants, GameEngine) {
	return {
		restrict: 'E',
		replace: true, 
		template: '<canvas id="gameCanvas" style="background-color: black"></canvas>',
		link: function(scope, element, attrs) {
			element.attr('width', GameConstants.WINDOW_WIDTH);
			element.attr('height', GameConstants.WINDOW_HEIGHT);
			
			GameEngine.run();
		}
	}
})