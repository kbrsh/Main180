if (!Detector.webgl) Detector.addGetWebGLMessage();
// Define basic variables
var camera, controls, scene, renderer;
// Start!
init();
animate();
// Defining what init() is
function init() {
// Set the scene with fog
  scene = new THREE.Scene();
  scene.fog = new THREE.FogExp2(0xcccccc, 0.002);
// Define the renderer
  renderer = new THREE.WebGLRenderer();
  renderer.setClearColor(scene.fog.color);
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);
// Append renderer to container
  var container = document.getElementById('container');
  container.appendChild(renderer.domElement);
// Set the THREE.js camera
  camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 1, 1000);
  camera.position.z = 500;
// Set the OrbitControls
  controls = new THREE.OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.dampingFactor = 0.25;
  controls.enableZoom = false;

  // Make each crystal

  var geometry = new THREE.IcosahedronGeometry(8.5, 0);

  var material = new THREE.MeshPhongMaterial({
    color: 0x35cf76,
    shading: THREE.FlatShading
  });
// Make a lot of the crystals!
  for (var i = 0; i < 500; i++) {

    var mesh = new THREE.Mesh(geometry, material);
    mesh.position.x = (Math.random() - 0.5) * 1000;
    mesh.position.y = (Math.random() - 0.5) * 1000;
    mesh.position.z = (Math.random() - 0.5) * 1000;
    mesh.updateMatrix();
    mesh.matrixAutoUpdate = false;
    scene.add(mesh);

  }

  // Add some lights to shine on the crystals

  light = new THREE.DirectionalLight(0xffffff);
  light.position.set(1, 1, 1);
  scene.add(light);

  light = new THREE.DirectionalLight(0x002288);
  light.position.set(-1, -1, -1);
  scene.add(light);

  light = new THREE.AmbientLight(0x222222);
  scene.add(light);

// Add the event for resizing

  window.addEventListener('resize', onWindowResize, false);

}
// If the window is resized, then everything will scale accordingly
function onWindowResize() {

  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();

  renderer.setSize(window.innerWidth, window.innerHeight);

}
// Define the animate() function
function animate() {

  requestAnimationFrame(animate);

  controls.update();
// Render!
  render();

}

function render() {
  renderer.render(scene, camera);
}
// Here we fade out the instructions (slowly) over 7 seconds, because they might get in the way
$('#instructions').fadeOut(7000);
