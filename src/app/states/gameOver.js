var anim = require('./../modules/anims');
var utils = require('./../modules/utils');


module.exports = function(game, scope) {
	return {
		init() {
		},
		create() {
			var style = {
				font: "32px Arial",
				fill: "#ffffff",
				align: "center"
			};

			var logoText = game.add.text(game.world.width * 0.5, 100, "You Lost!", {
				font: "72px Arial",
				fill: "#ffffff",
				align: "center"
			});
			logoText.anchor.set(0.5);
			anim.state.fadeIn(this);

			var gameOverText = game.add.text(game.world.width * 0.5, 350, "Play Again!", style);
			gameOverText.anchor.set(0.5);
			gameOverText.inputEnabled = true;
			gameOverText.input.useHandCursor = true;
			gameOverText.events.onInputOver.add(function() {
				anim.text.overAdd(gameOverText, scope);
			}, this);
			gameOverText.events.onInputOut.add(function() {
				anim.text.overRemove(gameOverText, scope);
			}, this);
			gameOverText.events.onInputDown.add(function() {
				anim.text.pop(gameOverText, scope, function() {
					utils.stateChange('survival', scope);
				});
			}, this);
		},
		update() {

		}
	}
}
