const scene = new THREE.Scene();
document.documentElement.requestFullscreen();
const windowsettings = {
    width: window.innerWidth,
    height: window.innerHeight
};

const defaults = {
    cheight: 2.5
}
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

const light = new THREE.PointLight( 0xffffff, 1, 100 );
light.position.set( 0, 2.5, 0 );
scene.add( light );

var ground = new addCube(2048,1,2048);

function generate() {
    var terrain = new addCube(Math.floor(Math.random() * 60 + 5),1,Math.floor(Math.random() * 60 + 5));
    terrain.main.position.y = 1;
    terrain.main.position.x = Math.floor(Math.random() * 1024);
    console.log("generated terrain piece!");
}

generate();

camera.position.z = 5;

var wheld = false;
var aheld = false;
var sheld = false;
var dheld = false;
var raheld = false;
var laheld = false;
var croty = 0;

document.addEventListener("keydown", function(ipt) {
    let key = ipt.code
    switch (key) {
        case "KeyW":
            wheld = true;
            break;
        case "KeyA":
            aheld = true;
            break;
        case "KeyS":
            sheld = true;
            break;
        case "KeyD":
            dheld = true;
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
        case "KeyA":
            aheld = false;
            break;
        case "KeyS":
            sheld = false;
            break;
        case "KeyD":
            dheld = false;
            break;
        case "ArrowRight":
            raheld = false;
            break;
        case "ArrowLeft":
            laheld = false;
            break;
    }
});
camera.position.y = defaults.cheight;

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
        camera.translateZ(-0.1);
        camera.position.y = defaults.cheight;
    }
    if (aheld) {
        camera.translateX(-0.1);
        camera.position.y = defaults.cheight;
    }
    if (sheld) {
        camera.translateZ(0.1);
        camera.position.y = defaults.cheight;
    }
    if (dheld) {
        camera.translateX(0.1);
        camera.position.y = defaults.cheight;
    }
    if (raheld) {
        croty -= 0.02;
    }
    if (laheld) {
        croty += 0.02;
    }
    camera.rotation.x = mousey + 8192;
    camera.rotation.y = (mousex) + 64 + croty;
    light.position.set( camera.position.x, camera.position.y, camera.position.z );
}
animate();
