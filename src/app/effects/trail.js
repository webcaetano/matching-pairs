var options;
var self = {};

var _verts = [];
var _indices = [];

self.newPoint = function(obj){
	var segment;

	while(self.trail.length > options.maxLength) segment = self.trail.shift();
	if(!segment) segment = new Phaser.Point();

	segment.x = obj.x;
	segment.y = obj.y;

	self.trail.push(segment);
}

self.redraw = function(obj){
	self.graphic.clear();
	var s1;
	var s2;
	var vertIndex=0;
	var offset;
	var ang;
	var sin=0;
	var cos=0;

	if (_verts.length!==(self.trail.length-1)*4) _verts.length = [];
	for (var j=0;j<self.trail.length;++j) {
		s1 = self.trail[j];
		if (s2) {
			ang = Math.atan2(s1.y - s2.y, s1.x - s2.x) + Math.PI / 2;
			sin = Math.sin(ang);
			cos = Math.cos(ang);

			for (var i=0;i<2;++i) {
				offset = ( -0.5 + i / 1) * options.width;
				offset *= j / self.trail.length;
				_verts[vertIndex++] = s1.x + cos * offset - obj.x;
        		_verts[vertIndex++] = s1.y + sin * offset - obj.y;
			}
		}
		s2 = s1.copyTo({});
	}

	if (_verts.length>=8) {
		for (var k=0;k<_verts.length;k++) {
			_indices[k*6+0]=k*2+0;
			_indices[k*6+1]=k*2+1;
			_indices[k*6+2]=k*2+2;
			_indices[k*6+3]=k*2+1;
			_indices[k*6+4]=k*2+2;
			_indices[k*6+5]=k*2+3;
		}

		self.graphic.beginFill(obj.tint);
		self.graphic.drawTriangles(_verts, _indices);
		self.graphic.endFill();
	}
}

self.reset = function(){
	self.trail = [];
}

self.create = function(game,scope,opt){
	var defaults = {
		maxLength:30,
		width:15
	};
	options = _.extend({},defaults,opt);
	self.trail = [];
	self.target=scope.ball;
	self.graphic=game.add.graphics();
	self.graphic.alpha = options.alpha;

	self.graphic.update = function(){
		this.x = scope.ball.x;
		this.y = scope.ball.y;
		self.newPoint(scope.ball);
		self.redraw(scope.ball);
	}

	return self;
}

module.exports = self;
