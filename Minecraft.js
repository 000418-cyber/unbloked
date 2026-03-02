let scene = new THREE.Scene();
let camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
let renderer = new THREE.WebGLRenderer();

renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

let geometry = new THREE.BoxGeometry();
let material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });

for (let x = -5; x < 5; x++) {
    for (let z = -5; z < 5; z++) {
        let cube = new THREE.Mesh(geometry, material);
        cube.position.set(x, 0, z);
        scene.add(cube);
    }
}

camera.position.y = 5;
camera.position.z = 10;

function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}
animate();

window.addEventListener("click", () => {
    let cube = new THREE.Mesh(
        new THREE.BoxGeometry(),
        new THREE.MeshBasicMaterial({ color: Math.random() * 0xffffff })
    );
    cube.position.set(
        Math.floor(Math.random()*10)-5,
        1,
        Math.floor(Math.random()*10)-5
    );
    scene.add(cube);
});
