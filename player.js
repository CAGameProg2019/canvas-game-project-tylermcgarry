class Player extends Vector {
    
    constructor(x, y, dx, dy, playerWidth, playerHeight) {
		super(x, y);
		
		this.dx = dx;
		this.dy = dy;
		this.playerHeight = playerHeight;
		this.playerWidth = playerWidth;
	
		
    }
	
	draw() {
		
		c.beginPath();
		c.rect(this.x, this.y, playerWidth, playerHeight);
		c.fill();
		
		
		
		this.x += this.dx;
		this.y += this.dy;

	}
}