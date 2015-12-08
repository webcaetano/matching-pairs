var anim = require('./../modules/anims');
var utils = require('./../modules/utils');

module.exports = function(game, scope) {
	var self = {};
	return {
		init() {
			console.log('running from map state')
		},
		create() {

			// create background
			var background = game.add.image(0, 0, 'bg');
			background.height = game.height;
			background.width = game.width;

			// create banner
			var banner = game.add.image(game.width / 2, game.height / 2, 'mapBanner');
			banner.scale.setTo(0.7);
			banner.anchor.setTo(0.5);

			anim.state.fadeIn(this);
		},
		update() {

		},
	}
}
