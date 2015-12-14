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
                this.rows = 3;
                this.cols = 4;
                this.grid = new Array();
                this.gamePlayStatus = {
                    totalMatches: (this.rows * this.cols) / 2,
                    matchesFound: 0
                };
                this.user = {
                    inputEnabled: false,
                    firstSelection: null,
                    secondSelection: null
                };
            },

            preload() {

            },

            create() {
                // include modules
                var player = require('../modules/player.js')(game, scope);

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

                //setup positions
                var positions = new Array();
                // start on used true so first loop forces a new instance
                var index = 0;
                var numbers = {
                    number: null,
                    used: true
                };

                var spritesArray = new Array(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15);

                for (var x = 1; x <= this.cols; x++) {
                    for (var y = 1; y <= this.rows; y++) {
                        if (numbers.used === true) {
                            //numbers.number = game.rnd.integerInRange(0, 3);
                            numbers.number = spritesArray.splice(game.rnd.integerInRange(0, spritesArray.length - 1), 1)[0];
                            numbers.used = false;
                            console.log(numbers.number);
                            positions.push({
                                frame: numbers.number,
                                index: index,
                                pair: index
                            });
                        } else {
                            numbers.used = true;
                            positions.push({
                                frame: numbers.number,
                                index: index,
                                pair: index - 1
                            });
                        }
                        index++;
                    }
                }

                utils.shuffleArray(positions);

                for (var x = 1; x <= this.cols; x++) {
                    for (var y = 1; y <= this.rows; y++) {
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
                    var spriteName = "box" + positions[i].index;
                    this.grid[spriteName] = game.add.sprite(this.grid[i].posX, this.grid[i].posY, 'gameImages', 0);
                    this.grid[spriteName].anchor.set(0.5);
                    this.grid[spriteName].originalFrame = positions[i].frame;
                    this.grid[spriteName].customID = positions[i].index;
                    this.grid[spriteName].pair = positions[i].pair;
                    this.grid[spriteName].inputEnabled = true;
                    this.grid[spriteName].input.useHandCursor = true;
                    var that = this;
                    this.grid[spriteName].events.onInputUp.add(function() {
                        that.userInput(this);
                    }, this.grid[spriteName], this);
                }

                // Allow player to start playing the game
                this.user.inputEnabled = true;
            },

            update() {

            },

            userInput(obj) {
                if (this.user.inputEnabled === true && obj.frame !== obj.originalFrame) {
                    if (this.user.firstSelection === null) {
                        this.user.firstSelection = obj;
                        obj.frame = obj.originalFrame
                    } else {
                        if (this.user.firstSelection === obj) {
                            // same square selected.. do nothing
                        } else {
                            this.user.inputEnabled = false;
                            this.user.secondSelection = obj;
                            obj.frame = obj.originalFrame;
                            this.matchSquares(this.user.firstSelection, this.user.secondSelection);
                            this.user.firstSelection = null;
                            this.user.secondSelection = null;
                        }
                    }
                }
            },

            matchSquares(sqr1, sqr2) {
                if (sqr1.pair === sqr2.pair) {
                    // Match found
                    this.user.inputEnabled = true;
                    this.gamePlayStatus.matchesFound++;
                    this.gameStatus();
                } else {
                    // No match found, reset squares
                    this.resetSquare(this.getSquare(sqr1.customID));
                    this.resetSquare(this.getSquare(sqr2.customID));
                }
            },

            resetSquare(obj) {
                this.game.time.events.add(750, function() {
                    obj.frame = 0;
                    this.user.inputEnabled = true;
                }, this);
            },

            getSquare(customID) {
                var obj = null;
                for (var i in this.grid) {
                    if (this.grid[i].customID === customID) {
                        return this.grid[i];
                    }
                }
            },

            gameStatus() {
                console.log(this.gamePlayStatus.totalMatches, this.gamePlayStatus.matchesFound);
            }
    }
}
