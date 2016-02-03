if (window.File && window.FileReader && window.FileList && window.Blob) {
  // Great success! All the File APIs are supported.
} else {
  alert('The File APIs are not fully supported in this browser.');
}

if ( ! Detector.webgl ) Detector.addGetWebGLMessage();

var container, stats;

var camera, cameraTarget, scene, renderer;

var targetRotation = 0;
var targetRotationOnMouseDown = 0;

var mouseX = 0;
var mouseXOnMouseDown = 0;

var windowHalfX = window.innerWidth / 2;
var windowHalfY = window.innerHeight / 2;

var radius = 600;
var theta = 0;
var PI2 = Math.PI * 2;

var ZOOM_MIN_X = 3;
var ZOOM_MAX_X = 15;
var ZOOM_MIN_Y = 3;
var ZOOM_MAX_Y = 15;
var ZOOM_MIN_Z = 3;
var ZOOM_MAX_Z = 15;

init();
animate();

function init() {

  container = document.createElement( 'div' );
  document.body.appendChild( container );

  camera = new THREE.PerspectiveCamera( 35, window.innerWidth / window.innerHeight, 1, 15 );
  camera.position.set( 3, 0.15, 3 );

  cameraTarget = new THREE.Vector3( 0, -0.25, 0 );

  scene = new THREE.Scene();
  scene.fog = new THREE.Fog( 0x72645b, 2, 15 );


  // Ground

  var plane = new THREE.Mesh(
    new THREE.PlaneBufferGeometry( 40, 40 ),
    new THREE.MeshPhongMaterial( { color: 0x999999, specular: 0x101010 } )
  );
  plane.rotation.x = -Math.PI/2;
  plane.position.y = -0.5;
  scene.add( plane );

  plane.receiveShadow = true;

  var loader = new THREE.STLLoader();

  // Lights

  scene.add( new THREE.HemisphereLight( 0x443333, 0x111122 ) );

  addShadowedLight( 0.5, 1, -1, 0xffff99, 1 );

  // renderer

  renderer = new THREE.WebGLRenderer( { antialias: true } );
  renderer.setClearColor( scene.fog.color );
  renderer.setPixelRatio( window.devicePixelRatio );
  renderer.setSize( window.innerWidth, window.innerHeight );

  renderer.gammaInput = true;
  renderer.gammaOutput = true;

  renderer.shadowMap.enabled = true;
  renderer.shadowMap.cullFace = THREE.CullFaceBack;

  container.appendChild( renderer.domElement );

  // stats

  stats = new Stats();
  stats.domElement.style.position = 'absolute';
  stats.domElement.style.top = '0px';
  container.appendChild( stats.domElement );

  //

  window.addEventListener( 'resize', onWindowResize, false );

  function handleFileSelect(evt) {
    var files = evt.target.files; // FileList object

    // files is a FileList of File objects. List some properties.
    var output = [];
    for (var i = 0, f; f = files[i]; i++) {
      var reader = new FileReader();

      reader.onload = (function(theFile) {
        return function(e) {
          loader.load(e.target.result, function ( geometry ) {
            var material = new THREE.MeshPhongMaterial( { color: 0xff5533, specular: 0x111111, shininess: 200 } );
            var mesh = new THREE.Mesh( geometry, material );

            mesh.position.set( 0, 0, 0 );
            mesh.rotation.set( 0, 0, 0 );
            mesh.scale.set( 1, 1, 1 );

            mesh.castShadow = true;
            mesh.receiveShadow = true;

            scene.add( mesh );
          });
        };
      })(f);
      reader.readAsDataURL(f);

    }
  }

  document.getElementById('files').addEventListener('change', handleFileSelect, false);

}

function onWindowResize() {
	camera.left = window.innerWidth / - 2;
	camera.right = window.innerWidth / 2;
	camera.top = window.innerHeight / 2;
	camera.bottom = window.innerHeight / - 2;
	camera.aspect = window.innerWidth / window.innerHeight;

	renderer.setSize( window.innerWidth, window.innerHeight );
}

function onDocumentMouseDown( event ) {
	event.preventDefault();

	document.addEventListener( 'mousemove', onDocumentMouseMove, false );
	document.addEventListener( 'mouseup', onDocumentMouseUp, false );
	document.addEventListener( 'mouseout', onDocumentMouseOut, false );
	mouseXOnMouseDown = event.clientX - windowHalfX;
	targetRotationOnMouseDown = targetRotation;
}

function onDocumentMouseMove( event ) {
	mouseX = event.clientX - windowHalfX;
	targetRotation = targetRotationOnMouseDown + ( mouseX - mouseXOnMouseDown ) * 0.02;
}

