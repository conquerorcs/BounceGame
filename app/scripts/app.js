angular.module('BounceGame', []).controller('GameController', function($scope, GameConstants, GameEngine) {
	$scope.boardWidth = GameConstants.WINDOW_WIDTH;
	$scope.boardHeight = GameConstants.WINDOW_HEIGHT;
	
	GameEngine.run();
	
}).constant('GameConstants', {
	WINDOW_WIDTH: 600,
	WINDOW_HEIGHT: 400,
	UPDATE_RATE_MSEC: 5,
	
	PADDLE_WIDTH: 100,
	PADDLE_HEIGHT: 10,
	PADDLE_COLOR: '#1569C7',
	
	BALL_RADIUS: 20,
	
	KEYBOARD_LEFT_CODE: 37,
	KEYBOARD_RIGHT_CODE: 39
});