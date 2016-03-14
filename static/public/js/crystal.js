function init() {


// Set the scene and camera
	var scene = new THREE.Scene();
	var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
// Make renderer
	var renderer = new THREE.WebGLRenderer({ alpha: true });
	renderer.setSize( window.innerWidth, window.innerHeight );
	document.body.appendChild( renderer.domElement );
// The geometry of the shapes
	var shape = [];
	geometry = new THREE.IcosahedronGeometry(2.5,0);
	material = new THREE.MeshNormalMaterial({ color: 0x348f50 });
	shape[0] = new THREE.Mesh( geometry, material );
	shape[1] = new THREE.Mesh( geometry, material );
	shape[2] = new THREE.Mesh( geometry, material );
	shape[0].position.set(0,5,0);
	shape[1].position.set(0,5,0);
	shape[2].position.set(0,5,0);
	scene.add(shape[1], shape[2], shape[0]);

	var light = new THREE.PointLight(0x56b4d3);
	light.position.set(0,250,0);
	scene.add(light);
// Set camera position
	camera.position.set(1,4,10); // x y z
// Render everything
	function render() {
		requestAnimationFrame( render );
// Spin all of the shapes...they are inside of each other so it looks cool
		shape[0].rotation.x += 0.035;
		shape[0].rotation.y -= 0.005;
		shape[1].rotation.y += 0.015;
		shape[1].rotation.z -= 0.005;
		shape[2].rotation.z -= 0.025;
		shape[2].rotation.x += 0.005;
		renderer.render(scene, camera);
	}
	render();

}
// Start!
init();
