let canvas = document.getElementById('main');
let c = canvas.getContext('2d')


// Event Listiners
window.addEventListener('load', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    init();
});
window.addEventListener('keydown', function(event) {
	if (event.key === 'a') {
    	keyPressed.a = true;
	} 
	if (event.key === 'd') {
		keyPressed.d = true;
  	}
	if (event.key === 'space') {
		keyPressed.space = true;
	}
});
window.addEventListener('keyup', function(event) {
	if (event.key === 'a') {
		keyPressed.a = false;
	} 
	if (event.key === 'd') {
		keyPressed.d = false;
  	}
	if (event.key === 'space') {
		keyPressed.space = false;
	}
});




let center = {
	x: canvas.width/2,
	y: canvas.height/2
}
let player;
let playerWidth = 40;
let playerHeight = 40;
let playerSpeed = 5;

let keyPressed = {
  a: true, 
  d: true,
  space: true
};



function init() {
	
	player = new Player (140, 400, 0, 0, playerWidth, playerHeight);
		
		
		update();
	
}

function update() {
	c.clearRect(0, 0, canvas.width, canvas.height);
	player.draw();

	// Key Press thingys
	if (keyPressed.a) {
	player.x -= playerSpeed

	}  if (keyPressed.d) { 
	player.x += playerSpeed
	}
	if (keyPressed.space) {
	  player.y -= 1;
	}


	// Infinite Screen 
	if (player.x < -playerWidth) {
		player.x = 300

	}
	if (player.x > 300) {
		player.x = 0

	}
	
	
	
	
    requestAnimationFrame(update);
	
}


