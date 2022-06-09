const scene = new THREE.Scene();
scene.background = new THREE.Color( 0x606060 );
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
camera.position.z = 30;
camera.position.y = 5;

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const light = new THREE.PointLight(0xffffff, 2);
light.position.set(-20,30,50);
scene.add( light );

const material = new THREE.MeshPhongMaterial( { color: 0xffffff, shininess: 10, emissive: 0x000000, specular: 0x2b2b2b } );

const rook = new THREE.Group();

// Podstawa
const base = new THREE.Mesh(
    new THREE.CylinderGeometry( 3, 3, 1, 64 ),
    material
)
rook.add( base );

// Środek
const middle = new THREE.Mesh(
    new THREE.CylinderGeometry( 1.5, 2.8, 12, 64 ),
    material
)
middle.position.set(0, 5, 0);
rook.add( middle );

// const ring = new THREE.Mesh(
//     new THREE.TorusGeometry( 1.6, 0.175, 30, 200, 6.54 ),
//     material
// )
// ring.rotation.x = 1.5;
// ring.position.set(0, 9.5, 0);
// rook.add( ring );

// 
// const topBase = new THREE.Mesh(
//     new THREE.CylinderGeometry( 2, 1.5, 1.5, 64 ),
//     material
// )
// topBase.position.set(0, 10, 0);
// rook.add( topBase );

// const topElement = new THREE.Mesh(
//     new THREE.CylinderGeometry( 2, 2, 1.25, 64 ),
//     material
// )
// topElement.position.set(0, 11.25, 0);
// rook.add( topElement );

const middleTorus = new THREE.Mesh(
    new THREE.TorusGeometry(1.6, 0.5, 30, 200, 6.50),
    material
)
middleTorus.rotation.set(1.5, 0, 0)
middleTorus.position.set(0, 10, 0);
rook.add(middleTorus)

const topCylinder = new THREE.Mesh(
    new THREE.CylinderGeometry( 2.2, 1.5, 3, 64 ),
    material
)
topCylinder.position.set(0, 12, 0);
rook.add( topCylinder );

const topSphere = new THREE.Mesh(
    new THREE.SphereGeometry(2.2, 32, 16),
    material

)
topSphere.position.set(0, 14, 0)
rook.add(topSphere)

const topSphere2 = new THREE.Mesh(
    new THREE.SphereGeometry(1, 32, 16),
    material

)
topSphere2.position.set(0, 16, 0)
rook.add(topSphere2)

rook.rotation.set( .25, 0, 0 );
scene.add( rook );



// Światło


renderer.render( scene, camera );