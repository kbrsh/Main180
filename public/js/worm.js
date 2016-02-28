// Initialize Paper.js
paper.install(window)          
paper.setup('canvas-1')
// A random color function needed later
function randomColor() {
		return '#' + Math.random().toString(16).slice(2, 8);
	};
// The amount of points in the path:
var points = 25;

// The distance between the points:
var length = 35;

var path = new Path({
	strokeColor: randomColor(),
	strokeWidth: 20,
	strokeCap: 'round'
});

var start = view.center / [10, 1];
for (var i = 0; i < points; i++)
	path.add(start + new Point(i * length, 0));

function onMouseMove(event) {
	path.firstSegment.point = event.point;
	for (var i = 0; i < points - 1; i++) {
		var segment = path.segments[i];
		var nextSegment = segment.next;
		var vector = segment.point - nextSegment.point;
		vector.length = length;
		nextSegment.point = segment.point - vector;
	}
	path.smooth({ type: 'continuous' });
}
