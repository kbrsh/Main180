var w = c.width = window.innerWidth,
		h = c.height = window.innerHeight,
		ctx = c.getContext( '2d' ),
		
		cx = w / 2,
		cy = h / 2,
		
		particles = [],
		tick = 0;

ctx.fillRect( 0, 0, w, h );

function Particle(){
	this.reset();
}
Particle.prototype.reset = function(){
	
	this.x = Math.random() * w;
	this.y = Math.random() < ( cy / h ) ? -Math.random() * h / 2 : h 
+ Math.random() * h / 2;
}
Particle.prototype.step = function(){
	
	var dx = this.x - cx,
			dy = this.y - cy,
			d = dx*dx + dy*dy; //squared distance
	
	ctx.strokeStyle = 'hsl(hue,80%,50%)'.replace( 'hue', dy + tick );
	ctx.beginPath();
	ctx.moveTo( this.x, this.y );
	this.x -= dx / 50;
	this.y -= dy / 10;
	ctx.lineTo( this.x, this.y );
	ctx.stroke();
	
	if( Math.abs(dy) < 2 )
		this.reset();
}

function anim(){
	
	window.requestAnimationFrame( anim );
	
	++tick;
	
	if( particles.length < 200 )
		particles.push( new Particle );
	
	ctx.fillStyle = 'rgba(0,0,0,.08)';
	ctx.fillRect( 0, 0, w, h );
	
	particles.map( function( particle ){ particle.step(); } );
}
anim();


window.addEventListener( 'resize', function(){
	
	w = c.width = window.innerWidth;
	h = c.height = window.innerHeight;
	
	ctx.fillRect( 0, 0, w, h );
})
window.addEventListener( 'mousemove', function( e ){
	
	cx = e.clientX;
	cy = e.clientY;
})
window.addEventListener( 'touch', function( e ){
	
	cx = e.clientX;
	cy = e.clientY;
})
