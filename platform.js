class Platform extends Vector {
	
	
	constructor(x, y, width, height, color) {
		
		super(x, y);
		this.height = height;
		this.width = width;
		this.color = color;
		this.dy = 0;
	}
	
	draw() {
		
		c.beginPath();
		c.fillStyle = this.color;
		c.rect(this.x, this.y, this.width, this.height);
		c.fill();
		
		
		this.y += this.dy
		this.dy = .75;
		
		if (player.y < 300 && player.dy < 0) {
			this.dy = -player.dy;
		} if (player.y < 100) {
			this.dy = 4;
		}
	}
}

