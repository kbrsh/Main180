var renderer, scene, camera, distance;

var container = document.getElementById('container');

init();

function init() {
  renderer = new THREE.WebGLRenderer({antialias:true});
  renderer.setSize(window.innerWidth, window.innerHeight);
  container.appendChild(renderer.domElement);

  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(150, window.innerWidth / window.innerHeight, 1, 10000);
  scene.add(camera);

  distance = 1000;
  var geometry = new THREE.Geometry();

  for (var i = 0; i < 250; i++) {

    var square = new THREE.CubeGeometry(1, 1, 10);
    var material = new THREE.MeshBasicMaterial({
      color: Math.random() * 0xff00000 - 0xff00000,
      opacity: 0.5,
      // wireframe: true
    })
    var particule = new THREE.Mesh(square, material);

    particule.position.x = Math.random() * distance * 2 - distance;
    particule.position.y = Math.random() * distance * 2 - distance;
    particule.position.z = Math.random() * distance * 2 - distance;
    particule.scale.x = particule.scale.y = particule.scale.z = Math.random() * 10 + 5;

    geometry.vertices.push(new THREE.Vector3(particule.position));
    scene.add(particule);
  }

  camera.position.z = 1000;
  // camera.lookAt(particule);

  renderer.render(scene, camera);

  document.addEventListener('mousemove', onMouseMove, false);
}

function onMouseMove(event) {
  var mouseX = event.clientX - window.innerWidth / 2;
  var mouseY = event.clientY - window.innerHeight / 2;
  camera.position.x += (mouseX - camera.position.x) * 0.05;
  camera.position.y += (mouseY - camera.position.y) * 0.05;
  camera.position.z = distance;
  camera.lookAt(scene.position);
  renderer.render(scene, camera);
}
