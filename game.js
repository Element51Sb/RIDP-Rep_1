let scene, camera, renderer;
let audioListener, audio;

function showGame() {
    document.getElementById('home').classList.remove('active');
    document.getElementById('game').classList.add('active');
    initThreeJS();
}

function showSettings() {
    document.getElementById('home').classList.remove('active');
    document.getElementById('settings').classList.add('active');
}

function showHome() {
    document.getElementById('game').classList.remove('active');
    document.getElementById('settings').classList.remove('active');
    document.getElementById('home').classList.add('active');
}

// Three.js initialisatie
function initThreeJS() {
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.getElementById('3d-canvas').appendChild(renderer.domElement);

    // Audio listener instellen
    audioListener = new THREE.AudioListener();
    camera.add(audioListener);

    // Audio instellen
    audio = new THREE.Audio(audioListener);
    const audioLoader = new THREE.AudioLoader();
    audioLoader.load('path/to/your/sound.mp3', function(buffer) {
        audio.setBuffer(buffer);
        audio.setLoop(true);
        audio.setVolume(0.5); // Begin met 50% volume
        audio.play();
    });

    const loader = new THREE.GLTFLoader();
    loader.load('path/to/your/model.glb', function (gltf) {
        scene.add(gltf.scene);
        render();
    }, undefined, function (error) {
        console.error(error);
    });

    camera.position.z = 5;

    window.addEventListener('resize', function () {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    });
}

function render() {
    requestAnimationFrame(render);
    renderer.render(scene, camera);
}

// Volume instellen
function setVolume(value) {
    const volume = parseFloat(value);
    audio.setVolume(volume); // Pas het volume van de audio aan
    document.getElementById('volume-value').textContent = `Volume: ${Math.round(volume * 100)}%`; // Laat het volume zien
}
