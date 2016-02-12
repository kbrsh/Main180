function StartOilPainting() {

    var canvas;
    var ctx;

    var width;
    var height;

    var startPos = {
        x: window.innerWidth / 2,
        y: window.innerHeight / 2
    };
    var prevPos = {
        x: window.innerWidth / 2,
        y: 0
    };
    var dist = {
        x: 0,
        y: 0
    };
    var colour = '#' + Math.floor(Math.random() * 16777215).toString(16);


    this.init = function() {
        canvas = document.getElementById("canvas");
        ctx = canvas.getContext('2d');

        width = window.innerWidth
        height = window.innerHeight

        canvas.width = width;
        canvas.height = height;

        canvas.addEventListener('mousemove', MouseMove, false);
        canvas.addEventListener('click', MouseDown, false);
        canvas.addEventListener('dblclick', MouseDbl, false);
    }


    var MouseMove = function(e) {
        var distance = Math.sqrt(Math.pow(prevPos.x - startPos.x, 2) +
            Math.pow(prevPos.y - startPos.y, 2));

        var a = distance * 10 * (Math.pow(Math.random(), 2) - 0.5);

        var r = Math.random() - 0.5;

        var size = (Math.random() * 15) / distance;

        dist.x = (prevPos.x - startPos.x) * Math.sin(0.5) + startPos.x;
        dist.y = (prevPos.y - startPos.y) * Math.cos(0.5) + startPos.y;

        startPos.x = prevPos.x;
        startPos.y = prevPos.y;

        prevPos.x = (e.layerX);
        prevPos.y = (e.layerY);

        // ------- Draw -------
        var lWidth = (Math.random() + 20 / 10 - 0.5) * size + (1 - Math.random() + 30 / 20 - 0.5) * size;
        ctx.lineWidth = lWidth;
        ctx.strokeWidth = lWidth;

        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';

        ctx.beginPath();
        ctx.moveTo(startPos.x, startPos.y);
        ctx.quadraticCurveTo(dist.x, dist.y, prevPos.x, prevPos.y);

        ctx.fillStyle = colour;
        ctx.strokeStyle = colour;

        ctx.moveTo(startPos.x + a, startPos.y + a);
        ctx.lineTo(startPos.x + r + a, startPos.y + r + a);

        ctx.stroke();
        ctx.fill();

        ctx.closePath();
    }

    var MouseDown = function(e) {
        e.preventDefault();
        colour = '#' + Math.floor(Math.random() * 16777215).toString(16);
        ctx.fillStyle = colour;
        ctx.strokeStyle = colour;
    }

    var MouseDbl = function(e) {
        e.preventDefault();
        ctx.clearRect(0, 0, width, height);
    }

}

var app = new StartOilPainting();
app.init();
