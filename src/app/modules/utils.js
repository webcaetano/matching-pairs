var anim = require('./../modules/anims');
var self = {};

self.rand = function(min=0, max=100){
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

self.loadAssets = function(game,assets){
	var i;
	for(i in assets.images) game.load.image(i, assets.images[i]);
	for(i in assets.sprites) game.load.spritesheet(i, assets.sprites[i].image, assets.sprites[i].width, assets.sprites[i].height, assets.sprites[i].frames);
	for(i in assets.audio) game.load.audio(i, assets.audio[i]);
}

self.stateChange = function(nextState, scope) {
	anim.state.fadeOut(scope, function() {scope.game.state.start(nextState)});
}

self.$newSprite = function(game,key,options){
	var defaults = {
		x:0,
		y:0,
		frame:undefined,
		group:undefined
	};
	options = _.extend({},defaults,options);
	var tmpObj = game.add.sprite(options.x,options.y,key,options.frame,options.group);
	// prototypes
	tmpObj.$set = function(prop,val){
		if(typeof prop==='string' && !!val){
			this[prop]=val;
		} else {
			for(var i in prop){
				if(i.indexOf('.')==-1){
					this[i]=prop[i];
				} else {
					var pathObj = i.split(".");
					var c = this;
					for(var k=0;k<pathObj.length-1;k++) c=c[pathObj[k]];
					c[pathObj[pathObj.length-1]]=prop[i];
				}
			}
		}
		return this;
	};
	tmpObj.$into = function(group){
		group.add(this);
		return this;
	};
	return tmpObj;
}

module.exports = self;
