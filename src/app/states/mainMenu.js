var anim = require('./../modules/anims');
var utils = require('./../modules/utils');

module.exports = function(game, scope) {
	var self = {};
	return {
		init() {
			console.log('running from main menu state')
		},
		create() {
			var background = game.add.image(0, 0, 'bg');
			background.height = game.height;
			background.width = game.width;

			anim.state.fadeIn(this);
		},
		update() {

		}
	}
}
