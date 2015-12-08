module.exports = function(game,scope){
	return {
		init() {
		},
		preload() {
			game.scale.windowConstraints.bottom = 'visual';
			game.scale.parentIsWindow = true;

			//game.load.image('loading-bg', require('../../media/images/loadingBarBG.png'));
			//game.load.image('loading-fg', require('../../media/images/loadingBarFG.png'));

			game.input.gamepad.start();
		},
		create() {
			game.state.start('preload');
		}
	}
}
