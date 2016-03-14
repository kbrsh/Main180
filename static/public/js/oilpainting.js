function StartOilPainting() {

    var canvas;
    var ctx;

    var width;
    var height;

    var sP = {
        x: window.innerWidth / 2,
        y: window.innerHeight / 2
    };
    var pP = {
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
        var distance = Math.sqrt(Math.pow(pP.x - sP.x, 2) +
            Math.pow(pP.y - sP.y, 2));

        var a = distance * 10 * (Math.pow(Math.random(), 2) - 0.5);

        var r = Math.random() - 0.5;

        var size = (Math.random() * 15) / distance;

        dist.x = (pP.x - sP.x) * Math.sin(0.5) + sP.x;
        dist.y = (pP.y - sP.y) * Math.cos(0.5) + sP.y;

        sP.x = pP.x;
        sP.y = pP.y;

        pP.x = (e.layerX);
        pP.y = (e.layerY);

        // ------- Draw -------
        var lWidth = (Math.random() + 20 / 10 - 0.5) * size + (1 - Math.random() + 30 / 20 - 0.5) * size;
        ctx.lineWidth = lWidth;
        ctx.strokeWidth = lWidth;

        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';

        ctx.beginPath();
        ctx.moveTo(sP.x, sP.y);
        ctx.quadraticCurveTo(dist.x, dist.y, pP.x, pP.y);

        ctx.fillStyle = colour;
        ctx.strokeStyle = colour;

        ctx.moveTo(sP.x + a, sP.y + a);
        ctx.lineTo(sP.x + r + a, sP.y + r + a);

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
