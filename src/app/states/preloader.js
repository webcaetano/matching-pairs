var utils = require('./../modules/utils');

module.exports = function(game, scope) {
    return {
        init() {
                console.log('running from preloader state');
            },

            preload() {
                this.start();
            },

            create() {
                this.game.load.onLoadStart.add(this.loadStart, this);
                this.game.load.onFileComplete.add(this.fileComplete, this);
                this.game.load.onLoadComplete.add(this.loadComplete, this);

            },

            start() {
                this.game.load.start();
                // Load Images
                game.load.image('bg', 'images/bg.png');
                game.load.image('mapBanner', 'images/mapBanner.png');
                game.load.image('buttonBehind', 'images/buttonBehind.png');
				game.load.atlas('buttons', 'images/buttons.png', 'images/buttons.json', Phaser.Loader.TEXTURE_ATLAS_JSON_HASH);
            },

            loadStart() {
                //console.log('Loading Started');
            },

            fileComplete(progress, cacheKey, success, totalLoaded, totalFiles) {
                //console.log("File Complete: " + progress + "% - " + totalLoaded + " out of " + totalFiles);
            },

            loadComplete() {
                //console.log('Finished Loading')
            },

            update() {
                if (this.game.load.hasLoaded === true) {
                    utils.stateChange('mainMenu', scope);
                }
            },
    }
}
