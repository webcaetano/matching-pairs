module.exports = function(game,scope){
	var state = {};

	state.init = function() {
	};

	state.preload = function() {
		game.scale.windowConstraints.bottom = 'visual';
		game.scale.parentIsWindow = true;
		game.input.gamepad.start();
		this.load.script('filterX', 'app/plugins/BlurX.js');
		this.load.script('filterY', 'app/plugins/BlurY.js');
	};

	state.create = function() {
		game.state.start('preload');
	};

	return state;
}
