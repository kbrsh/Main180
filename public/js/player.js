var input = (function() {
    var keyCode = {
        UP: 38,
        DOWN: 40,
        LEFT: 37,
        RIGHT: 39,
        SPACE: 32,
        W: 87,
        S: 83,
        A: 65,
        D: 68,
        Q: 81,
        E: 69
    };

    var mouse = {
        x: 0,
        y: 0
    };

    var keyState = (function () {
        var state = {};
        Object.keys(keyCode).forEach(function (key, value) {
            state[keyCode[key]] = false;
        });

        return state;
    })();

    function getAsyncKeyState(state) {
        return keyState[state];
    }

    document.addEventListener('mousemove', function (e) {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
    });

    document.addEventListener('keydown', function (e) {
        if (keyState[e.keyCode] != undefined) {
            keyState[e.keyCode] = true;
        }
    });

    document.addEventListener('keyup', function (e) {
        if (keyState[e.keyCode] != undefined) {
            keyState[e.keyCode] = false;
        }
    });

    return {
        getAsyncKeyState: getAsyncKeyState,
        keyCode: keyCode,
        mouse: mouse
    };
})();

var force = function(angle, magnitude){
    this.angle = angle;
    this.magnitude = magnitude;
};

var rPoint = function(x, y, velocity, forces){
    this.x = x;
    this.y = y;
    this.velocity = velocity;
    this.forces = forces;
};

var circle = {
    x: 0,
    y: 0,
    radius: 5,
    velocity: null,
    forces: null,

    create: function(_x, _y, _radius){
        x = _x;
    },

    render: function(){
        ctx.beginPath();
        ctx.fillStyle = "#F25E5C";
        ctx.arc(points[i].x, points[i].y, 10, 0, Math.PI * 2, false);
        ctx.fill();
        ctx.closePath();
    }
};

function getPointNextPos(point){
    var result = new rPoint(point.x, point.y, point.velocity, point.forces);
    var actingForces = addForceArr(point.forces);
    result.velocity = addForces(point.velocity, actingForces);

    result.x += Math.cos(point.velocity.angle) * point.velocity.magnitude;
    result.y -= Math.sin(point.velocity.angle) * point.velocity.magnitude;
    return result;
}

function forceToPoint(myforce){
    return new rPoint(Math.cos(myforce.angle) * myforce.magnitude, Math.sin(myforce.angle) * myforce.magnitude);
}

function pointToForce(mypoint){
    return new force(direction(new rPoint(0,0), mypoint), distance(new rPoint(0,0), mypoint));
}

function flipY(myforce){
    var point = forceToPoint(myforce);
    point.x = -point.x;
    return new force(direction(new rPoint(0,0), point), myforce.magnitude);
}

function flipX(myforce){
    var point = forceToPoint(myforce);
    point.y = -point.y;
    return new force(direction(new rPoint(0,0), point), myforce.magnitude);
}

function distance(a, b){
    return Math.sqrt((b.x - a.x) * (b.x - a.x) + (b.y - a.y) * (b.y - a.y));
}

function direction(a, b){
    return Math.atan2(b.y - a.y, b.x - a.x);
}

function addForces(a, b){
    var aPoint = forceToPoint(a);
    var bPoint = forceToPoint(b);
    return new pointToForce(new rPoint(aPoint.x + bPoint.x, aPoint.y + bPoint.y));
}

function addForceArr(forces){
    var result = new force(0, 0);
    for(var i = 0;i < forces.length;i++){
        result = addForces(result, forces[i]);
    }
    return result;
}

function collision(points){
    for(var i = 0;i < points.length;i++){
        var newPoint = getPointNextPos(points[i]);
        if(newPoint.y > canvas.height - 10){
            points[i].velocity = flipX(points[i].velocity);
        }
        if(newPoint.y < 10){
            points[i].velocity = flipX(points[i].velocity);
        }
        if(newPoint.x < 10){
            points[i].velocity = flipY(points[i].velocity);
        }
        if(newPoint.x > canvas.width - 10){
            points[i].velocity = flipY(points[i].velocity);
        }

        if(newPoint.y > canvas.height - 10 || newPoint.y < 10 || newPoint.x < 10 || newPoint.x > canvas.width - 10){
            points[i].velocity.magnitude = points[i].velocity.magnitude / 2;
            if(points[i].velocity.magnitude < 1.1){
                points[i].velocity.magnitude = 0;
            }
        }

        //points[i].velocity.magnitude /= 1.5;
    }
}
window.onload = function(){
	var canvas = document.getElementById('canvas');
	var ctx = canvas.getContext('2d');

	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;

	function render(points){
		ctx.fillStyle = "#000";
		ctx.fillRect(0, 0, canvas.width, canvas.height);

		for(var i = 0;i < points.length;i++){
			ctx.beginPath();
			ctx.fillStyle = "#1abc9c";
			ctx.arc(points[i].x, points[i].y, 25, 0, Math.PI * 2, false);
			ctx.fill();
			ctx.closePath();
		}
	}

	function update(points){
		collision(points);
		for(var i = 0;i < points.length;i++){
			points[i] = getPointNextPos(points[i]);
		}
	}

	var forces = [new force(-Math.PI / 2, 1)];
	var myPoint = new rPoint(50, 50, new force(0, 15), forces);
	var points = [myPoint];

	function controls(){
		var speed = 2;
		if(input.getAsyncKeyState(input.keyCode.W) || input.getAsyncKeyState(input.keyCode.UP)){
			points[0].velocity = addForces(points[0].velocity, new force(Math.PI / 2, speed));
		}
		if(input.getAsyncKeyState(input.keyCode.A) ||input.getAsyncKeyState(input.keyCode.LEFT)){
			points[0].velocity = addForces(points[0].velocity, new force(Math.PI, speed));
		}
		if(input.getAsyncKeyState(input.keyCode.D) || input.getAsyncKeyState(input.keyCode.RIGHT)){
			points[0].velocity = addForces(points[0].velocity, new force(0, speed));
		}
		if(input.getAsyncKeyState(input.keyCode.S) ||
      input.getAsyncKeyState(input.keyCode.DOWN)){
			points[0].velocity = addForces(points[0].velocity, new force(-Math.PI / 2, speed));
		}

		//forces[0].angle = -direction(points[0], inputHandler.mouse);
		//forces[0].magnitude = distance(points[0], inputHandler.mouse)/10;
		//document.getElementById('info').innerHTML = inputHandler.mouse.x + ", " + inputHandler.mouse.y + " | " + points[0].x + ", " + points[0].y;
	}

	function animate(){
		controls();
		update(points);
		render(points);
		window.requestAnimationFrame(animate);
	}
	animate();

};
