var anim = require('./../modules/anims');
var utils = require('./../modules/utils');

module.exports = function(game, scope) {
	var self = {};
	return {
		init() {
			console.log('running from main menu state')
		},
		create() {
			// create background and set to fit canvas
			var background = game.add.image(0, 0, 'bg');
			background.height = game.height;
			background.width = game.width;

			// create music button
			var music = game.add.sprite(10,10,'buttons');
			music.frame = 12;
			music.scale.setTo(0.3);

			// create sound button
			var sound = game.add.sprite(100,10,'buttons');
			sound.frame = 23;
			sound.scale.setTo(0.3);

			// create facebook button
			var facebook = game.add.sprite(910,10,'buttons');
			facebook.frame = 3;
			facebook.scale.setTo(0.3);

			// create play button
			var play = game.add.sprite(250,600,'buttons');
			play.frame = 19;
			play.scale.setTo(0.5);
			play.inputEnabled = true;
			play.anchor.set(0.5);
			play.input.useHandCursor = true;
			play.events.onInputOver.add(function() {
				anim.text.overAdd(play, scope);
			}, this);
			play.events.onInputOut.add(function() {
				anim.text.overRemove(play, scope);
			}, this);
			play.events.onInputDown.add(function() {
				anim.text.pop(play, scope, function() {
					utils.stateChange('map', scope);
				});
			}, this);

			// create trophie button
			var trophie = game.add.sprite(400,600,'buttons');
			trophie.frame = 26;
			trophie.scale.setTo(0.5);
			trophie.inputEnabled = true;
			trophie.anchor.set(0.5);
			trophie.input.useHandCursor = true;
			trophie.events.onInputOver.add(function() {
				anim.text.overAdd(trophie, scope);
			}, this);
			trophie.events.onInputOut.add(function() {
				anim.text.overRemove(trophie, scope);
			}, this);

			// create ribbon button
			var ribbon = game.add.sprite(550,600,'buttons');
			ribbon.frame = 18;
			ribbon.scale.setTo(0.5);
			ribbon.inputEnabled = true;
			ribbon.anchor.set(0.5);
			ribbon.input.useHandCursor = true;
			ribbon.events.onInputOver.add(function() {
				anim.text.overAdd(ribbon, scope);
			}, this);
			ribbon.events.onInputOut.add(function() {
				anim.text.overRemove(ribbon, scope);
			}, this);

			// create settings button
			var settings = game.add.sprite(700,600,'buttons');
			settings.frame = 20;
			settings.scale.setTo(0.5);
			settings.inputEnabled = true;
			settings.anchor.set(0.5);
			settings.input.useHandCursor = true;
			settings.events.onInputOver.add(function() {
				anim.text.overAdd(settings, scope);
			}, this);
			settings.events.onInputOut.add(function() {
				anim.text.overRemove(settings, scope);
			}, this);

			anim.state.fadeIn(this);
		},
		update() {

		}
	}
}
