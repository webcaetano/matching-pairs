var utils = require('./utils');
var trailEffect = require('../effects/trail.js');
var _ = require('lodash');
var Phaser = require('phaser');
var browser = browserDetection();

module.exports = function(game,scope,self){
	var ballColors = [0xFFFFFF];
	var hitAudios = [game.add.audio('hit1'),game.add.audio('hit2')];

	var ballGr = game.add.graphics().beginFill(0xffffff).drawCircle(0,0,scope.setup.ballSize);

	if(browser.browser!='ie') trailEffect.create(game,scope,{maxLength:60,width:14,alpha:0.6});
	var ball = scope.ball = game.add.sprite(0, 0, ballGr.generateTexture());
	ballGr.destroy();

	var ballTween = game.add.tween(ball.scale).to({
		x:1.25,
		y:1.25
	},200,"Linear").to({
		x:1,
		y:1
	},200,"Linear");

	ball.initPos = function(){
		ball.x = game.width/2;
		ball.y = game.height/2;
		if(browser.browser!='ie') trailEffect.reset();
	}

	ball.tweenScale = function(){
		ballTween.repeat(3).start();
		return ball;
	}

	ball.changeColor = function(){
		ball.tint = _.sample(ballColors);
		return ball;
	}

	ball.playHitSound = function(){
		_.sample(hitAudios).play();
		return ball;
	}

	ball.enableBody = true;
	ball.physicsBodyType = Phaser.Physics.ARCADE;
	game.physics.enable(ball, Phaser.Physics.ARCADE);

	ball.body.velocity.x = scope.setup.speed.x;
	ball.body.velocity.y = scope.setup.speed.y;
	ball.body.bounce.setTo(1, 1);
	ball.anchor.setTo(0.5,0.5);
	ball.initPos();
	ball.changeColor();
	// ball.body.collideWorldBounds = true;
}
