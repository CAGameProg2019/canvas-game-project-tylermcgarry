class Platform extends Vector {
	
	
	constructor(x, y, width, height, color) {
		
		super(x, y);
		this.height = height;
		this.width = width;
		this.color = color;
	}
	
	draw() {
		
		c.beginPath();
		c.rect(this.x, this.y, this.width, this.height);
		c.fill();
		
		
	}
}

