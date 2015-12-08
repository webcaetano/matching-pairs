var utils = require('./utils');
var _ = require('lodash');
var Phaser = require('phaser');

module.exports = function(game,scope){
	var pallets = {
		top:{
			x:(game.width*0.5)-(scope.setup.palletSize.width*0.5),
			y:scope.setup.offset,
			width:scope.setup.palletSize.width,
			height:scope.setup.palletSize.height
		},
		bottom:{
			x:(game.width*0.5)-(scope.setup.palletSize.width*0.5),
			y:game.height-scope.setup.offset-scope.setup.palletSize.height,
			width:scope.setup.palletSize.width,
			height:scope.setup.palletSize.height
		},
		left:{
			x:scope.setup.offset,
			y:game.height*0.5-(scope.setup.palletSize.width*0.5),
			width:scope.setup.palletSize.height,
			height:scope.setup.palletSize.width
		},
		right:{
			x:game.width-scope.setup.offset-scope.setup.palletSize.height,
			y:game.height*0.5-(scope.setup.palletSize.width*0.5),
			width:scope.setup.palletSize.height,
			height:scope.setup.palletSize.width
		}
	};

	function newPalletFog(pallet,options){
		var graphic = game.add.graphics(0, 0).beginFill(0xFFFFFF).drawRect(0,0,options.width,options.height);
		graphic.x = pallet.x;
		graphic.y = pallet.y;
		graphic.alpha = 0.5;
		game.add.tween(graphic).to({
			alpha:0,
		},400)
		.start()
		.onComplete.add(function(){
			graphic.destroy();
		});
	}

	function newPallet(options,name){
		var tmpPalletGr = game.add.graphics(0, 0).beginFill(0xFFFFFF).drawRect(0,0,options.width,options.height);
		var tmpPallet = scope.pallets[name] = game.add.sprite(0, 0, tmpPalletGr.generateTexture());
		tmpPalletGr.destroy();

		tmpPallet.x = options.x;
		tmpPallet.y = options.y;
		tmpPallet.enableBody = true;
		game.physics.enable([tmpPallet,scope.ball], Phaser.Physics.ARCADE);
		tmpPallet.body.immovable = true;
		tmpPallet.tint = 0xFFFFFF;
		var c = 0;
		var palletFogRate = 10; //each x frames
		tmpPallet.update = function(){
			if(c++==palletFogRate){
				newPalletFog(tmpPallet,options);
				c=0;
			}
		}
		return tmpPallet;
	}

	scope.pallets = {};

	_.each(pallets,function(pallet,k){
		newPallet(pallet,k);
	})
}
