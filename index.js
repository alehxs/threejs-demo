import * as THREE from "three";
import { OrbitControls } from "jsm/controls/OrbitControls.js";
import { GLTFLoader } from "jsm/loaders/GLTFLoader.js";
import { FontLoader } from "jsm/loaders/FontLoader.js";
import { TextGeometry } from "jsm/geometries/TextGeometry.js";

function animate(time = 0) {
  requestAnimationFrame(animate);
  // mesh.scale.setScalar(Math.cos(time * 0.003) * 0.2 + 1.0);
  mesh.rotation.y = time * 0.0001;
  renderer.render(scene, camera);
  controls.update();
}

const w = window.innerWidth;
const h = window.innerHeight;

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(w, h);
document.body.appendChild(renderer.domElement);

const fieldOfView = 75;
const aspectRatio = w / h;
const near = 0.1;
const far = 10;

const camera = new THREE.PerspectiveCamera(fieldOfView, aspectRatio, near, far);
camera.position.z = 2;
const scene = new THREE.Scene();

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.03;

const geometry = new THREE.IcosahedronGeometry(1.0, 2);
const material = new THREE.MeshStandardMaterial({
  color: 0x87ceeb,
  flatShading: true,
});

const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

const wireMaterial = new THREE.MeshBasicMaterial({
  color: 0xffd700,
  wireframe: true,
});

const wireMesh = new THREE.Mesh(geometry, wireMaterial);
wireMesh.scale.setScalar(1.001);
mesh.add(wireMesh);
mesh.scale.set(0.5, 0.5, 0.5);

// const hemiLight = new THREE.HemisphereLight(0xe8002d, 0x00e5f0, 2);
// scene.add(hemiLight);

const hemiLight = new THREE.HemisphereLight(0x87ceeb, 0xe8002d, 2);
hemiLight.position.set(0, 1, 0);
scene.add(hemiLight);

const fontLoader = new FontLoader();
fontLoader.load(
  "https://threejs.org/examples/fonts/helvetiker_regular.typeface.json",
  (font) => {
    const textGeo = new TextGeometry("Gorilla, the world is yours.", {
      font,
      size: 0.125,
      height: 0.02,
    });
    textGeo.computeBoundingBox();
    textGeo.center();

    const textMaterial = new THREE.MeshStandardMaterial({ color: 0xffffff });
    const textMesh = new THREE.Mesh(textGeo, textMaterial);
    textMesh.position.set(0, -0.7, 0);
    scene.add(textMesh);
  },
);

const loader = new GLTFLoader();
loader.load("Gorilla.glb", (gltf) => {
  const model = gltf.scene;
  model.position.set(0, 0.9, 0);
  model.scale.set(0.1, 0.1, 0.1);
  mesh.add(model);
});

animate();
