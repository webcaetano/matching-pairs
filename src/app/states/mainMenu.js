var anim = require('./../modules/anims');
var utils = require('./../modules/utils');

module.exports = function(game, scope) {
	var self = {};
	return {
		init() {

		},
		create() {
			var style = {
				font: "32px Arial",
				fill: "#ffffff",
				align: "center"
			};

			var logo = self.logo = game.add.sprite(scope.options.width*0.5,-150,'logo');
			logo.anchor.set(0.5);

			game.add.tween(logo).to({
				y:150
			},1000, Phaser.Easing.Bounce.Out)
			.delay(250)
			.start();

			var init = 320;
			var gap = 50;
			var g = 0;

			var survivalText = game.add.text(game.world.width * 0.5, 350, "Start", style);
			survivalText.anchor.set(0.5);
			survivalText.inputEnabled = true;
			survivalText.input.useHandCursor = true;
			survivalText.events.onInputOver.add(function() {
				anim.text.overAdd(survivalText, scope);
			}, this);
			survivalText.events.onInputOut.add(function() {
				anim.text.overRemove(survivalText, scope);
			}, this);
			survivalText.events.onInputDown.add(function() {
				anim.text.pop(survivalText, scope, function() {
					utils.stateChange('survival', scope);
				});
			}, this);

			var versionText = game.add.text(Math.ceil(game.world.width - 80), Math.ceil(game.world.height - 25), "Version "+scope.version, {
				font: "11px Arial",
				fill: "#ffffff",
				align: "center"
			});
		},
		update() {

		}
	}
}
