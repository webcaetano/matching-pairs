var anim = require('./../modules/anims');
var utils = require('./../modules/utils');
var popup = require('./../modules/popup');

module.exports = function(game, scope) {
    var self = {

    };
    return {
        init() {
                console.log('running from map state')
            },
            create() {

                // create background
                var background = game.add.image(0, 0, 'bg');
                background.height = game.height;
                background.width = game.width;

                // create banner
                var banner = game.add.image(game.width / 2, game.height / 2, 'mapBanner');
                banner.scale.setTo(0.8);
                banner.anchor.setTo(0.5);

                var levels = game.add.group();
                // Create levels 5 per row, 3 rows
                var x = 0;
                for (var i = 0; i < 5; i++) {
                    for (var j = 0; j < 3; j++) {
                    	// Create group
                    	var groupName = 'levelGroup' + x;
                    	levels.children[groupName] = game.add.group();
                    	// Create level background
                    	var levelBackgroundName = 'levelBackground' + x;
                    	levels.children[groupName].children[levelBackgroundName] = game.add.image(130 * i + 240, 150 * j + 220, 'buttonBehind');
                    	levels.children[groupName].children[levelBackgroundName].customID = x;
                		levels.children[groupName].children[levelBackgroundName].scale.setTo(0.45);
                        levels.children[groupName].children[levelBackgroundName].originalScale = 0.45;
                        levels.children[groupName].children[levelBackgroundName].anchor.setTo(0.5);
                		levels.children[groupName].children[levelBackgroundName].inputEnabled = true;
                		levels.children[groupName].children[levelBackgroundName].input.useHandCursor = true;
                		levels.children[groupName].children[levelBackgroundName].events.onInputDown.add(function() {
							//utils.stateChange('game', scope, {'level': this.customID});
                            popup.popup.blurBackground(scope);
						}, levels.children[groupName].children[levelBackgroundName]);
                        

                		// create level button
                		var levelButtonName = 'levelButton' + x;
                        levels.children[groupName].children[levelButtonName] = game.add.sprite(130 * i + 240, 150 * j + 210, 'buttons');
                        levels.children[groupName].children[levelButtonName].frame = 0;
                        levels.children[groupName].children[levelButtonName].scale.setTo(0.40);
                        levels.children[groupName].children[levelButtonName].anchor.setTo(0.5);
                        levels.children[groupName].children[levelButtonName].originalScale = 0.40;

                        levels.children[groupName].children[levelBackgroundName].events.onInputOver.add(function() {
                            anim.levelButton.overAdd(this, scope);
                        }, {'object1': levels.children[groupName].children[levelBackgroundName], 'object2': levels.children[groupName].children[levelButtonName]});

                         levels.children[groupName].children[levelBackgroundName].events.onInputOut.add(function() {
                            anim.levelButton.overRemove(this, scope);
                        }, {'object1': levels.children[groupName].children[levelBackgroundName], 'object2': levels.children[groupName].children[levelButtonName]});

                        // add background and button to same group, then add that group to the levels group
                        levels.children[groupName].add(levels.children[groupName].children[levelBackgroundName]);
						levels.children[groupName].add(levels.children[groupName].children[levelButtonName]);
                        levels.add(levels.children[groupName]);
                        x++;
                    }
                }


                // create back and back buttons for levels
                var back = game.add.image(140, 375, 'buttons');
                back.frame = 7;
                back.scale.setTo(0.25);
                back.anchor.setTo(0.5);
                back.inputEnabled = true;
        		back.input.useHandCursor = true;
        		back.events.onInputDown.add(function() {
					console.log('');
				}, this);

                // create next and back buttons for levels
                var next = game.add.image(860, 375, 'buttons');
                next.frame = 19;
                next.scale.setTo(0.25);
                next.anchor.setTo(0.5);

                anim.state.fadeIn(this);

            },

            update() {

            },


    }
}
