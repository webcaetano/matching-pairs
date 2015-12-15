var self = {};

self.popup = {
    blurBackground: function(scope) {
        scope.backgroundGroup = scope.game.add.group();
        scope.backgroundGroup.alpha = 0;

        scope.rt = scope.game.add.renderTexture(scope.game.width, scope.game.height, 'rt');
        scope.rt.render(scope.game.world, new Phaser.Point(0, 0), true);
        scope.rtSprite = scope.game.add.sprite(0, 0, scope.rt);

        scope.blocker = scope.game.add.sprite(0, 0)
        scope.blocker.texture.baseTexture.skipRender = false

        scope.blocker.anchor.set(0.5, 0.5)
        scope.blocker.addChild(scope.rtSprite)
        scope.blocker.inputEnabled = true;
        scope.blocker.input.useHandCursor = false;

        // Blur the background sprite
        scope.blurX = scope.game.add.filter('BlurX');
        scope.blurY = scope.game.add.filter('BlurY');
        scope.blurX.blur = blur;
        scope.blurY.blur = blur;

        // Add the filters to the background sprite
        scope.rtSprite.filters = [scope.blurX, scope.blurY];

        // Add the background sprite to the background group
        scope.backgroundGroup.add(scope.blocker);

        return scope.game.add.tween(scope.backgroundGroup).to({
            alpha: 1
        }, 500, "Linear", true).start();
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

module.exports = self;
