var utils = require('./../modules/utils');

module.exports = function(game,scope){
	var assets = scope.assets = {
		audio:{
			hit1:'sounds/Hit_Hurt3.ogg',
			hit2:'sounds/Hit_Hurt41.ogg',
			music:'sounds/Sound_1.ogg'
		},
		images:{
			mgrad:'images/middle-grad.png',
			particle:'images/particle-white.png',
			life:'images/life.png',
			lifeSlot:'images/life-slot.png',
			sound:'images/sound.png',
			noSound:'images/no-sound.png',
			logo:'images/ponglogo.png'
		}
	};

	return {
		init() {
		},
		preload() {
			game.stage.disableVisibilityChange = true;
			game.stage.backgroundColor = '#A30000';
			utils.loadAssets(game,assets);
		},
		create() {
			game.state.start('mainMenu');
		}
	}
}
