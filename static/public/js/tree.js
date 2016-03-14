
var console = function() {
    return({
        log: function(msg) {
          consoleDiv = document.getElementById('console');
          para = document.createElement('p');
          text = document.createTextNode(msg);
          para.appendChild(text);
          consoleDiv.appendChild(para);
        }
    });
}();

var viewWidth = 500,
    viewHeight = 300,
    theCanvas = document.getElementById("canv"),
    hue1=0,
		hue2=180,
    branches = [],
		grd;

Branch = function(x,y,r,w,h,grd){  
  this.x = x || theCanvas.width/2;
  this.y = y || theCanvas.height;
  this.r = r || 0;
  this.w = w || 20;
  this.h = h || 40;
  this.grd = grd || defgrd; 
    
  if (this.w>1 && this.y > 20){  
    var nodes = (this.y > viewHeight-50) ? 1 : 2;
    
    for (var i=0; i<nodes; i++){
      var tx = this.x + Math.sin(this.r)*this.h;
      var ty = this.y - Math.cos(this.r)*this.h;
      var tr = this.r -.75+Math.random()*1.5;
      var tw = this.w - (1 + Math.random()*2);
      var th = 15+Math.random()*15;
			var tb = Math.min(120 - ty/3 , 70);
      var tcol1 = "hsl("+(hue1-17+Math.random()*50)+",100%,"+tb+"%)";
      var tcol2 = "hsl("+(hue2-10+Math.random()*90)+",100%,"+(tb-30)+"%)";
      var tgrd = ctx.createLinearGradient(-tw/2,-th,tw,th);
      tgrd.addColorStop(0,tcol1);
      tgrd.addColorStop(.8,tcol2);
      branches.push(new Branch(tx,ty,tr,tw,th, tgrd));
    }
    
  }
  
  this.draw = function(){
  	ctx.save();
    ctx.translate(this.x, this.y);
    ctx.rotate(this.r);
    ctx.fillStyle = this.grd;
    ctx.fillRect(-this.w/2, -this.h, this.w, this.h);
    ctx.restore();  
  }
}

window.onload = function() {
  	theCanvas.width = viewWidth;
    theCanvas.height = viewHeight;
    ctx = theCanvas.getContext('2d');
  	ctx.globalAlpha = 0.25;
  	defcol1 = "hsl("+hue1+",100%,20%)";
    defcol2 = "hsl("+hue2+",100%,20%)";
  	defgrd = ctx.createLinearGradient(-20,-20,40,20);
    defgrd.addColorStop(0,defcol1);
    defgrd.addColorStop(.8,defcol2);
  	onmousedown = start;
  	start();
};

start = function(e){
  branches = [];
  ctx.clearRect ( 0 , 0 , theCanvas.width, theCanvas.height );
  var b = new Branch();
  branches.push(b);
  requestAnimationFrame(loop);
}

function loop() {
  if (branches.length){
    var b = branches.pop();
    b.draw();
    
  	requestAnimationFrame(loop);
  }  
};


