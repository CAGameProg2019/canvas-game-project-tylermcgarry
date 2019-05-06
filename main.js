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
	if (event.key === ' ') {
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
	if (event.key === ' ') {
		keyPressed.space = false;
	}
});
   
let keyPressed = {
  a: false, 
  d: false,
  space: false
};
   
let center = {
	x: canvas.width/2,
	y: canvas.height/2
}
let player;
let platform;
let playerWidth = 30;
let playerHeight = 40;
let playerSpeed = 5;
let platforms = [];







function init() {
	
	player = new Player (140, 400, 0, 0, playerWidth, playerHeight);
	
	for (var i = 0; i < 25; i++) {
		
		platform = new Platform (Math.random()*300, Math.random()*canvas.height, 45, 7, 'red');
		platforms.push(platform);
	}


	update();
	
}

function update() {
	c.clearRect(0, 0, canvas.width, canvas.height);
   
	
	player.draw();
	// Drawing Platforms
	for (var i = 0; i < 10; i++) {
		platforms[i].draw();
	}
	
	
	// Key Press Detection
	if (keyPressed.a) {
	player.x -= playerSpeed

	}  if (keyPressed.d) { 
	player.x += playerSpeed
	}
	
	// BOUNCING Condition s
	
	if (((player.x + playerWidth < platforms[i].x) && (player.x < platforms[i].x + 45)) && (player.y + 40 === platforms[i].y) && (player.speed > 0)) {
		this.dy = -this.dy;
		console.log('holy fuck');
	}
	
	// https://codepen.io/tylermcgarry/pen/QYqvoM?editors=0010


	// Infinite Screen 
	if (player.x < -playerWidth) {
		player.x = 300

	}
	if (player.x > 300) {
		player.x = 0
	}
	
	
	
    requestAnimationFrame(update);
	
}


