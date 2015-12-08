var _ = require('lodash');


module.exports = function(obj,options={}){
	var defaults = {
		delay:50,
		times:3
	}

	options = _.extend({},defaults,options);
	var mainTint = obj.tint;

	// clearInterval(repeater);
	// clearTimeout(delay);

	var c = 0;
	var repeater = setInterval(function(){
		obj.tint = 0xFF5252;
		setTimeout(function(){
			obj.tint = mainTint;
			if(c++==options.times) clearInterval(repeater);
		},options.delay);
	},options.delay*2);
}
