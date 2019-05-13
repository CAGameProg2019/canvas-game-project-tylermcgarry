class Player extends Vector {
    
    constructor(x, y, dx, dy, width, height, color) {
		super(x, y);
		
		this.dx = dx;
		this.dy = dy;
		this.height = height;
		this.width = width;
		this.color = color;
	
    }
	
	draw(bounce) { 
		
		c.beginPath();
		c.fillStyle = this.color;
		c.rect(this.x, this.y, this.width, this.height);
		c.fill();
		if (bounce) {
			this.dy *= -jumpSpeed;
		} else {
			this.dy += 1;
		}
		
		
		
		this.x += this.dx;
		this.y += this.dy;
		
		this.dy += jumpSpeed;
		
	}
}