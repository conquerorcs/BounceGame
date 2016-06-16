angular.module('BounceGame', []).constant('GameConstants', {
	WINDOW_WIDTH: 800,
	WINDOW_HEIGHT: 500,
	UPDATE_RATE_MSEC: 5,
	
	PADDLE_WIDTH: 100,
	PADDLE_HEIGHT: 10,
	PADDLE_COLOR: '#1569C7',
	
	BALL_RADIUS: 20,
	
	KEYBOARD_LEFT_CODE: 37,
	KEYBOARD_RIGHT_CODE: 39,
	
	BRICK_WIDTH: 80,
	BRICK_HEIGHT: 20
});