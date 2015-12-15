require('./modules/stats')();
var utils = require('./modules/utils');
var _ = require('lodash');
var Phaser = require('phaser');
var browser = browserDetection();

var scope = {
    version: require('./data/version.json.js'),
    setup: {
        ballSize: 15,
        initSpeed: 4,
        palletSpeed: 4,
        speed: {
            x: 250,
            y: 150
        },
        outBorder: 10,
        offset: 15,
        palletSize: {
            width: 80,
            height: 10
        }
    },
    options: {
        width: 1000,
        height: 700
    },
    settings: {
        score: 0,
        muted: false
    }
};
var game = scope.game = new Phaser.Game(scope.options.width, scope.options.height, browser.browser == 'ie' ? Phaser.CANVAS : Phaser.WEBGL, 'test-game');

//load plugin
require('./plugins/Gray')();


game.state.add('boot', require('./states/boot')(game, scope));
game.state.add('preload', require('./states/preloader')(game, scope));
game.state.add('mainMenu', require('./states/mainMenu')(game, scope));
game.state.add('options', require('./states/options')(game, scope));
game.state.add('gameOver', require('./states/gameOver')(game, scope));
game.state.add('map', require('./states/map')(game, scope));
game.state.add('game', require('./states/game')(game, scope));




game.state.start('boot');
