const scene = new THREE.Scene();
document.documentElement.requestFullscreen();
const windowsettings = {
    width: window.innerWidth,
    height: window.innerHeight
};
const camera = new THREE.PerspectiveCamera( 70, 2, 1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

var addCube = function(width,height,depth) {
    const geometry = new THREE.BoxGeometry(width,height,depth);
    const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
    const cube = new THREE.Mesh( geometry, material );
    scene.add( cube );
    this.main = cube;
}

var ground = new addCube(3,1,3);

camera.position.z = 5;

var wheld = false;
var sheld = false;
var raheld = false;
var laheld = false;
var croty = 0;

document.addEventListener("keydown", function(ipt) {
    let key = ipt.code
    switch (key) {
        case "KeyW":
            wheld = true;
            break;
        case "KeyS":
            sheld = true;
            break;
        case "KeyO":
            croty = 0;
            break;
        case "ArrowRight":
            raheld = true;
            break;
        case "ArrowLeft":
            laheld = true;
            break;
    }
});

document.addEventListener("keyup", function(ipt) {
    let key = ipt.code
    switch (key) {
        case "KeyW":
            wheld = false;
            break;
        case "KeyS":
            sheld = false;
            break;
        case "ArrowRight":
            raheld = false;
            break;
        case "ArrowLeft":
            laheld = false;
            break;
    }
});
camera.position.y = 2

var mousex;
var mousey;
var mdwn = false;

document.addEventListener("mousedown", e => {
    mdwn = true;
});

document.addEventListener("mouseup", e => {
    mdwn = false;
});

document.addEventListener("mousemove", e => {
    mousex = e.offsetX / 128;
    mousey = e.offsetY / 256;
});

// this is the main function, it basically makes things move and stuff
function animate() {
	requestAnimationFrame( animate );
	renderer.render( scene, camera );
    // key input if statements
    if (wheld) {
        camera.position.z -= 0.1;
    }
    if (sheld) {
        camera.position.z += 0.1;
    }
    if (raheld) {
        croty -= 0.02;
    }
    if (laheld) {
        croty += 0.02;
    }
    camera.rotation.x = mousey + 8192;
    camera.rotation.y = (mousex) + 64 + croty;
}
animate();
