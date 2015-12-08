var anim = require('./../modules/anims');

module.exports = function(game, scope) {
	return {
		init() {
			console.log('running from options state');
		},
		create() {
			var style = {
				font: "32px Arial",
				fill: "#ffffff",
				align: "center"
			};

			var logoText = game.add.text(game.world.width * 0.5, 100, "Options", {
				font: "72px Arial",
				fill: "#ffffff",
				align: "center"
			});
			logoText.anchor.set(0.5);
			anim.state.fadeIn(this);
		},
		update() {

		}
	}
}
