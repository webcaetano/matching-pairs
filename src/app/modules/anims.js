var self = {};

self.text = {
    pop: function(object, scope, callback) {
        var tweenGrow = scope.game.add.tween(object.scale).to({
            x: 0.8,
            y: 0.8
        }, 150, "Quart.easeIn");
        var tweenShrink = scope.game.add.tween(object.scale).to({
            x: 0.5,
            y: 0.5
        }, 150, "Quart.easeOut");
        if (callback) tweenShrink.onComplete.add(callback);
        return tweenGrow.chain(tweenShrink)
            .start();
    },
    overAdd: function(object, scope) {
        return scope.game.add.tween(object.scale).to({
                x: 0.6,
                y: 0.6
            }, 100, "Quart.easeIn")
            .start();
    },
    overRemove: function(object, scope) {
        return scope.game.add.tween(object.scale).to({
                x: 0.5,
                y: 0.5
            }, 100, "Quart.easeOut")
            .start();
    }
}

self.levelButton = {
    pop: function(object, scope, callback) {
        var tweenGrow = scope.game.add.tween(object.scale).to({
            x: 0.8,
            y: 0.8
        }, 150, "Quart.easeIn");
        var tweenShrink = scope.game.add.tween(object.scale).to({
            x: 0.5,
            y: 0.5
        }, 150, "Quart.easeOut");
        if (callback) tweenShrink.onComplete.add(callback);
        return tweenGrow.chain(tweenShrink)
            .start();
    },
    overAdd: function(object, scope) {
        for (var obj in object) {
            scope.game.add.tween(object[obj].scale).to({
                    x: 0.48,
                    y: 0.48
                }, 100, "Quart.easeIn")
                .start();
        }
    },
    overRemove: function(object, scope) {
    	for (var obj in object) {
            scope.game.add.tween(object[obj].scale).to({
                x: object[obj].originalScale,
                y: object[obj].originalScale
            }, 100, "Quart.easeOut")
            .start();
        }
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
        }, 1000, null);

        if (callback) {
            s.onComplete.add(callback);
        }
        s.start();
        return s;
    }
}

module.exports = self;
