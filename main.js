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
		player.dy = -player.dy;  
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
let playerSpeed = 2;
let platforms = [];
let platformNum = 20;







function init() {
	
	player = new Player (160, 200, 0, 0, playerWidth, playerHeight);
	
	
	for (var i = 0; i < platformNum; i++) {
		
		
//		platform = new Platform (150, 400, 45, 7, 'red')
		platform = new Platform (Math.random()*300, Math.random()*canvas.height, 45, 2, 'black');
		platforms.push(platform);
	}

	
	update();

	
}

function update() {
	c.clearRect(0, 0, canvas.width, canvas.height); 
   
	
	
	// Drawing Platforms
	for (var i=0; i < platforms.length; i++) {
		platforms[i].draw();
		
		if (platforms[i].y > canvas.height) {
			
			platforms[i].y = Math.random()*-5;
			platforms[i].x = Math.random()* canvas.width;
			
			
		}
		
	}
	
	
	
	
	for (var i=0; i < platforms.length; i++) {
		
	}
	
	
	
	
	// Key Press Detection
	if (keyPressed.a) {
		player.x -= playerSpeed
	}  if (keyPressed.d) { 
		player.x += playerSpeed
	} 
	
	// Collision Detection
	
	let bounce = false;
	
	
	for (var i = 0; i < platforms.length; i++) {

			
			if (player.x > platforms[i].x && player.x < platforms[i].x + platform.width && platforms[i].y < player.y + player.height && player.dy >= 0) {
				
				player.dy = -24;
			
				
			} 

	}
	
	player.draw(bounce);
	
	console.log(platforms.length);

	// Infinite Screen 
	if (player.x < -playerWidth) {
		player.x = 300

	}
	if (player.x > 300) {
		player.x = 0
	}
	
	
	// Game Over 
	
	if (player.y >= canvas.height) {
		
		platforms.dy = 0;
	}
	
	
	
    requestAnimationFrame(update);
	
}


