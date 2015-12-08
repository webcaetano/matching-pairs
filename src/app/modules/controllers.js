var utils = require('./utils');
var _ = require('lodash');
var Phaser = require('phaser');


module.exports = function(game,scope){
	var upKey = game.input.keyboard.addKey(Phaser.Keyboard.UP)
	upKey.onDown.add(function(){
		upKey.enterFrame = game.time.events.add(1000/60,function(){
			if(scope.pallets.left.y-scope.setup.palletSpeed<=scope.setup.offset) return;
			scope.pallets.left.y-=scope.setup.palletSpeed;
			scope.pallets.right.y-=scope.setup.palletSpeed;
		})
		upKey.enterFrame.loop = true;

	})
	upKey.onUp.add(function(){
		game.time.events.remove(upKey.enterFrame);
	});

	var downKey = game.input.keyboard.addKey(Phaser.Keyboard.DOWN)
	downKey.onDown.add(function(){
		downKey.enterFrame = game.time.events.add(1000/60,function(){
			if(scope.pallets.left.y+scope.setup.palletSize.width+scope.setup.palletSpeed>=scope.options.height-scope.setup.offset) return;
			scope.pallets.left.y+=scope.setup.palletSpeed;
			scope.pallets.right.y+=scope.setup.palletSpeed;
		})
		downKey.enterFrame.loop = true;

	})
	downKey.onUp.add(function(){
		game.time.events.remove(downKey.enterFrame);
	});

	var leftKey = game.input.keyboard.addKey(Phaser.Keyboard.LEFT)
	leftKey.onDown.add(function(){
		leftKey.enterFrame = game.time.events.add(1000/60,function(){
			if(scope.pallets.top.x-scope.setup.palletSpeed<=scope.setup.offset) return;
			scope.pallets.top.x-=scope.setup.palletSpeed;
			scope.pallets.bottom.x-=scope.setup.palletSpeed;
		})
		leftKey.enterFrame.loop = true;

	})
	leftKey.onUp.add(function(){
		game.time.events.remove(leftKey.enterFrame);
	});

	var rightKey = game.input.keyboard.addKey(Phaser.Keyboard.RIGHT)
	rightKey.onDown.add(function(){
		rightKey.enterFrame = game.time.events.add(1000/60,function(){
			if(scope.pallets.top.x+scope.setup.palletSpeed+scope.setup.palletSize.width>=scope.options.width-scope.setup.offset) return;
			scope.pallets.top.x+=scope.setup.palletSpeed;
			scope.pallets.bottom.x+=scope.setup.palletSpeed;
		})
		rightKey.enterFrame.loop = true;

	})
	rightKey.onUp.add(function(){
		game.time.events.remove(rightKey.enterFrame);
	});
}
