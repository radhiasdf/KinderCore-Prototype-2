export class Firework {
  constructor(x, y, canvas) {
    this.canvas = canvas;
    this.x = x;
    this.y = canvas.height;
    this.targetY = y;
    this.speed = 5;
    this.exploded = false;
    this.particles = [];
    this.color = `hsl(${Math.random() * 360}, 100%, 60%)`;
  }

  update() {
    if (!this.exploded) {
      this.y -= this.speed;
      if (this.y <= this.targetY) {
        this.exploded = true;
        this.createParticles();
      }
    } else {
      this.particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;
        p.alpha -= 0.01;
      });
      this.particles = this.particles.filter(p => p.alpha > 0);
    }
  }

  createParticles() {
    for (let i = 0; i < 30; i++) {
      const angle = Math.random() * 2 * Math.PI;
      const speed = Math.random() * 3 + 2;
      this.particles.push({
        x: this.x,
        y: this.y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        alpha: 1
      });
    }
  }

  draw(ctx) {
    if (!this.exploded) {
      ctx.fillStyle = this.color;
      ctx.beginPath();
      ctx.arc(this.x, this.y, 3, 0, Math.PI * 2);
      ctx.fill();
    } else {
      this.particles.forEach(p => {
        ctx.fillStyle = this.color.replace('60%', `${p.alpha * 100}%`);
        ctx.beginPath();
        ctx.arc(p.x, p.y, 2, 0, Math.PI * 2);
        ctx.fill();
      });
    }
  }
}