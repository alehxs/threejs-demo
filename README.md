# Gradient Sphere (Three.js)

This is me experimenting with Three.js where I am trying to understand WebGL lighting, materials, animation, and model loading.  
The scene displays an animated icosahedron with a color gradient using `HemisphereLight`, overlaid with a wireframe mesh, and includes a gorilla model placed on top of the sphere.

## Features

- Top-to-bottom lighting gradient via HemisphereLight
- Icosahedron mesh with wireframe overlay
- Smooth rotation animation
- Gorilla 3D model added and parented to the sphere
- Interactive camera using OrbitControls

## Gorilla Model

The gorilla model is loaded using `GLTFLoader` and added as a child of the rotating sphere.  
It is scaled and positioned to sit properly on top of the sphere and rotates with it.

Model Attribution: **Gorilla** by [jeremy](https://poly.pizza/u/jeremy) [CC-BY] via [Poly Pizza](https://poly.pizza/)

## Tech Stack

- [Three.js](https://threejs.org/)
- [JavaScript Modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules)

## Run Locally

1. Clone the repository
2. Serve the project using a local server (e.g. VS Code Live Server Extension)
3. Open `index.html` in your browser
