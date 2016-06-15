angular.module('BounceGame', []).controller('GameController', function($scope, GameConstants, GameEngine) {
	$scope.boardWidth = GameConstants.WINDOW_WIDTH;
	$scope.boardHeight = GameConstants.WINDOW_HEIGHT;
	
	GameEngine.run();
	
}).constant('GameConstants', {
	WINDOW_WIDTH: 600,
	WINDOW_HEIGHT: 400,
	UPDATE_RATE_MSEC: 5,
	
});