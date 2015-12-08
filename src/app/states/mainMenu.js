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

			var music = game.add.sprite(10,10,'buttons');
			music.frame = 11;
			music.scale.setTo(0.3);

			var sound = game.add.sprite(100,10,'buttons');
			sound.frame = 22;
			sound.scale.setTo(0.3);

			var facebook = game.add.sprite(910,10,'buttons');
			facebook.frame = 3;
			facebook.scale.setTo(0.3);

			var play = game.add.sprite(250,550,'buttons');
			play.frame = 18;
			play.scale.setTo(0.5);
			play.inputEnabled = true;
			play.anchor.set(0.5);
			play.input.useHandCursor = true;
			play.events.onInputDown.add(function() {
				anim.text.pop(play, scope, function() {
					utils.stateChange('map', scope);
				});
			}, this);

			var trophie = game.add.sprite(400,550,'buttons');
			trophie.frame = 25;
			trophie.scale.setTo(0.5);
			trophie.inputEnabled = true;
			trophie.anchor.set(0.5);
			trophie.input.useHandCursor = true;

			var ribbon = game.add.sprite(550,550,'buttons');
			ribbon.frame = 17;
			ribbon.scale.setTo(0.5);
			ribbon.inputEnabled = true;
			ribbon.anchor.set(0.5);
			ribbon.input.useHandCursor = true;

			var settings = game.add.sprite(700,550,'buttons');
			settings.frame = 19;
			settings.scale.setTo(0.5);
			settings.inputEnabled = true;
			settings.anchor.set(0.5);
			settings.input.useHandCursor = true;

			anim.state.fadeIn(this);
		},
		update() {

		}
	}
}
