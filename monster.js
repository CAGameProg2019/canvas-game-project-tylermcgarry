class Monster extends Platform {
    
		constructor(x, y, width, height, color) {
		
		super (x, y, width, height, color);
		
	}
	
	draw() {
		
		c.beginPath();
		c.fillStyle = this.color;
		c.rect(this.x, this.y, this.width, this.height);
		c.fill();
		
		
		this.y += this.dy
		this.dy = platform.dy;
	}
}