var W = 400,
  vx = -0.03 * Math.random() * 0.06,
  vy = -0.03 * Math.random() * 0.06,
  H = 400,
  angle = 45,
  nearest = 1,
  farthest = 1000,
  hue = 0;

var scene = new THREE.Scene(),
  camera = new THREE.PerspectiveCamera(angle,
    W / H,
    nearest,
    farthest),
  renderer = new THREE.WebGLRenderer();


// Add the camera to the scene
scene.add(camera);

camera.position.z = 300;

renderer.setSize(W, H);

document.getElementById("ball").appendChild(renderer.domElement);

/**
 * Now we are ready, we can start building our planet
 * To do this, we need a mech define with :
 * A geometry (a sphere) 
 * A material
 */
var geometry, material, mesh;

geometry = new THREE.SphereGeometry(100, 20, 20);

var myMaterial = {
  wireframe: true,
  wireframeLinewidth: 2
}

material = new THREE.MeshPhongMaterial(myMaterial);

material.color.setHSV(hue, 1, 1);


mesh = new THREE.Mesh(geometry, material);


scene.add(mesh);

var pointLight = new THREE.PointLight(0xFFFFFF);

// and set its position
pointLight.position.x = -100;
pointLight.position.y = 100;
pointLight.position.z = 400;

scene.add(pointLight);

renderer.render(scene, camera);

if (!window.requestAnimationFrame) {
  window.requestAnimationFrame = (function() {
    return window.webkitRequestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      window.oRequestAnimationFrame ||
      window.msRequestAnimationFrame ||
      function(callback) {
        window.setTimeout(callback, 1000 / 60);
      };
  })();
}

function animate() {
  requestAnimationFrame(animate);

  hue = hue < 1 ? hue += 0.0005 : 0;
  material.color.setHSV(hue, 1, 1);

  mesh.rotation.y -= vy;
  mesh.rotation.x -= vx;

  vx += -0.003 * Math.random() * 0.006
  vy += -0.003 * Math.random() * 0.006

  renderer.render(scene, camera);
}

animate();

document.getElementById("ball").addEventListener("click", function() {
  vx += -0.03 * Math.random() * 0.06
  vy += -0.03 * Math.random() * 0.06
});