function onDocumentMouseUp( event ) {
	document.removeEventListener( 'mousemove', onDocumentMouseMove, false );
	document.removeEventListener( 'mouseup', onDocumentMouseUp, false );
	document.removeEventListener( 'mouseout', onDocumentMouseOut, false );
}

function onDocumentMouseOut( event ) {
	document.removeEventListener( 'mousemove', onDocumentMouseMove, false );
	document.removeEventListener( 'mouseup', onDocumentMouseUp, false );
	document.removeEventListener( 'mouseout', onDocumentMouseOut, false );
}

function onDocumentMouseOver( event ) {
	document.removeEventListener( 'mousemove', onDocumentMouseMove, false );
	document.removeEventListener( 'mouseup', onDocumentMouseUp, false );
	document.removeEventListener( 'mouseout', onDocumentMouseOut, false );
}

function onDocumentTouchStart( event ) {
	if ( event.touches.length === 1 ) {
		event.preventDefault();
		mouseXOnMouseDown = event.touches[ 0 ].pageX - windowHalfX;
		targetRotationOnMouseDown = targetRotation;
	}
}

function onDocumentTouchMove( event ) {
	if ( event.touches.length === 1 ) {
		event.preventDefault();
		mouseX = event.touches[ 0 ].pageX - windowHalfX;
		targetRotation = targetRotationOnMouseDown + ( mouseX - mouseXOnMouseDown ) * 0.05;
	}
}

function addShadowedLight( x, y, z, color, intensity ) {

  var directionalLight = new THREE.DirectionalLight( color, intensity );
  directionalLight.position.set( x, y, z );
  scene.add( directionalLight );

  directionalLight.castShadow = true;
  // directionalLight.shadowCameraVisible = true;

  var d = 1;
  directionalLight.shadowCameraLeft = -d;
  directionalLight.shadowCameraRight = d;
  directionalLight.shadowCameraTop = d;
  directionalLight.shadowCameraBottom = -d;

  directionalLight.shadowCameraNear = 1;
  directionalLight.shadowCameraFar = 4;

  directionalLight.shadowMapWidth = 1024;
  directionalLight.shadowMapHeight = 1024;

  directionalLight.shadowBias = -0.005;

}

function onWindowResize() {

  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();

  renderer.setSize( window.innerWidth, window.innerHeight );

}

function animate() {

  requestAnimationFrame( animate );

  render();
  stats.update();

}

function render() {

  var timer = Date.now() * 0.0005;

  //camera.position.x = Math.cos( timer ) * 3;
  //camera.position.z = Math.sin( timer ) * 3;

//  var d = Math.cos( timer ) * 3;
//  d = 100 * ((d>0)?1:-1);
//  mb = d>0 ? 1.1 : 0.9;
//
//  var cPos = camera.position;
//
//  cPos.x = cPos.x * mb;
//  cPos.y = cPos.y * mb;
//  cPos.z = cPos.z * mb;
//
//  console.log(cPos.x, cPos.y, cPos.z);

  camera.lookAt( cameraTarget );

  renderer.render( scene, camera );

}

var mousewheel  = function ( e ) {
  e.preventDefault();
  var d = ((typeof e.wheelDelta != "undefined")?(-e.wheelDelta):e.detail);
  d = 100 * ((d>0)?1:-1);
  var cPos = camera.position;
  if (isNaN(cPos.x) || isNaN(cPos.y) || isNaN(cPos.y)) return;

  // Your zomm limitation
  // For X axe you can add anothers limits for Y / Z axes
//  if (cPos.x > ZOOM_MIN_X || cPos.x < ZOOM_MAX_X ){
//    return ;
//  }
//  if (cPos.y > ZOOM_MIN_Y || cPos.y < ZOOM_MAX_Y ){
//    return ;
//  }
//  if (cPos.z > ZOOM_MIN_Z || cPos.z < ZOOM_MAX_Z ){
//    return ;
//  }

  mb = d>0 ? 1.1 : 0.9;
  cPos.x = cPos.x * mb;
  cPos.y = cPos.y * mb;
  cPos.z = cPos.z * mb;
}

document.addEventListener( 'mousedown', onDocumentMouseDown, false );
document.addEventListener( 'mouseover', onDocumentMouseOver, false );
document.addEventListener( 'touchstart', onDocumentTouchStart, false );
document.addEventListener( 'touchmove', onDocumentTouchMove, false );
window.addEventListener('DOMMouseScroll', mousewheel, false);
window.addEventListener('mousewheel', mousewheel, false);
window.addEventListener( 'resize', onWindowResize, false );
