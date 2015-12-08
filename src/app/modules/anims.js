var self = {};

self.text = {
	pop: function(object, scope, callback) {
		var tweenGrow = scope.game.add.tween(object.scale).to({
			x: 1.4,
			y: 1.4
		}, 150, "Quart.easeIn");
		var tweenShrink = scope.game.add.tween(object.scale).to({
			x: 1,
			y: 1
		}, 150, "Quart.easeOut");
		if (callback) tweenShrink.onComplete.add(callback);
		return tweenGrow.chain(tweenShrink)
		.start();
	},
	overAdd: function(object, scope) {
		return scope.game.add.tween(object.scale).to({
			x: 1.15,
			y: 1.15
		}, 100, "Quart.easeIn")
		.start();
	},
	overRemove: function(object, scope) {
		return scope.game.add.tween(object.scale).to({
			x: 1,
			y: 1
		}, 100, "Quart.easeOut")
		.start();
	}
}

self.state = {
	fadeOut: function(scope, callback) {
		var spr_bg = scope.game.add.graphics(0, 0);
		spr_bg.beginFill(scope.fadeColor, 1);
		spr_bg.drawRect(0, 0, scope.game.width, scope.game.height);
		spr_bg.alpha = 0;
		spr_bg.endFill();

		var s = scope.game.add.tween(spr_bg)
		s.to({
			alpha: 1
		}, 350, null);

		if (callback) {
			s.onComplete.add(callback);
		}
		s.start();
		return s;
	},
	fadeIn: function(scope, callback) {
		var spr_bg = scope.game.add.graphics(0, 0);
		spr_bg.beginFill(scope.fadeColor, 1);
		spr_bg.drawRect(0, 0, scope.game.width, scope.game.height);
		spr_bg.alpha = 1;
		spr_bg.endFill();

		var s = scope.game.add.tween(spr_bg)
		s.to({
			alpha: 0
		}, 350, null);

		if (callback) {
			s.onComplete.add(callback);
		}
		s.start();
		return s;
	}
}

module.exports = self;
