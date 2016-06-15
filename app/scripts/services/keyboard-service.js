/**
 * KeyboardService is responsible to manage keyboard events in BounceGame.
 *  
 * @author S. Fatih ISLER
 */
angular.module('BounceGame').factory('KeyboardService', function(GameConstants) {
	var leftPressed = false;
	var rightPressed = false;
	
	/**
	 * The controls that are made when a button is pressed on keyboard  
	 */
	function keyDownHandle(event) {
		switch (event.keyCode) {
		case GameConstants.KEYBOARD_LEFT_CODE:
			leftPressed = true;
			break;
		case GameConstants.KEYBOARD_RIGHT_CODE:
			rightPressed = true;
			break;
			
		default:
			break;
		}
	}
	
	/**
	 * The controls that are made when a button is released on keyboard
	 */
	function keyUpHandle(event) {
		switch (event.keyCode) {
		case GameConstants.KEYBOARD_LEFT_CODE:
			leftPressed = false;
			break;
			
		case GameConstants.KEYBOARD_RIGHT_CODE:
			rightPressed = false;
			break;
			
		default:
			break;
		}
	}
	
	return {
		/**
		 * Attaches DOM keydown and keyup events in order to handle keyboard down and up
		 * events.
		 */
		init: function() {
			document.addEventListener('keydown', keyDownHandle, false);
			document.addEventListener('keyup', keyUpHandle, false);
		},
		
		leftPress: function() {
			return leftPressed;
		},
		
		rightPress: function() {
			return rightPressed;
		}
	}
});