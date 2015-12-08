var blinkEffect = require('./../effects/blink');
var anim = require('./../modules/anims');

module.exports = function(game,scope){
	var self = {};

	return {
		init() {
			console.log('running from arcade state');
			game.stage.backgroundColor = '#A30000';
			//this.gameStarted = false;
		},
		create() {
			require('../modules/ball.js')(game, scope);
			require('../modules/pallets.js')(game, scope);
			require('../modules/controllers.js')(game, scope);
			anim.state.fadeIn(this);

			var emitter = self.emitter = scope.game.add.emitter(0, 0, 100);

			// emitter.particleClass = scope.particles.spell;
			emitter.makeParticles('particle');

			emitter.setYSpeed(-100, 100);
			emitter.setXSpeed(-100, 100);
			// emitter.setRotation(0, 0);
			// emitter.setAlpha(0.9, 0,1000);
			// emitter.setScale(0.2, 0.06, 0.2, 0.06, 1000, Phaser.Easing.Quintic.Out);

		},
		update() {
			_.each(scope.pallets, function(pallet) {
				game.physics.arcade.collide(pallet, scope.ball, function() {
					scope.ball.changeColor().playHitSound();
					blinkEffect(scope.ball, {
						delay: 50,
						times: 3
					});

					blinkEffect(pallet, {
						delay: 50,
						times: 3
					});

					self.emitter.x = scope.ball.x;
					self.emitter.y = scope.ball.y;
					self.emitter.start(true, 1000, null, 10);
				});
			});

			if (scope.ball.x > game.camera.view.width + scope.setup.outBorder ||
				scope.ball.x < scope.setup.outBorder * -1 ||
				scope.ball.y > game.camera.view.height + scope.setup.outBorder ||
				scope.ball.y < scope.setup.outBorder * -1) {
				// out of the stage
				scope.ball.initPos();
			}
		},

		gameStart() {

		}
	}
}
