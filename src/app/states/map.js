var anim = require('./../modules/anims');
var utils = require('./../modules/utils');

module.exports = function(game, scope) {
	var self = {};
	return {
		init() {
			console.log('running from map state')
		},
		create() {
			anim.state.fadeIn(this);
		},
		update() {

		},
	}
}
