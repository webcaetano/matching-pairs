var anim = require('./../modules/anims');
var utils = require('./../modules/utils');

module.exports = function(game, scope) {
    var self = {};
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
                this.grid = new Array();
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
                var startX = 280;
                var startY = 100;
                for (var x = 0; x <= this.cols; x++) {
                    for (var y = 0; y <= this.rows; y++) {
                        this.grid.push({
                            x: x,
                            y: y,
                            posX: 115 * x + startX,
                            posY: 115 * y + startY
                        });
                    }
                }

                // add artwork
                for (var i in this.grid) {
                	var image = game.add.sprite(this.grid[i].posX, this.grid[i].posY, 'gameImages', 4);
                	image.anchor.set(0.5);
                }
                console.log(this.grid);
            },

            update() {

            }
    }
}
