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
		keyPressed.space = true  ;  
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
let shoot;
let playerWidth = 30;
let playerHeight = 40;
let playerSpeed = 7;
let jumpSpeed = .2;
let platforms = [];
let monsters = [];
let platformNum = 10;
let monsterNum = 1;
let boundary = 400;
let bgcolor = "white";

function gameOver() {

	platforms = [];
	monsters = [];
}

function color() {
	bgcolor = "#1d1f21";
}


// Colors 
// #03A9F4 - player blue
// #971FC9 - player purple

function init() {
	
	player = new Player (160, 200, 0, 0, playerWidth, playerHeight, "#03A9F4");
	
	
	
	
	
	for (var i = 0; i < monsterNum; i++) {
		monster = new Monster(Math.random()*boundary, Math.random()*canvas.height, 50, 30, '#F44336');
		monsters.push(monster);
	}
	
	for (var i = 0; i < platformNum; i++) {
		
//		platform = new Platform (150, 400, 45, 7, 'red')
		platform = new Platform (Math.random()*boundary, Math.random()*canvas.height, 45, 6, 'green');
		platforms.push(platform);
	}

	update();

	
}

function update() {
	c.beginPath();
	c.fillStyle = bgcolor;
	c.rect(0, 0, canvas.width, canvas.height);
	c.fill();
	
	//c.clearRect(0, 0, canvas.width, canvas.height); 
   
	// Drawing Platforms
	for (var i=0; i < platforms.length; i++) {
		platforms[i].draw();
		if (platforms[i].y > canvas.height) {	
			platforms[i].y = Math.random()*-5;
			platforms[i].x = Math.random()* boundary - 45;	
		}
	}
	
	// Drawing Monsters
	for (var i = 0; i < monsters.length; i++) {
		monsters[i].draw();
		if (monsters[i].y > canvas.height) {	
			monsters[i].y = Math.random()*-5;
			monsters[i].x = Math.random()* boundary - 45;	
		}
	}
	
	setTimeout(color, 8000);
	
	
	// Key Press Detection
	if (keyPressed.a) {
		player.x -= playerSpeeda
	}  if (keyPressed.d) { 
		player.x += playerSpeed
	}  if (keyPressed.space) {
		shoot = new Shoot(player.x, player.y -3, 5, 20, 'red');  
		shoot.draw();
		
	}
	
	// Collision Detection
	
	// Monsters
	
	for ( var i = 0; i < monsters.length; i++) {
		if (monsters[i].x < player.x + player.width && monsters[i].x + monsters[i].width > player.x && monsters[i].y < monsters[i].y + player.height && monsters[i].y + monsters[i].height > player.y) {
			gameOver();
			
		} //if (monsters[i].x < player.x + player.width && monsters[i].x + monsters[i].width > player.x && monsters[i].y < monsters[i].y + player.height && monsters[i].y + monsters[i].height > player.y && player.dy < 0) {
			//monsters[i].splice(i, 1);
		//}
	}
	
	// Platforms
	let bounce = false;
	  
	for (var i = 0; i < platforms.length; i++) {
	
		if (player.x > platforms[i].x && player.x < platforms[i].x + platform.width && platforms[i].y < player.y + player.height && player.dy >= 0) {	
			player.dy = -20;
		} 
	}
	
	player.draw(bounce);
	
	
	
	
	
	// Infinite Screen 
	if (player.x < -playerWidth) {
		player.x = boundary;
	} if (player.x > boundary) {
		player.x = 0
	}
	
	// Game Over 
	if (player.y > canvas.height) {
		
			gameOver();
	
	}
	
    requestAnimationFrame(update);
	
}


