var anim = require('./../modules/anims');
var utils = require('./../modules/utils');

module.exports = function(game, scope) {
    var self = {
    };
    return {
        init(params) {
                console.log('running from game state');
                if (params.level !== null && params.level !== undefined) {
                    self.levelID = params.level;
                } else {
                    // no level id has been passed to this state
                }

                // setup initial variables
                this.rows = 4;
                this.cols = 4;
                this.grid;
            },

            preload() {

            },

            create() {
                // create background image
                var background = game.add.image(0, 0, 'bg');
                background.height = game.height;
                background.width = game.width;

                // create game container
                var container = game.add.image(game.width * 0.5, game.height * 0.5, 'gameContainer');
                container.anchor.set(0.5);

                // setup grid
                for (var x = 0; x <= this.cols; x++) {
                	for (var y = 0; y <= this.rows; y++) {
                		var graphics = game.add.graphics(100,100);
                		graphics.lineStyle(2, 0x0000FF, 1);
    					graphics.drawRect(100, 100, 100 * x, 100 * y);
                	}
                }

                // place blanks
				for (var x = 0; x <= this.cols; x++) {
                	for (var y = 0; y <= this.rows; y++) {
                		
                	}
                }
                // place art
            },

            update() {
                
            }
    }
}
