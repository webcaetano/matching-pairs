module.exports = function(game,scope){
	return {
		init() {
		},
		preload() {
			game.scale.windowConstraints.bottom = 'visual';
			game.scale.parentIsWindow = true;
			game.input.gamepad.start();
			this.load.script('filterX', 'app/plugins/BlurX.js');
			this.load.script('filterY', 'app/plugins/BlurY.js');
		},
		create() {

			game.state.start('preload');

		}
	}
}
