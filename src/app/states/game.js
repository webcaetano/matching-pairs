var anim = require('./../modules/anims');
var utils = require('./../modules/utils');

module.exports = function(game, scope) {
	var self = {};
	return {
		init(params) {
			console.log('running from game state');
			if(params.level !== null && params.level !== undefined) {
				self.levelID = params.level;
			} else {
				// no level id has been passed to this state
			}
		},

		preload() {
			
		},
		create() {
			// create background image
			var background = game.add.image(0, 0, 'bg');
			background.height = game.height;
			background.width = game.width;

			// create game container
			var container = game.add.image(game.width * 0.5, game.height * 0.5, 'gameContainer');
			container.anchor.set(0.5);

			
		},
		update() {

		}
	}
}
